const button=document.querySelector("button");
const body=document.querySelector("body");
const color=["Violet","Indego","Blue","Green","Yellow","Orange"];
document.addEventListener('click',function(){
    body.style.backgroundColor=color[Math.floor(Math.random()*color.length)];
});