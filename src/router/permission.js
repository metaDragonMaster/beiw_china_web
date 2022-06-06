import router from './index.js'
import routerUtil from "./util.js"
import {
	getToken
} from "../utils/auth.js";
import {
	Message
} from 'element-ui'
router.beforeEach(async (to, from, next) => {
	document.title = `北纬三十 | ${to.meta.title}`;
	if(to.meta.needLogin&&!getToken()) {
		Message.warning('请登录')
		routerUtil.toPath('/userSign/login');
		return;
	}
	next()
})
