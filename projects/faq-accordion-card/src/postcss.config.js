import postcssPresetEnv from 'postcss-preset-env';
import atImport from 'postcss-import'

export default {
    plugins: [
        // cssnano(),
        atImport(),
        postcssPresetEnv({ stage: 1 }),
    ],
};
