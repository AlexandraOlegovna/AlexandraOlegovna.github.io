'use strict';

var dir = 'img/';
// let slider = new Vue({
//   el: '#image-slider',
//   data: {
//
//   },
//   mounted: function () {
//     this.startRotation()
//   },
//
//   methods: {
//     startRotation: function () {
//       this.timer = setInterval(this.next, 3000)
//     },
//
//     stopRotation: function () {
//       clearTimeout(this.timer)
//       this.timer = null
//     },
//
//     next: function () {
//       this.stopRotation()
//       this.currentNumber = Math.abs(this.currentNumber + 1) % this.images.length
//       this.startRotation()
//     },
//     prev: function () {
//       this.stopRotation()
//       this.currentNumber = Math.abs(this.currentNumber - 1 + this.images.length) % this.images.length
//       this.startRotation()
//     }
//   }
// })

var content = new Vue({
  el: '#content',
  data: {
    currentNumber: 0,
    timer: null,
    images: [dir + 'slide1.jpg', dir + 'slide2.jpg', dir + 'slide3.jpg', dir + 'slide4.jpg'],
    about_content: [{
      image: dir + 'tv.png',
      title: 'MOVIES',
      subtitle: 'WHAT I WATCH',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.' }, {
      image: dir + 'music.png',
      title: 'MUSIC',
      subtitle: 'WHAT I LISTEN',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus nec purus lacinia, dapibus est sit amet, gravida odio. Curabitur non odio nisl. Phasellus porta sed orci eu lacinia. Praesent sed rhoncus eros. Fusce tincidunt augue felis, vel tincidunt velit tincidunt vitae. Nam auctor nunc vitae hendrerit luctus. Interdum et malesuada fames ac ante ipsum primis in faucibus. Sed id nisi lacus.' }, {
      image: dir + 'clothes.png',
      title: 'CLOTHES',
      subtitle: 'WHAT I WEAR',
      content: 'Vestibulum odio odio, vehicula tincidunt mollis eget, auctor ac neque. Pellentesque non interdum nisl, et scelerisque magna. Nam sollicitudin est hendrerit enim malesuada, sed porta nisi hendrerit. Cras dictum blandit molestie. Morbi facilisis pharetra felis, eget pretium sapien vehicula id. Integer in purus porttitor, ultrices nisi nec, elementum lectus. Morbi vel magna tellus.'
    }, {
      image: dir + 'food.png',
      title: 'FOOD',
      subtitle: 'WHAT I EAT',
      content: 'Donec a tortor vel dolor volutpat feugiat. Sed placerat sollicitudin fermentum. In molestie urna rutrum, lacinia mi id, porttitor justo. Quisque dictum sapien leo, ut hendrerit tellus bibendum at. Pellentesque auctor nisi dui, eleifend dignissim ante facilisis sed. Donec sit amet augue finibus, cursus lacus ut, porttitor urna. Donec eget sollicitudin ante, nec auctor nulla.'
    }],
    portfolio_content: [{
      image: dir + 'gallery.png',
      title: 'GALLERIES ARE FUNNY' }, {
      image: dir + 'video.png',
      title: 'A VIMEO REEL' }, {
      image: dir + 'sound.png',
      title: 'LOVE FOR OLD CAMERAS' }, {
      image: dir + 'note.png',
      title: 'DETAILED PROJECT PAGE' }, {
      image: dir + 'video.png',
      title: 'YOUTOUBE VIDEO' }, {
      image: dir + 'clip.png',
      title: 'ANOTHER EXTERNAL LINK' }, {
      image: dir + 'gallery.png',
      title: 'A LIGHTBOX IMAGE' }, {
      image: dir + 'sound.png',
      title: 'THE D ANK TEMPEST' }],
    blog_content: [{
      title: 'The Magic Wheel',
      tags: 'JULI 28, 2014 // ADMIN // FUN, TRAVEL, TRENDS',
      comments: '1',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }, {
      title: 'The lonely road',
      tags: 'JULI 28, 2014 // ADMIN // FUN, TRAVEL, TRENDS, WED DESIGN',
      comments: '3',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.' }, {
      title: 'I love gasoline smell',
      tags: 'JULI 28, 2014 // ADMIN // FUN, TRENDS, WEB DESIGN',
      comments: 'NO',
      content: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
    }]
  },
  mounted: function mounted() {
    this.startRotation();
  },

  methods: {
    startRotation: function startRotation() {
      this.timer = setInterval(this.next, 3000);
    },

    stopRotation: function stopRotation() {
      clearTimeout(this.timer);
      this.timer = null;
    },

    next: function next() {
      this.stopRotation();
      this.currentNumber = Math.abs(this.currentNumber + 1) % this.images.length;
      this.startRotation();
    },
    prev: function prev() {
      this.stopRotation();
      this.currentNumber = Math.abs(this.currentNumber - 1 + this.images.length) % this.images.length;
      this.startRotation();
    }
  }
});