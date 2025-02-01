import { defineConfig } from 'tsup';

export default defineConfig({
  entry: ['./src/index.ts'],
  format: ['esm'],
  target: 'node16',
  minify: true,
  outDir: 'dist',
  clean: true,
});
