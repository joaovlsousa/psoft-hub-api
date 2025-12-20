import crypto from '@47ng/cloak'
import { env } from '@config/env.ts'

export class HashService {
  public static async hash(str: string): Promise<string> {
    const hash = await crypto.encryptString(str, env.HASH_SECRET)

    return hash
  }
  public static async decode(hash: string): Promise<string> {
    const str = await crypto.decryptString(hash, env.HASH_SECRET)

    return str
  }
}
