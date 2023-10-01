import { createAppThunk } from '../../utils'

export const getValue = createAppThunk<string, string>(
  'featureExample/getValue',
  async (data, thAPI) => {
    return 'value'
  }
)
