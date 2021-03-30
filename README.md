# hanson-ui

## 安装
npm install hansonggoruia

### 本地
npm run serve

### vue3项目使用
import hansonggoruia from 'hansonggoruia'

import 'hansonggoruia/dist/index.css'

createApp(App).use(hansonggoruia)

###ts项目:

shims-vue.d.ts中增加:

declare module 'hansonggoruia'
