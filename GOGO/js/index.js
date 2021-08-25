window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.warning');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.content1');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.content2');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.ac');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.ft1');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.ip1');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
});

window.addEventListener('scroll', ()=>{
    let content = document.querySelector('.bb');
    let contentPosition = content.getBoundingClientRect().top;
    let screenPosition = window.innerHeight;
    if(contentPosition < screenPosition){
        content.classList.add('active');
    }else{
        content.classList.remove('active');
    }
});

$(function() {
    $( "#datepicker-13" ).datepicker();
    $( "#datepicker-13" ).datepicker("show");
 });

 $(function() {
    $( "#datepicker-14" ).datepicker();
    $( "#datepicker-14" ).datepicker("show");
 });
