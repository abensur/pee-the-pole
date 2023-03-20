import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export enum Stats {
  Kidneys = 'kidneys',
  Urethra = 'urethra',
  Bladder = 'bladder',
  Ureters = 'ureters',
}
