export const data = JSON.parse("{\"key\":\"v-8daa1a0e\",\"path\":\"/\",\"title\":\"Hello VuePress\",\"lang\":\"zh-CN\",\"frontmatter\":{},\"headers\":[{\"level\":2,\"title\":\"二级标题\",\"slug\":\"二级标题\",\"link\":\"#二级标题\",\"children\":[{\"level\":3,\"title\":\"三级标题\",\"slug\":\"三级标题\",\"link\":\"#三级标题\",\"children\":[]}]}],\"git\":{\"updatedTime\":null,\"contributors\":[]},\"filePathRelative\":\"README.md\"}")

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
