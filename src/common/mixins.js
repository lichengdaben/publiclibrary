const WIDTH = 375;
const setView = () => {
  //设置html标签的fontSize
  document.documentElement.style.fontSize = (100*screen.width/WIDTH) + 'px'
}
export const mixins = {
  methods: {
    isMobile() {
      if(/Android|webOS|iPhone|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
    isIpad(){
      if(/iPad/i.test(navigator.userAgent)) {
        return true
      } else {
        return false
      }
    },
  },
 
  created() {
    if (this.isMobile()) {
      window.onload = setView
      window.onresize = setView
    }
  }
}