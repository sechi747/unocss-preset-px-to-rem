// src/index.ts
var pxREG = /(-?[\.\d]+)px/g;
function remToPxPreset(options = {}) {
  const {
    baseFontSize = 16,
    unitPrecision = 2
  } = options;
  const pxToRem = (px) => (px / baseFontSize).toFixed(unitPrecision);
  return {
    name: "unocss-preset-px-to-rem",
    postprocess: (util) => {
      util.entries.forEach((i) => {
        const value = i[1];
        if (value && typeof value === "string" && pxREG.test(value))
          i[1] = value.replace(pxREG, (_, p1) => `${pxToRem(p1)}rem`);
      });
    }
  };
}
export {
  remToPxPreset as default
};
