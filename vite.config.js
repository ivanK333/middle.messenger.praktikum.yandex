import { defineConfig } from 'vite';
import postcssNested from 'postcss-nested';
import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssSimpleVars from 'postcss-simple-vars';
import checker from 'vite-plugin-checker';
import handlebarsPrecompile from './plugins/handlebars-precompile';

export default defineConfig(
  {
    plugins: [
      handlebarsPrecompile(),
      checker({
        typescript: true,
      }),
    ],
    css: {
      postcss: {
        plugins: [
          postcssNested,
          postcssImport,
          postcssMixins,
          postcssSimpleVars,
        ],
      },
    },
  },
);
