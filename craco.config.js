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
                    // '@primary-color': '#3ace23',
                    // '@layout-header-background':'#24292f'

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