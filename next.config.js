const { jsx } = require('@emotion/react')

const withMDX = require('@next/mdx')({
    extension: /\.mdx?$/,
    options: {
        remarkPlugins: [],
        rehypePlugins: [],
    },
})

module.exports = {
    reactStrictMode: true,
    images: {
        domains: ['shylexx.com'],
      },
    withMDX: {
        pageExtensions: ['js', 'jsx', 'md', 'mdx'],
    },
}