$(function(){
    // 點擊按鈕，選單縮放
    $("button.btn_switch").on("click", function(){
    $("nav.nav").slideToggle();
});
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.container');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.container1');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
});


window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.container2');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
});


window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.container3');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
});



