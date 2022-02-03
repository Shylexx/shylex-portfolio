const { jsx } = require('@emotion/react')

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['shylexx.com', 'i.scdn.co'],
      },
    withMDX: {
        pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    },
}