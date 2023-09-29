import { compose } from '@reduxjs/toolkit'

import { withAuth } from './with-auth'

function Provider({ children }: { children: React.ReactElement }) {
  return children
}

const withProviders = compose(withAuth)

export default withProviders(Provider)
