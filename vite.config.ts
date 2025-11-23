import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// vite.config.ts
export default defineConfig({
  // 必须是根路径 '/'，不能是 './' 或 '/my-resume/'
  base: '/', 
  plugins: [react()],
}); 