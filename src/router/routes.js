import homeRoutes from './home-router.js'

const routes = [{
        path: '/auth',
        name: 'auth',
        component: () => import( /* webpackChunkName: "auth" */ '@/components/layout/Auth.vue'),
        meta: {
            icon: 'el-icon-document',
            title: '登录',
        },
    },
    {
        path: '/',
        name: 'home',
        redirect: '/about',
        component: () => import('@/views/Home.vue'),
        children: [
            ...homeRoutes,
            {

                path: '/setting',
                name: 'setting',
                component: () => import('@/views/Setting.vue'),
                meta: {
                    icon: 'el-icon-document',
                    title: '全局设置',
                },
            },
            {
                name: 'about',
                path: '/about',
                meta: {
                    icon: 'el-icon-document',
                    title: '关于本站',
                },
            },
            {
                path: '/404',
                name: '404',
                component: () => import('@/views/404.vue'),
                meta: {
                    hidden: true,
                }

            },
        ],
        meta: {
            hidden: true,
            title: '首页',
        }

    },
    {
        path: '/*',
        redirect: '/404',
    },
]


export default routes