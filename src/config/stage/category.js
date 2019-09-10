const categoryRouter = {
    route: null,
    name: null,
    title: '分类管理',
    type: 'folder',
    icon: 'el-icon-document-copy',
    filePath: 'views/category/',
    order: null,
    inNav: true,
    children: [{
            title: '添加分类',
            type: 'view',
            name: 'category-info',
            route: '/category/add',
            filePath: 'views/category/CategoryInfo.vue',
            inNav: true,
            icon: ''
        },
        {
            title: '分类列表',
            type: 'view',
            name: 'category-list',
            route: '/category/list',
            filePath: 'views/category/CategoryList.vue',
            inNav: true,
            icon: ''
        }
    ]
}

export default categoryRouter