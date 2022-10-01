import StarportPlugin from 'vue-starport'

import { type UserModule } from '~/types'

export const install: UserModule = ({ app }) => {
  // do something
  app.use(StarportPlugin())
}
