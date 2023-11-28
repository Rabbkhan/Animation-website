const scroll = new LocomotiveScroll({
    el: document.querySelector('#main'),
    smooth: true
});

const  videoconAnimation = ()=>{
    var videcon = document.querySelector('#video-container');

    var playbtn = document.querySelector('#play');
    
    videcon.addEventListener('mouseenter', function(){
        // playbtn.style.opacity =1;
        // playbtn.style.scale =1;
    
        gsap.to(playbtn,{
    scale:1,
    opacity:1
        })
    }  )
    
    videcon.addEventListener('mouseleave', function(){
        gsap.to(playbtn,{
            scale:0,
            opacity:0
                })
    })
    
    videcon.addEventListener('mousemove', function(dets){
    gsap.to(playbtn,{
        left:dets.x-50,
        top:dets.y-80
    })
    })
}
videoconAnimation();

const loadinganimation=()=>{

    gsap.from('#page1 h1',{
    y:100,
    opacity:0,
    delay:0.8,
    stagger:0.2,
    })
    gsap.from('#page1 #video-container',{
    y:100,
    opacity:0,
    delay:1,
    duration:0.2,
    })
}
loadinganimation();


document.addEventListener("mousemove", function(dets){
gsap.to('#cursor',{
    left:dets.x,
    top:dets.y
})
})
document.querySelector("#child1").addEventListener("mouseenter",function(){

    })
  
    document.querySelector("#child1").addEventListener("mouseleave",function(){
      gsap.to("#cursor",{
        transform: 'translate(-50%,-50%) scale(1)'
      })
    })
