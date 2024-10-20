import LocomotiveScroll from 'locomotive-scroll';

const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

/*function firstPageAnime()
{
    var tl=gsap.timeline();
    t1.from("#nav",
        {
            y:'-10',
            opacity:0,
            duration:2,
            ease:Expo.easeInOut
        }
    )
        .to(".boundingelem",
            {
                y:'0',
                opacity:0,
                duration:2,
                ease:Expo.easeInOut
            }
        )
}
*/

/*document.addEventListener("DOMContentLoaded", function() {
    function circleMouseFollower() {
        window.addEventListener("mousemove", function(dets) {
            const circle = document.querySelector("#minicircle");
            const offsetX = circle.offsetWidth / 2; 
            const offsetY = circle.offsetHeight / 2; 
            circle.style.transform = `translate(${dets.clientX - offsetX}px, ${dets.clientY - offsetY}px)`;
        });
    }
    circleMouseFollower();
});
*/
