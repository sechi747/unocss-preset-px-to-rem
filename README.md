## unocss-preset-rem-transform
Convert all px to rem in utils with uncosss.

## installation
`pnpm i unocss-preset-rem-transform -D`

## config
``` javascript
// unocss.config.ts
import presetPxToRem from "unocss-preset-px-to-rem"

export default defineConfig({
  // default base font size: 16; default unit precision: 2
  presets: [presetPxToRem()],
})
```