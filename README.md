# hanson-ui

## 仿element-plus，使用vue3.0开发的组件库

### 本地
npm run serve

### 安装
npm install hansonggoruia

### vue3项目使用
import hansonggoruia from 'hansonggoruia'

import 'hansonggoruia/dist/index.css'

createApp(App).use(hansonggoruia)

### ts项目:

shims-vue.d.ts中增加:

declare module 'hansonggoruia'


## 组件列表

- h-button                按钮
- h-icon                  icon
- h-input                 输入框
- h-radio                 单选框
- h-radio-group           单选框组
- h-checkbox              多选框
- h-checkbox-group        多选框组
- h-form                  表单
