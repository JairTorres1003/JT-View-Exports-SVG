import { useSearchParams } from 'react-router-dom'

import { LoadingPage } from '@/core/components/LoadingPage'

const Page = () => {
  const params = useSearchParams()[0]
  const loadMessage = params.get('load-message') ?? ''

  return <LoadingPage>{loadMessage}</LoadingPage>
}

export default Page
