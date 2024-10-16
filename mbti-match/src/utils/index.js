export default {
  getQueryString(name) {
    let reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)')
    let r = window.location.search.slice(1).match(reg)
    if (r != null) return decodeURI(r[2])
    return null
  },
  formatDate(t) {
    const time = new Date(t)
    const y = time.getFullYear()
    const M = time.getMonth() + 1
    const d = time.getDate()
    const h = time.getHours()
    const m = time.getMinutes()

    return `${y}/${M >= 10 ? M : '0' + M}/${d >= 10 ? d : '0' + d} ${
      h >= 10 ? h : '0' + h
    }点${m >= 10 ? m : '0' + m}分`
  },
  // 数组去重
  removeDuplicates(array, key) {
    return array.filter((item, index, self) => {
      return self.findIndex(t => t[key] === item[key]) === index
    })
  }
}
