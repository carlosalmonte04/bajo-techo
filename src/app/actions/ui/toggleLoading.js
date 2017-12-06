import NProgress from 'nprogress'

export default function toggleLoading(bool) {
  bool ? NProgress.start() : NProgress.done()
  return {
    type: 'TOGGLE_LOADING',
    payload: bool
  }
}
