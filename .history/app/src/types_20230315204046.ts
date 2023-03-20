import { type ViteSSGContext } from 'vite-ssg'

export type UserModule = (ctx: ViteSSGContext) => void

export enum Menu {
  Upgrade = 'upgrade',
  Equip = 'equip',
}

export enum Stats {
  Kidneys = 'kidneys',
  Urethra = 'urethra',
  Bladder = 'bladder',
  Ureters = 'ureters',
}
