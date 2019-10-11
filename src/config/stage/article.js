const articleRouter = {
	route: null,
	name: null,
	title: '文章管理',
	type: 'folder',
	icon: 'el-icon-document-copy',
	filePath: 'views/article/',
	order: null,
	inNav: true,
	children: [
		{
			title: '添加文章',
			type: 'view',
			name: 'article-add',
			route: '/article/add',
			filePath: 'views/article/ArticleInfo.vue',
			inNav: true,
			icon: '',
		},
		{
			title: '文章列表',
			type: 'view',
			name: 'article-list',
			route: '/article/list',
			filePath: 'views/article/ArticleList.vue',
			inNav: true,
			search: true,
			outFromCard: true,

			icon: '',
		},
	],
}

export default articleRouter
