var Mock = require('mockjs')

Mock.setup({
	timeout: '200-400',
})

var users = [
	{
		aname: 'admin',
		auth: 'zxc123456',
		id: 1,
	},
	{
		aname: 'bk',
		auth: 'zxc123456',
		id: 2,
	},
	{
		aname: 'ak',
		auth: 'zxc123456',
		id: 3,
	},
]

Mock.mock('/api/mock/auth', 'get', users)

Mock.mock('/api/mock/article', 'get', {
	'code|1': 200,
	'result|1': '成功',
	'data|4-10': [
		{
			'title|+1': '@ctitle()',
			'content|+1': '@cparagraph(6)',
			'id|+1': 10000,
			'desc|+1': '@cparagraph(2)',
			'cover|+1': 'http://dummyimage.com/200x100/50B347/FFF&text=Mock.js',
			'catagory_id|+1': 4,
			'permission|1': 8,
			'status|1': 'open',
			'like|1-600': 600,
			'views|200-3000': 400,
			'create_time|+1': '@datetime()',
			'update_time|+1': '@datetime()',
		},
	],
})
