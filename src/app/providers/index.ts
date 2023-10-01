import { compose } from '@reduxjs/toolkit'

import { withAuth } from './with-auth'
import { withStore } from './with-store'

function Provider({ children }: { children: React.ReactElement }) {
  return children
}

const withProviders = compose(withAuth, withStore)

export default withProviders(Provider)
