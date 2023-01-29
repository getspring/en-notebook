export const data = JSON.parse("{\"key\":\"v-7e328b42\",\"path\":\"/myNote/home.html\",\"title\":\"\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"我是home.md\",\"slug\":\"我是home-md\",\"link\":\"#我是home-md\",\"children\":[]}],\"git\":{},\"filePathRelative\":\"myNote/home.md\"}")

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
