import $router from "./index.js"
export default {
	toName(name,params) {
		if(!!!name) {return ;}
		console.log("params",params);
		return $router.push({"name":name,"params":params});
	},
	toPath(path,query) {
		if(!!!path) {return ;}
		console.log("query",query);
		return $router.push({"path":path,"query":query});
	},
	newWindow(href,type) {//,parent
		return window.open(href,type);
	},
}
