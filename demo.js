const words = ["Engages.", "Persuades.", "finally Converts."]

let cursor = gsap.to('.cursor', {opacity:30, ease: "power2.inOut", repeat:-1})
let masterTl = gsap.timeline({repeat: -1}).pause()
let boxTl = gsap.timeline()

boxTl.to('.box', {duration:0.5, width:"46vw", delay: 0.5, ease: "power4.inOut"})
  .from('.hii', {duration:1, y:"14vw", ease: "power3.Out", onComplete: () => masterTl.play()})
 //.to('.box', {duration:2,  autoAlpha:0.7,  yoyo: true, repeat: -1, ease:"rough({ template: none.out, strength:  1, points: 20, taper: 'none', randomize: true, clamp: false})"})
words.forEach(word => {
  let tl = gsap.timeline({repeat: 1, yoyo: true, repeatDelay:1})
  tl.to('.text', {duration: 1, text: word})
  masterTl.add(tl)
})

























