# 1.在当前目录下快速创建create-react-app ts项目

```sh
yarn create react-app . --template typescript
yarn add antd
yarn add @craco/craco
yarn add craco-antd
yarn add craco-less
yarn add nodemon
yarn add react-router-dom
yarn add redux
yarn add react-redux
yarn add @reduxjs/toolkit
yarn add http-proxy-middleware -D
```

创建`craco.config.js`配置文件：

```js
const CracoAntDesignPlugin = require('craco-antd');
const CracoLessPlugin = require('craco-less')
const {loaderByName} = require("@craco/craco");
process.env.BROWSER = "none"
module.exports = {
    plugins: [
        {
            plugin: CracoAntDesignPlugin,
            options: {
                customizeTheme: {
                    '@primary-color': '#3ace23',
                    '@layout-header-background':'#24292f'

                },
            },
        },
        {
            plugin: CracoLessPlugin,
            options: {
                modifyLessRule(lessRule, context) {
                    // You have to exclude these file suffixes first,
                    // if you want to modify the less module's suffix
                    lessRule.exclude = /\.module\.less$/
                    return lessRule
                },
                modifyLessModuleRule(lessModuleRule, context) {
                    // Configure the file suffix
                    lessModuleRule.test = /\.module\.less$/

                    // Configure the generated local ident name.
                    const cssLoader = lessModuleRule.use.find(loaderByName('css-loader'))
                    cssLoader.options.modules = {
                        localIdentName: '[local]_[hash:base64:5]'
                    }

                    return lessModuleRule
                },

                lessLoaderOptions: {
                    lessOptions: {
                        // modifyVars: {"@primary-color": "#1DA57A"},
                        javascriptEnabled: true
                    }
                }

                // modifyVars: {
                //     'primary-color': '#1DA57A',
                //     'link-color': '#1DA57A',
                //     'border-radius-base': '2px',
                // },
            }
        }
    ],
};
```

修改`package.json`:

```json
{
  "scripts": {
    "start": "nodemon -w craco.config.js  --exec \"craco start\"",
    "build": "craco build",
    "test": "craco test"
  },  
}  
```

设置代理`src/setupProxy.js`：

```js
const {createProxyMiddleware} = require("http-proxy-middleware");
module.exports = function (app) {
    app.use(
        "/api",
        createProxyMiddleware({
            target: "服务器名:端口",
            changeOrigin: true,
            pathRewrite: {'^/api': ''}

        })
    )

};
```

修改`src/react-app-env.d.ts`:

```ts
/// <reference types="react-scripts" />
// 配置支持模块化less
declare module '*.module.less' {
    const classes: {
        readonly [key: string]: string
    }
    export default classes
    declare module '*.less'
}
```



# 2.启动项目
```shell
yarn start
yarn build
yarn eject
```