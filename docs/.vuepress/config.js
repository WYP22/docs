module.exports = {
    title:'Choices的小木屋',
    description: 'Choices blog',
    head: [
        ['meta', { name: 'author', content: 'Choices' }]
        ['meta', { name: 'keywords', content: 'vuepress 介绍' }]
      ],
    themeConfig: {
      logo: '/assets/img/hero.png',
    //   navbar: false,
      nav: [
        { text: 'Home', link: '/' },
        { text: 'Guide', link: '/about' },
        {
            text: 'Languages',
            // 这个就是分组里面的东西 改就
            items: [
              { text: 'Group1', items: [
                { text: 'Home', link: '/' },
                { text: 'Guide', link: '/about' },
              ] },
              { text: 'Group2', items: [
                { text: 'Home', link: '/' },
                { text: 'Guide', link: '/about' },
              ] }
            ]
          },
        { text: 'External', link: 'https://google.com' },
      ],
      sidebar: {
        '/css/':[
                'c-aaa',
                'c-bbb',
                'c-ccc',
            ],
        '/javascript/':[
            'j-aaa',
            'j-bbb',
            'j-ccc',
        ]
        }
    }
  }