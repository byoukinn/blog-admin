const authorRouter = {
	route: null,
	name: null,
	title: '作者管理',
	type: 'folder',
	icon: 'el-icon-document-copy',
	filePath: 'views/author/',
	order: null,
	inNav: true,
	children: [
		{
			title: '添加作者',
			type: 'view',
			name: 'author-add',
			route: '/author/add',
			filePath: 'views/author/AuthorAdd.vue',
			inNav: true,
			icon: '',
		},
		{
			title: '作者列表',
			type: 'view',
			name: 'author-list',
			route: '/author/list',
			filePath: 'views/author/AuthorList.vue',
			inNav: true,
			icon: '',
		},
	],
}

export default authorRouter
