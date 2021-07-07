import viteESLint from '@ehutch79/vite-eslint';
import compress from 'vite-plugin-compress';

export default {
  plugins: [
    viteESLint({include: ['src/**/*.vue', 'src/**/*.js']}),
    compress({verbose: true}),
  ],
};
