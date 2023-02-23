window.document.addEventListener('DOMContentLoaded', function () {
  const Timeline = gsap.timeline({
    defaults: {
      duration: 1,
      autoAlpha: 0,
    },
  })
  // gsap.set('.beer', { y: 10 })

  Timeline.from('.logo', { x: -50 })
    .from('li', { x: -50, stagger: 0.1 })
    .from('.title', { y: 50 }, '-=0.4')
    .from('.tagline', { y: 50 }, '-=0.7')
    .from('.desc', { y: 50 }, '<')
    .from('.beer', { y: -800 })
    .to('.beer', {
      // y: -15,
      y: '15%',
      repeat: -1,
      autoAlpha: 1,
      yoyo: true,
      duration: 1,
      // ease: Power1.easeInOut,
      ease: 'power1.inOut',
    })
})
