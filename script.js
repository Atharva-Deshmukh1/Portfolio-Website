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
