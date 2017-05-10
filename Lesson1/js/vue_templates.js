let dir = 'img/'
let slider = new Vue({
  el: '#image-slider',
  data: {
    currentNumber: 0,
    timer: null,
    images: [dir + 'slide1.jpg', dir + 'slide2.jpg', dir + 'slide3.jpg', dir + 'slide4.jpg']
  },
  mounted: function () {
    this.startRotation()
  },

  methods: {
    startRotation: function () {
      this.timer = setInterval(this.next, 3000)
    },

    stopRotation: function () {
      clearTimeout(this.timer)
      this.timer = null
    },

    next: function () {
      this.stopRotation()
      this.currentNumber = Math.abs(this.currentNumber + 1) % this.images.length
      this.startRotation()
    },
    prev: function () {
      this.stopRotation()
      this.currentNumber = Math.abs(this.currentNumber - 1 + this.images.length) % this.images.length
      this.startRotation()
    }
  }
})

let content = new Vue({
  el: '#about',
  data: {
    about_content :[{
      image: dir + 'tv.png',
      title: 'MOVIES',
      subtitle: 'WHAT I WATCH',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.'}, {
      image: dir + 'music.png',
      title: 'MUSIC',
      subtitle: 'WHAT I LISTEN',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec purus lacinia, dapibus est sit amet, gravida odio. Curabitur non odio nisl. Phasellus porta sed orci eu lacinia. Praesent sed rhoncus eros. Fusce tincidunt augue felis, vel tincidunt velit tincidunt vitae. Nam auctor nunc vitae hendrerit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed id nisi lacus.'}, {
      image: dir + 'clothes.png',
      title: 'CLOTHES',
      subtitle: 'WHAT I WEAR',
      content: 'Vestibulum odio odio, vehicula tincidunt mollis eget, auctor ac neque. Pellentesque non interdum nisl, et scelerisque magna. Nam sollicitudin est hendrerit enim malesuada, sed porta nisi hendrerit. Cras dictum blandit molestie. Morbi facilisis pharetra felis, eget pretium sapien vehicula id. Integer in purus porttitor, ultrices nisi nec, elementum lectus. Morbi vel magna tellus.'
      }, {
      image: dir + 'food.png',
      title: 'FOOD',
      subtitle: 'WHAT I EAT',
      content: 'Donec a tortor vel dolor volutpat feugiat. Sed placerat sollicitudin fermentum. In molestie urna rutrum, lacinia mi id, porttitor justo. Quisque dictum sapien leo, ut hendrerit tellus bibendum at. Pellentesque auctor nisi dui, eleifend dignissim ante facilisis sed. Donec sit amet augue finibus, cursus lacus ut, porttitor urna. Donec eget sollicitudin ante, nec auctor nulla.'
      }
    ]
  }
})
