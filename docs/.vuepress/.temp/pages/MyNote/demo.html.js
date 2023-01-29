export const data = JSON.parse("{\"key\":\"v-2f6584be\",\"path\":\"/myNote/demo.html\",\"title\":\"页面的标题\",\"lang\":\"zh-CN\",\"frontmatter\":{\"lang\":\"zh-CN\",\"title\":\"页面的标题\",\"description\":\"页面的描述\"},\"headers\":[{\"level\":2,\"title\":\"我是frontmatter测试页面\",\"slug\":\"我是frontmatter测试页面\",\"link\":\"#我是frontmatter测试页面\",\"children\":[]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"myNote/demo.md\"}")

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
