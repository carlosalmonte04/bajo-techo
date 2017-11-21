import NProgress from 'nprogress'

export default function startProgressBar() {
	return dispatch => NProgress.done()
}