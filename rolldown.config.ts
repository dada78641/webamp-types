import {defineConfig} from 'rolldown';
import {dts} from 'rolldown-plugin-dts';

export default defineConfig({
  input: './types/webamp.d.ts',
  output: {file: './dist/types.d.mts'},
  plugins: [dts()],
});
