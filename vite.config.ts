import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
// instead of long path name
import path from 'path';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //resolve long pathname with path
  resolve: {
    alias: [{ find: '@', replacement: path.resolve(__dirname, 'src') }],
  },
});
