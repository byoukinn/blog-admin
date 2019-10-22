const commentRouter = {
	route: null,
	name: null,
	title: '评论管理',
	type: 'folder',
	icon: 'el-icon-chat-line-square',
	filePath: 'views/comment/',
	order: null,
	inNav: true,
	children: [
		{
			title: '评论列表',
			type: 'view',
			name: 'comment-list',
			route: '/comment/list',
			filePath: 'views/comment/CommentList.vue',
			inNav: true,
			search: true,
			outFromCard: true,
			icon: '',
		},
	],
}

export default commentRouter
