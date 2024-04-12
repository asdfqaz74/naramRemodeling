export const navigationItems = [
  {
    id: 'Main',
    path: '/',
    text: '메인 페이지',
    lazy: async () => {
      const Module = await import('@/pages/Main/Main');
      return { Component: Module.default };
    },
  },
  {
    id: 'Login',
    path: '/Login',
    text: '로그인 페이지',
    lazy: async () => {
      const Module = await import('@/pages/Login/Login');
      return { Component: Module.default };
    },
    children: [
      {
        index: true,
        text: '로그인 페이지',
        lazy: async () => {
          const Module = await import('@/pages/Login/pages/Login');
          return { Component: Module.default };
        },
      },
      {
        text: '아이디 찾기',
        path: 'FindId',
        lazy: async () => {
          const Module = await import('@/pages/Login/pages/FindId');
          return { Component: Module.default };
        },
      },
      {
        text: '비밀번호 찾기',
        path: 'FindPassword',
        lazy: async () => {
          const Module = await import('@/pages/Login/pages/FindPassword');
          return { Component: Module.default };
        },
      },
    ],
  },

  {
    id: 'Join',
    path: '/Join',
    text: '회원가입 페이지',
    lazy: async () => {
      const Module = await import('@/pages/Join/Join');
      return { Component: Module.default };
    },
  },
  {
    id: 'Introduction',
    path: '/Introduction',
    text: '회사소개 페이지',
    lazy: async () => {
      const Module = await import('@/pages/CompanyIntroduction/CompanyIntroduction');
      return { Component: Module.default };
    },
    children: [
      {
        index: true,
        text: '회사소개 CEO소개, 연혁 등등',
        lazy: async () => {
          const Module = await import('@/pages/CompanyIntroduction/pages/Introduction');
          return { Component: Module.default };
        },
      },
      {
        text: '찾아오시는 길',
        path: 'Location',
        lazy: async () => {
          const Module = await import('@/pages/CompanyIntroduction/pages/Location');
          return { Component: Module.default };
        },
      },
    ],
  },

  {
    id: 'InformationCenter',
    path: '/InformationCenter',
    text: '정보센터 페이지',
    lazy: async () => {
      const Module = await import('@/pages/InformationCenter/InformationCenter');
      return { Component: Module.default };
    },
  },
  {
    id: 'ProductInformation',
    path: '/ProductInformation',
    text: '제품정보 페이지',
    lazy: async () => {
      const Module = await import('@/pages/ProductInformation/ProductInformation');
      return { Component: Module.default };
    },
  },
  {
    id: 'Recruitment',
    path: '/Recruitment',
    text: '인재채용 페이지',
    lazy: async () => {
      const Module = await import('@/pages/Recruitment/Recruitment');
      return { Component: Module.default };
    },
  },
  {
    id: 'Notice',
    path: '/Notice',
    text: '공지사항 페이지',

    lazy: async () => {
      const Module = await import('@/pages/Notice/Notice');
      return { Component: Module.default };
    },
  },
  {
    id: 'CustomerService',
    path: '/CustomerService',
    text: '고객센터 페이지',
    lazy: async () => {
      const Module = await import('@/pages/CustomerService/CustomerService');
      return { Component: Module.default };
    },
  },
  {
    id: 'QnA',
    path: '/QnA',
    text: '질의응답 페이지',
    lazy: async () => {
      const Module = await import('@/pages/QnA/QnA');
      return { Component: Module.default };
    },
  },
  {
    id: 'MyPage',
    path: '/MyPage',
    text: '마이페이지 페이지',
    lazy: async () => {
      const Module = await import('@/pages/MyPage/MyPage');
      return { Component: Module.default };
    },
  },
];
