const { createApp, ref } = Vue

createApp({
  data() {
    return {
      title: 'Hello world!',
      image: ['https://picsum.photos/200'],
    }
  }
}).mount('#app')