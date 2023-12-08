// postcss.config.cjs
// 假如你使用的框架/工具不支持 postcss.config.cjs，则可以使用内联的写法
// 其中 `autoprefixer` 有可能已经内置了，假如框架内置了可以去除
module.exports = {
    plugins: [
        require('tailwindcss')(),
        require('autoprefixer')(),
        require('weapp-tailwindcss/css-macro/postcss'),
        require('postcss-rem-to-responsive-pixel')({
            rootValue: 32,
            propList: ['*'],
            transformUnit: 'rpx'
        })]
}