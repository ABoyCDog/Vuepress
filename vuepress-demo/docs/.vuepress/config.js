module.exports = {
  title: 'Hello Mozambique',
  description: 'Hello, my friend!',
  head: [
      ['link', {
          rel: 'icon',
          href: `/favicon.ico`
      }]
  ],
  dest: './docs/.vuepress/dist',
  ga: '',
  evergreen: true,
  // 配置导航栏的nav 通过 themeConfig nav
  themeConfig: {
    nav: [
      { text: 'Home', link: '/' },                      // 根路径
      { text: 'Guide', link: '/guide/1安装' },
      { text: 'External', link: 'https://cn.bing.com' }, // 外部链接
      // 显示下拉列表
      {
        text: 'Languages',
        items: [
          { text: 'Chinese', link: '/languages/chinese' },
          { text: 'English', link: '/languages/english' }
        ]
      },
      // 下拉列表显示分组
      {
        text: '高级',
        items: [
          { 
            text: '算法', 
            items: [
              { text: '冒泡', link: '/languages/chinese' },
              { text: '快速', link: '/languages/english' }
            ] 
          },
          { 
            text: '设计模式', 
            items: [
              { text: '工厂', link: '/languages/chinese' },
              { text: '单例', link: '/languages/english'},
            ] 
          },
        ]
      }
    ],

    // auto为全部页面自己生成自己的侧边栏
    // sidebar: 'auto'

    // 项目只显示一个侧边栏
    // sidebar: [
    //   '/',
    //   '/guide/README.md',
    //   ['/languages/chinese', '/languages/english'],
    //   '/home1',
    //   'home2',
    //   '/home3'
    // ]

    // sidebarDepth: 2, // 设置侧边栏深度
    sidebar: [
      {
        title: 'Home1',
        collapsable: false, // 设置是否可折叠
        children: ['home1']
      },
      {
        title: 'Guide',
        collapsable: false, // 设置是否可折叠
        children: [
          '/guide/1安装',
          '/guide/2初始化',
          '/guide/3导航栏',
          '/guide/4侧边栏'
        ]
      },
      {
        title: 'languages',
        collapsable: true, // 设置是否可折叠
        children: [
          '/languages/chinese',
          '/languages/english'
        ]
      }
    ]
  }
}