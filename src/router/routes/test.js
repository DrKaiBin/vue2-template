const testRoutes = {
    path: '/1',
    name: '主页1',
    component: () => import('@/views/dashboard/index'),
    children: [
        {
            path: '/2',
            name: '主页2',
            component: () => import('@/views/dashboard/index')
        },
        {
            path: '/3',
            name: '主页3',
            component: () => import('@/views/dashboard/index')
        },
        {
            path: '/4',
            name: '主页4',
            component: () => import('@/views/dashboard/index')
        },
        {
            path: '/5',
            name: '主页5',
            component: () => import('@/views/dashboard/index')
        }
    ]
}

export default testRoutes