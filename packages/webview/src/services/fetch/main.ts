import { registerInterceptor, setupFetchEngine } from './fetchInterceptorEngine'
import { packageHandler } from './interceptors/packageInterceptor'
import { themeHandler } from './interceptors/themeInterceptor'

registerInterceptor(packageHandler)
registerInterceptor(themeHandler)

setupFetchEngine()
