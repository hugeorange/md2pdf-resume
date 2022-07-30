export function getTemplate(text: string) {
  return `<html>
  <head>
	  <title>Resume Template</title>
	  <style type="text/css">
		  body {
			  font-size: 14px;
			  background-color: #fff;
			  font-family: "Georgia",
				  "Xin Gothic",
				  "Hiragino Sans GB",
				  "Droid Sans Fallback",
				  "Microsoft YaHei",
				  sans-serif;
		  }
		  h2,h3 {
			  font-size: 1.3rem;
			  line-height: 20px;
			  border-bottom: 1px solid #dbdbdb;
			  margin: 20px 0 8px 0;
			  padding-bottom: 8px;
			  color: #333;
		  }
		  h2:first-child {
			  margin-top: 0;
		  }
			h4,
			h5,
			h6 {
			  font-size: 1rem;
			  line-height: 18px;
			  margin: 0;
			  margin-top: 10px;
			  color: #444;
			  font-weight: bold;
		  } 
		  li {
			  line-height: 160%;
			  color: #333;
		  }
		  ol,
		  ul {
			  display: block;
			  list-style-type: square;
			  padding-left: 16px;
			  margin: 6px 0;
			  color: #555;
			  line-height: 160%;
			  margin-left: 4px;
		  }
		  li>ul {
			  list-style-type: disc;
		  }
		  a {
			  text-decoration: underline;
			  color: #5286bc;
		  }
	  </style> 
  <body>${text}</body></html>`
}

export const PRESETTPL = `## 个人信息
- xxx / 男 / 1991 / 本科
- 工作经验: 6年
- 电话: 12345678901
- 邮箱: 12345678901@163.com
- Github: https://github.com
## 技能清单
- 熟练使用 React、Ant Design、Umi、Redux、Vue
- 熟练使用前端构建工具 Webpack
- 熟练使用前端构建工具 Webpack
- 熟练使用 React、Ant Design、Umi、Redux、Vue
## 工作经历
- 2021.0x - 至今 — xxx — 资深前端开发工程师
    - 负责xxx公司 App 前端开发
    - 负责xxx公司后台开发
    - 负责xxx公司前台开发
- 2021.0x - 至今 — xxx — 资深前端开发工程师
    - 负责xxx公司 App 前端开发
    - 负责xxx公司后台开发
    - 负责xxx公司前台开发
## 项目经验
##### xx运营后台
基于React 的运营后台的开发
基于 Vue 的h5 项目的维护开发
## 教育背景
2010 - 2014 / 北京大学 / 本科`
