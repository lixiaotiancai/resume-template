const config = {
  selfInfo: {
    name: '李骁',
    firstname: 'Li',
    lastname: 'Xiao',
    avatar: 'https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1524547972348&di=7dcbbc62d1bf4b3791d92fc69fa2d3e2&imgtype=0&src=http%3A%2F%2Fi1.hdslb.com%2Fbfs%2Fface%2Fcc0d306bc82bfef66352da584b24451ba4ddd7d5.jpg',
    slogan: '念经(coding) 参禅(thinking) 化缘(searching)',
    sex: '男',
    age: 24,
    edu: '硕士',
    grade: '研二',
    graduate: '大连海事大学',
    now: '武汉大学',
    contact: {
      email: '1422975258@qq.com',
      phone: '13079836973',
      github: 'https://github.com/lixiaotiancai',
      gitlab: 'http://git.imweb.io/lixiaotiancai'
    }
  },
  selfIntro: {
    content: '一年前在导师的提议下开始接触前端，在学习前端的途中被它的魅力所吸引，并深深喜欢上了前端开发。但学习之路却并不平坦，作为对前端一无所知的我在开始学习前端时宛如一只无头苍蝇，东学一点，西学一点，学的毫无头绪。直到遇到了IMWeb团队研发的next学位课程，让我在前端学习的旅途开始步入正轨'
  },
  selfExp: {
    content: [{
      duration: '2012-2017',
      school: '大连海事大学',
      introduction: '本科专业为航海技术，因为想改变自己的生活，又热衷于计算机，于是下定决心考研。自学了计算机本科专业相关知识，并考下了计算机三级证书。'
    }, {
      duration: '2017-至今',
      school: '武汉大学',
      introduction: '计算机技术专业，开设课程有数据挖掘，多媒体技术，人工智能，高级软件工程，嵌入式开发等。平时大多呆在实验室，了解微信小程序，微信公众号开发，深度学习(还考了个证书)。擅长前端开发，热爱前端开发。'
    }]
  },
  selfSkill: {
    content: [{
      category: 'JavaScript',
      content: 'es6 react nodejs webpack ajax jquery 面向对象 cmd/amd等',
      exp: 60,
      degree: '熟悉'
    }, {
      category: 'CSS/HTML',
      content: 'HTML5 语义化 SEO CSS3 sass 响应式等',
      exp: 55,
      degree: '熟悉'
    }, {
      category: '浏览器相关',
      content: 'DOM模型 浏览器渲染机制 重绘重排 js引擎机制等',
      exp: 50,
      degree: '了解'
    }, {
      category: '开发调试',
      content: '模块测试 兼容性测试 hook standard 性能检测及优化等',
      exp: 40,
      degree: '了解'
    }, {
      category: '网络知识',
      content: '网络协议 http1.1/2.0 缓存策略 本地存储 cdn等',
      exp: 30,
      degree: '了解'
    }, {
      category: '安全知识',
      content: 'xss CSRF DDos相关攻击及防范等',
      exp: 35,
      degree: '了解'
    }]
  },
  selfProject: {
    content: [{
      projectName: '我的个人网站',
      projectIntro: '自己独立搭建的个人网站，网站目前还在建设中。服务器采用的阿里云ECS，操作系统为linux，后台采用koa搭建，前端使用的为ES5原生js，尚未使用数据库，数据由mock data模拟提供。',
      projectSkillStack: 'linux koa ajax 组件 缓存的配置',
      projectCodeLink: 'https://github.com/lixiaotiancai/my-website',
      projectOnline: 'http://localhost:3000/'
    }, {
      projectName: '口袋豆瓣PWA',
      projectIntro: '在口袋豆瓣项目的基础之上，将整个项目进行了PWA升级',
      projectSkillStack: 'react redux react-router scss webpack es6 jsonp PWA(service worker, web notification, manifest.json)',
      projectCodeLink: 'https://github.com/lixiaotiancai/doubanPocketPWA',
      projectOnline: 'https://lixiaotiancai.github.io/doubanPocket/#/'
    }, {
      projectName: '我的个人函数工具库lxQuery.js',
      projectIntro: '阅读过jquery源码后深受启发，于是模仿jquery造出了自己的函数工具库',
      projectSkillStack: 'es6 模块测试(jest) 原型 npm等',
      projectCodeLink: 'https://github.com/lixiaotiancai/lxQuery',
      projectOnline: 'https://www.npmjs.com/package/lxquery'
    }, {
      projectName: '简易在线聊天室',
      projectIntro: '一个简易在线聊天室，支持用户登录注册与登出，支持实时聊天，发布公告',
      projectSkillStack: 'websocket mongodb cookie',
      projectCodeLink: 'https://github.com/lixiaotiancai/chat_online',
      projectOnline: 'http://localhost:3000/chat_online'
    }, {
      projectName: '线上异常监控工具lxBadJS-report.js',
      projectIntro: '阅读过badjs-report源码后，造出了自己的线上异常监控工具，支持无后台采用alert的方式将错误报出',
      projectSkillStack: 'window.onerror indexDB image上报 iframe上报',
      projectCodeLink: 'https://github.com/lixiaotiancai/lxBadJS-report',
      projectOnline: 'http://localhost:3000/lxbadjs-demo'
    }, {
      projectName: '简历模板',
      projectIntro: '万能简历模板，只需更改配置项就能生成不同的简历，该项目深受react启发，将简历不同板块以组件的形式一个个渲染至根节点，最后生成完整简历，并支持响应式',
      projectSkillStack: '响应式 flex布局 scss 组件',
      projectCodeLink: 'https://github.com/lixiaotiancai/resume-template',
      projectOnline: 'http://localhost:3000/resume'
    }, {
      projectName: '炫酷的命令行小工具',
      projectIntro: '使用nodejs制作的命令行小工具，支持彩色文字滚动，日期查询，天气查询，发送邮件等趣味的小功能，该小项目曾获得前端NEXT特训班优秀学员称号~',
      projectSkillStack: 'nodejs CMD',
      projectCodeLink: 'https://github.com/lixiaotiancai/command-line-tools',
      projectOnline: 'https://github.com/lixiaotiancai/command-line-tools'
    }]
  }
}

export default config
