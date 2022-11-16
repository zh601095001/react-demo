/// <reference types="react-scripts" />
// 配置支持模块化less
declare module '*.module.less' {
    const classes: {
        readonly [key: string]: string
    }
    export default classes
    declare module '*.less'
}