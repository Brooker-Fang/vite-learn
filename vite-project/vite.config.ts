import { defineConfig } from 'vite'
// 为避免类型报错，你需要通过 `pnpm i @types/node -D` 安装类型
import path from "path"
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  // 可以指定查找入口文件index.html的根目录
  root: path.join(__dirname, "src"),
  plugins: [react()],
})
