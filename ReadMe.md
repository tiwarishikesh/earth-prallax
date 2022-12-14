Parallax Earth Animation
========

This is me playing around with a parllax idea I came across on Instagram from an account by the name of [ui.alok](https://www.instagram.com/ux.alok/). 


[Original Figma Post](https://www.instagram.com/p/CjNiBtDhKwz/)

[Live Demo](https://kanr.is/pens/earth-parallax/)

Explanation for beginners
--------

This was created using GreenSock GSAP, ScrollTrigger and Timeline

```
const tl = gsap.timeline({
        scrollTrigger: {
            trigger: ".landing-section",
            start: "-20vh top",
            end: "bottom bottom",
            scrub: true,
            toggleActions: "play reverse play reverse"
        }
    });
    tl
        .to('.earth', { x: $(".earth").width()*-0.4,top:'-100vh',rotation:'180deg', duration: 0.4, stagger: 0.1, ease: Power2.inOut })
        .to('.earth', { x: $(window).width()*0.7, top:'-100vh',   rotation:'360deg', duration: 0.4, stagger: 0.1,ease: Power2.inOut } );    
```

The landing-section class division has been assigned height of 300 window heights and tmeline is broken in three equal parts thus maintaining the scroll positions


For more information:
[GreenScok Timeline](https://greensock.com/docs/v3/GSAP/Timeline)
[ScrollTrigger](https://greensock.com/docs/v3/Plugins/ScrollTrigger)