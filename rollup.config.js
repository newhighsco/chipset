import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from '@rollup/plugin-typescript'
import dts from 'rollup-plugin-dts'
import postcss from 'rollup-plugin-postcss'
import { terser } from 'rollup-plugin-terser'
import peerDepsExternal from 'rollup-plugin-peer-deps-external'
import url from '@rollup/plugin-url'
import svgr from '@svgr/rollup'
import packageInfo from './package.json'

const { main: mainPath, module: modulePath, types: typesPath } = packageInfo

export default [
  {
    input: 'src/index.ts',
    output: [
      {
        file: mainPath,
        format: 'cjs',
        sourcemap: true
      },
      {
        file: modulePath,
        format: 'esm',
        sourcemap: true
      }
    ],
    plugins: [
      peerDepsExternal(),
      postcss({
        extract: false,
        modules: true,
        use: ['sass']
      }),
      resolve(),
      commonjs(),
      typescript({ tsconfig: './tsconfig.json' }),
      url(),
      svgr(),
      terser()
    ],
    external: ['react', 'react-dom']
  },
  {
    input: 'dist/esm/types/index.d.ts',
    output: [{ file: typesPath, format: 'esm' }],
    plugins: [dts()]
  }
]
