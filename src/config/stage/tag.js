const tagRouter = {
	route: null,
	name: null,
	title: '标签管理',
	type: 'folder',
	icon: 'el-icon-collection-tag',
	filePath: 'views/tag/',
	order: null,
	inNav: true,
	children: [
		{
			title: '添加标签',
			type: 'view',
			name: 'tag-add',
			route: '/tag/add',
			filePath: 'views/tag/TagInfo.vue',
			inNav: true,
			icon: '',
		},
		{
			title: '标签列表',
			type: 'view',
			name: 'tag-list',
			route: '/tag/list',
			filePath: 'views/tag/TagList.vue',
			inNav: true,
			search: true,
			outFromCard: true,

			icon: '',
		},
	],
}

export default tagRouter
