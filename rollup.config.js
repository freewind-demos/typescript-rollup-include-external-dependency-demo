import typescript from 'rollup-plugin-typescript2';
import resolve from 'rollup-plugin-node-resolve';

export default {
  input: 'main.ts',
  plugins: [
    typescript(),
    resolve(),
  ],
  output: {
    file: 'bundle.js',
    format: 'cjs',
  }
}
