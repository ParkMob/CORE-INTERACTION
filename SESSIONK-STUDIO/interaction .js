let letters = document.getElementsByClassName('sub-letter');

setTimeout(() => {
  for (let i = 0; i < letters.length; i++) {
    anime({
      targets: letters[i],
      easing: 'easeInQuad',
      translateX: ['5px', '0'],
      delay: 50 * i
    });

    anime({
      targets: letters[i],
      easing: 'easeInQuad',
      opacity: 1,
      delay: 60 * i,
      complete: function(anim) {
        if (i === letters.length - 1) {
          showMainsub()
        }
      }
    });
  }
}, 500);


function showMainsub() {
  anime({
    targets: '#main-sub',
    easing: 'easeInQuad',
    opacity: 1,
    duration: 300,
    delay: 1
  });
}