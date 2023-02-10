## unocss-preset-px2rem
Convert all px to rem in utils with uncosss.

## installation
`pnpm i unocss-preset-px2rem -D`

## config
``` javascript
// unocss.config.ts
import presetPxToRem from "unocss-preset-px2rem"

export default defineConfig({
  // default base font size: 16; default unit precision: 2
  presets: [presetPxToRem()],
})
```