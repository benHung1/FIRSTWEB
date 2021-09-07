$(function(){
    // 點擊按鈕，選單縮放
    $("button.btn_switch").on("click", function(){
    $("nav.nav").slideToggle();
});
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.title-part1');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
});  

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.title-end');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
}); 