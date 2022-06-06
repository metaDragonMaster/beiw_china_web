const getters = {
	errorText:state => state.error.errorText,
	token:state => state.user.token,
	userInfo:state => state.user.userInfo,
}
export default getters