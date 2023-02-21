const Timeline = gsap.timeline({
  defaults: {
    duration: 0.5,
    autoAlpha: 0,
  },
})

Timeline.from('.logo', { x: -50 })
  .from('li', { x: -50, stagger: 0.1 })
  .from('.title', { y: 50 })
  .from('.tagline', { y: 50 })
  .from('.desc', { y: 50 })
  .from('.beer', { y: -100, ease: 'power3' })
  .to('.beer', {
    y: -10,
    repeat: -1,
    autoAlpha: 1,
    yoyo: true,
    duration: 1,
  })
