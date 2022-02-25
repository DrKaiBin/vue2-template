const testRoutes = {
    testIndex: {
        id: 'testIndex',
        parentId: 'layout',
        path: '/',
        component: () => import('@/views/dashboard/index')
    },
    testSafe: {
        // id: 'testSafe',
        parentId: 'testIndex',
        // path: '/testSafe',
        component: () => import('@/views/dashboard/index')
    },
    testComponent: {
        // id: 'testComponent',
        parentId: 'testIndex',
        // path: '/testComponent',
        component: () => import('@/views/dashboard/index')
    }
    // path: '/1',
    // name: 'TEST',
    // component: () => import('@/views/dashboard/index'),
    // children: [
    //     {
    //         path: '/2',
    //         name: '主页2',
    //         component: () => import('@/views/dashboard/index')
    //     },
    //     {
    //         path: '/3',
    //         name: '主页3',
    //         component: () => import('@/views/dashboard/index')
    //     },
    //     {
    //         path: '/4',
    //         name: '主页4',
    //         component: () => import('@/views/dashboard/index')
    //     },
    //     {
    //         path: '/5',
    //         name: '主页5',
    //         component: () => import('@/views/dashboard/index')
    //     }
    // ]
}

export default testRoutes