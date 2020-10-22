# hanson-ui

## 安装
npm install hansonggoruia

### vue3项目使用
import install from 'hansonggoruia'

import 'hansonggoruia/dist/index.css'

createApp(App).use(install)

ts项目:

shims-vue.d.ts中增加:

declare module 'hansonggoruia'
