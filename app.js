/* gsap.to(".landing-section",{
    scrollTrigger:{
        trigger: ".landing-section",
        pin:".landing-section",
        start:"top top",
        end:"bottom bottom",
        scrub: true
    }
}); */

$(document).ready(()=>{
    $('.earth').css('width','300vh');
    /* $('.earth').css('left','-250vh'); */
    $('.earth').css('left',$(document).width()*0.5 - $(".earth").width()*0.5);
    $('.earth').css('top','55vh');
    $('.earth').css('transform','rotate(90deg)');
    setTimeout(() => {
        window.scrollTo(0, document.body.scrollHeight);
        AnimationsInit();
        setTimeout(() => {
            $(document).scrollTop(0);
            $(".loader").fadeOut();
        }, 1500);
    }, 500);
})

function AnimationsInit() {
    gsap.to(".earth",{
        scrollTrigger:{
            trigger: ".landing-section",
            pin:".earth",
            start:"top top",
            end:"bottom bottom",
            scrub: true,
        },
    });
    
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

    const t2 = gsap.timeline({
        scrollTrigger: {
            trigger: ".landing-section",
            start: "top top",
            end: "bottom bottom",
            scrub: true,
            toggleActions: "play reverse play reverse"
        }
    });
    t2
        .to('.text-wrapper-one', { opacity: -0.5, duration: 0.4, stagger: 0.1 })
        .to('.text-wrapper-one', { opacity: 0, duration: 0.4, stagger: 0.1 });

    gsap.to(".text-wrapper-two",{
        scrollTrigger:{
            trigger: ".landing-section",
            pin:".text-wrapper-two",
            start:"top top",
            end:"bottom bottom",
            scrub: true,
        },
    });
    
    const t3 = gsap.timeline({
        scrollTrigger: {
            trigger: ".landing-section",
            start: "-20vh top",
            end: "bottom bottom",
            scrub: true,
            toggleActions: "play reverse play reverse",
        }
    });
    t3
        .to('.text-wrapper-two', { opacity: 1, duration: 0.4, stagger: 0.1 })
        .to('.text-wrapper-two', { opacity: -0.25, duration: 0.4, stagger: 0.1 } );

    gsap.to(".text-wrapper-three",{
        scrollTrigger:{
            trigger: ".landing-section",
            pin:".text-wrapper-three",
            start:"top top",
            end:"bottom bottom",
            scrub: true,
        },
    });
    
    const t4 = gsap.timeline({
        scrollTrigger: {
            trigger: ".landing-section",
            start: "-20vh top",
            end: "bottom bottom",
            scrub: true,
            toggleActions: "play reverse play reverse"
        }
    });
    t4
        .to('.text-wrapper-three', { opacity: -0.25, duration: 0.4, stagger: 0.1 })
        .to('.text-wrapper-three', { opacity: 1, duration: 0.4, stagger: 0.1 } );
}