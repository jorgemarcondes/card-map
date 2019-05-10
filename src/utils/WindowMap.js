import Vue from 'vue'

const WindowMap = new Vue({
  data() {
    return {
      pageOffset: 0
    }
  },
  created() {
    window.addEventListener('scroll', () => {
      this.pageOffset = window.pageYOffset
    })
  }

});

export default WindowMap