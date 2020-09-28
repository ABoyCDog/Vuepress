const path = require('path');

module.exports = {
  base: '/dist/', // 打包部署的基础路径，设置不对会导致css样式无法加载等问题
  title: 'TServer',
  description: '探索和发现地理价值',
  head: [
      ['link', {
          rel: 'icon',
          href: `/favicon.ico`
      }]
  ],
  dest: './docs/.vuepress/dist', // build 打包后生成的文件位置
  host: 'localhost',
  port: 999,
  ga: '',
  evergreen: true,
  themeConfig: {
    // 导航栏
    nav: [
      { text: '操作指南', link: '/guide/安装' },
      {
        text: '开发文档',
        items: [
          { text: 'TServer',link: '/TServer/mapServer' },
          { text: 'Onemap', link: '/Onemap/'},
        ]
      },
      { text: '样例展示', link: 'http://map.taiji.com.cn' },
      {
        text: '语言',
        items: [
          { text: '中文', link: '/languages/chinese' },
          { text: '英文', link: '/languages/english' }
        ]
      },
      { text: '联系我们', link: '/connect'}
    ],

    // 侧边栏
    sidebarDepth: 1, // 设置侧边栏深度
    sidebar: {
      '/guide/': [
        '/guide/安装',
        '/guide/初始化',
        '/guide/导航栏',
        '/guide/侧边栏',
        '/guide/搜索框',
        '/guide/更新时间',
        '/guide/自定义页面类'
      ],
      '/TServer/': [
        '/TServer/mapServer',
        '/TServer/searchServer',
        '/TServer/restServer',
      ],
      '/Onemap/': [
        '/Onemap/'
      ],
      '/languages/': [
        '/languages/chinese',
        '/languages/english'
      ],
      '/': [
        '',
        'connect'
      ]
    },

    // 配置静态资源
    configureWebpack: {
      resolve: {
        alias: {
          '@vuepress': path.join(__dirname, '../images/vuepress')
        }
      }
    },

    // algolia搜索
    algolia: {
      apiKey: '<API_KEY>',
      indexName: '<INDEX_NAME>'
    }
  },
  // 插件
  plugins: {
    '@vuepress/back-to-top': true,
    // '@vuepress/search': true
  }
}