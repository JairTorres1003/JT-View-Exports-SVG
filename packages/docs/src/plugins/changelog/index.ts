/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

import path from 'node:path'
import pluginContentBlog from '@docusaurus/plugin-content-blog'
import { aliasedSitePath, docuHash, normalizeUrl, safeGlobby } from '@docusaurus/utils'
import fs from 'fs-extra'
import { createBlogFiles, toChangelogEntries } from './utils'

const MonorepoRoot = path.resolve(path.join(__dirname, '../../../../..'))

const ChangelogFilePattern = 'CHANGELOG(-v[0-9]*)?.md'

async function getChangelogFiles() {
  return await safeGlobby([ChangelogFilePattern], { cwd: MonorepoRoot })
}

function readChangelogFile(filename: string) {
  return fs.readFile(path.join(MonorepoRoot, filename), 'utf-8')
}

async function loadChangelogEntries(changelogFiles: string[]) {
  const filesContent = await Promise.all(changelogFiles.map(readChangelogFile))
  return toChangelogEntries(filesContent)
}

const ChangelogPlugin: typeof pluginContentBlog = async function ChangelogPlugin(context, options) {
  const generateDir = path.join(context.siteDir, 'changelog/source')
  const blogPlugin = await pluginContentBlog(context, {
    ...options,
    path: generateDir,
    id: 'changelog',
    // 🔴 MANDATORY
    pageBasePath: '/',
    authorsMapPath: 'authors.json',
    tagsBasePath: 'tags',
    truncateMarker: /<!--\s*truncate\s*-->/,
    authorsBasePath: 'authors',
    include: ['**/*.{md,mdx}'],
    exclude: ['**/_*.{md,mdx}'],
    beforeDefaultRemarkPlugins: [],
    beforeDefaultRehypePlugins: [],
    remarkPlugins: [],
    rehypePlugins: [],
    blogListComponent: '@theme/BlogListPage',
    blogPostComponent: '@theme/BlogPostPage',
    blogAuthorsListComponent: '@theme/Blog/Pages/BlogAuthorsListPage',
    blogTagsListComponent: '@theme/BlogTagsListPage',
    blogTagsPostsComponent: '@theme/BlogTagsPostsPage',
    admonitions: { keywords: ['note', 'tip', 'danger', 'info', 'caution', 'warning'] },
    processBlogPosts: async ({ blogPosts }) => {
      // Sort by date descending
      return blogPosts?.sort((a, b) => b.metadata.date.getTime() - a.metadata.date.getTime())
    },
  })
  const changelogFiles = await getChangelogFiles()

  return {
    ...blogPlugin,
    name: 'changelog-plugin',

    async loadContent() {
      const changelogEntries = await loadChangelogEntries(changelogFiles)

      // We have to create intermediate files here
      // Unfortunately Docusaurus doesn't have yet any concept of virtual file
      await createBlogFiles(generateDir, changelogEntries)

      if (!blogPlugin.loadContent) {
        throw new Error('Blog plugin loadContent is undefined')
      }

      // Read the files we actually just wrote
      const content = await blogPlugin.loadContent()

      content.blogPosts.forEach((post, index) => {
        const pageIndex = Math.floor(index / (options.postsPerPage as number))
        // @ts-expect-error: TODO Docusaurus use interface declaration merging
        post.metadata.listPageLink = normalizeUrl([
          context.baseUrl,
          options.routeBasePath,
          pageIndex === 0 ? '/' : `/page/${pageIndex + 1}`,
        ])

        // @ts-expect-error: TODO Docusaurus use interface declaration merging
        post.metadata.editUrl = `${options.editUrl}#L${changelogEntries[index].startLine}`
      })
      return content
    },

    configureWebpack(...args) {
      const config = blogPlugin.configureWebpack?.(...args)
      const pluginDataDirRoot = path.join(context.generatedFilesDir, 'changelog-plugin', 'default')
      // Redirect the metadata path to our folder
      // @ts-expect-error: unsafe but works
      const mdxLoader = config.module.rules[0].use[0]
      mdxLoader.options.metadataPath = (mdxPath: string) => {
        // Note that metadataPath must be the same/in-sync as
        // the path from createData for each MDX.
        const aliasedPath = aliasedSitePath(mdxPath, context.siteDir)
        return path.join(pluginDataDirRoot, `${docuHash(aliasedPath)}.json`)
      }
      return config
    },

    getPathsToWatch() {
      return [path.join(MonorepoRoot, ChangelogFilePattern)]
    },
  }
}

export default ChangelogPlugin
