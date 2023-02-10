"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var src_exports = {};
__export(src_exports, {
  default: () => remToPxPreset
});
module.exports = __toCommonJS(src_exports);
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
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {});
