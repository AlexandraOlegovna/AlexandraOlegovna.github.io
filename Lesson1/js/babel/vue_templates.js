'use strict';

new Vue({
  el: '#image-slider',
  data: {
    currentNumber: 0,
    timer: null,
    images: ['img/slide1.jpg', 'img/slide2.jpg', 'img/slide3.jpg', 'img/slide4.jpg']
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
// $.post("/show", {}, 'json').done (data => {
//         app.gridData = data;
//         for (var i = 0; i < app.gridData.length; ++i)
//             if (app.gridData[i].kind == "-")
//                 app.total -= app.gridData[i].cost;
//             else app.total += app.gridData[i].cost;
//         // build_data(app);
//     });
//
//
// }