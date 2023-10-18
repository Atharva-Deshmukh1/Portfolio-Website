function ShowSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex';
};
function HideSideBar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none';
}
const pointer = document.getElementById(`pointer`);

document.body.onpointermove = event =>{
    const {clientX,clientY} = event;
    pointer.animate({
        left:`${clientX}px`,
        top:`${clientY}px`
    },{duration:1000, fill:"forwards"});
}