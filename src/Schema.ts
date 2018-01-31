import { schema } from 'normalizr'

export module Schemas {
  export const user = new schema.Entity('users', {}, { idAttribute: 'user_id' })
  export const arrayOfContent = new schema.Array(user)
}
