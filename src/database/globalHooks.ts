import { Schema } from 'mongoose'
import { Globalhash } from '../common/security/hash.js'
import { Globalencrypt } from '../common/security/encrypt.js'
export function hashAndEncryptHook(schema: Schema) {
  schema.pre('save', function () {
    if (this.password)
      this.password = Globalhash({ plainText: this.password as string })
    if (this.phone)
      this.phone = Globalencrypt({ plainText: this.phone as string })
  })
}
