function ShowSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
};
function HideSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}

const pointer = document.getElementById(`pointer`);
window.addEventListener ("mousemove",(e)=>{
    const x =e.pageX;
    const y =e.pageY;

    
    pointer.style.left=`${x}px`;
    pointer.style.top=`${y}px`;
});

VanillaTilt.init(document.querySelector(".card"), {
	max:30  ,
	speed: 50,
    glare:true
});
var tl = gsap.timeline({scrollTrigger:{
    trigger:"main",
    markers:false,
    start:"70% 50%",
    end:"180% 50%",
    scrub:2,
    duration:1,
    pin:true,
}});

tl
.to(".container",{
    width:"100%",
    height:"100%"
})
gsap.from(".title",{
    y:-100,
    duration:1,
    delay:2,
    opacity:0,
})
gsap.from(".nav",{
    duration:2,
    delay:1,
    opacity:0,
})
gsap.from(".profile-pic",{
    duration:5,
    delay:1,
    opacity:0,
})
gsap.from(".subtitle",{
    y:-100,
    duration:1,
    delay:1,
    opacity:0,
})
gsap.from(".description",{
    x:-100,
    duration:1,
    delay:3,
    opacity:0,
})
gsap.from(".CV-download",{
    duration:3,
    delay:4,
    opacity:0,
})
