import { Preset } from 'unocss';

interface PxToRemOptions {
    baseFontSize?: number;
    unitPrecision?: number;
}
declare function remToPxPreset(options?: PxToRemOptions): Preset;

export { PxToRemOptions, remToPxPreset as default };
