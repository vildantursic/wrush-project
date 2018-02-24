var app = new Vue({
  el: '#app',
  data: {
    message: 'Hello Vue!',
    loginData: {}
  },
  mounted() {
    document.querySelector('w-login').addEventListener('kick', (e) => {
      console.log(e.detail.data);
      Object.assign({}, this.loginData, e.detail.data);
    })
  },
  methods: {
    getLoginData() {
      console.log(JSON.parse(JSON.stringify(this.loginData)));
    }
  }
})
