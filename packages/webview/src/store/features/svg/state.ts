import type { SVGState } from '@/store/types/svg'

const initialState: SVGState = {
  components: [],
  files: {},
  componentsPendingRefresh: [],
  search: '',
}

export default initialState
