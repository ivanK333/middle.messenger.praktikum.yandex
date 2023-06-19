import { defineConfig } from 'vite';
import handlebarsPrecompile from './plugins/handlebars-precompile';
import postcssNested from 'postcss-nested';
import postcssImport from 'postcss-import';
import postcssMixins from 'postcss-mixins';
import postcssSimpleVars from 'postcss-simple-vars';
import postcssComment from 'postcss-comment';
import checker from 'vite-plugin-checker'

export default defineConfig(
  {
    plugins: [
      handlebarsPrecompile(),
      checker({
          typescript: true,
        }
      )
    ],
    css: {
      postcss: {
        parser: postcssComment,
        plugins: [
          postcssNested,
          postcssImport,
          postcssMixins,
          postcssSimpleVars,
        ],
      }
    },
  }
);
