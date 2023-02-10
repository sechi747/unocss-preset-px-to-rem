import type { Preset } from "unocss"

const pxREG = /(-?[\.\d]+)px/g

export interface PxToRemOptions {
  baseFontSize?: number
  unitPrecision?: number
}

export default function remToPxPreset(options: PxToRemOptions = {}): Preset {
  const {
    baseFontSize = 16,
    unitPrecision = 2
  } = options

  const pxToRem = (px: number) => ( px / baseFontSize).toFixed(unitPrecision)

  return {
    name: 'unocss-preset-px-to-rem',
    postprocess: (util) => {
      util.entries.forEach((i) => {
        const value = i[1]
        if (value && typeof value === 'string' && pxREG.test(value))
          i[1] = value.replace(pxREG, (_, p1) => `${pxToRem(p1)}rem`)
      })
    },
  }
}