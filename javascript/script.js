let para_head = document.querySelector(".para-head");
let sura_head = document.querySelector(".sura-head");
let para = document.querySelector(".para");
let sura = document.querySelector(".sura");

   para_head.addEventListener('click', function(){
       para.classList.toggle("active")
       sura.classList.remove("active")
   });

   sura_head.addEventListener('click', function(){
       sura.classList.toggle("active")
       para.classList.remove("active")
   });




let i = 0;
//prev button
function prev(){
       if(i <= 0) i = imges.length;
       i--;
       return setImg();
    };
//next button
function next(){
       if(i >= imges.length-1) i = -1;
       i++;
       return setImg();
    };
   
const setImg = function setImg(){
       return slider_img.setAttribute('src', './img/'+imges[i]);
   };

//all_para_list
let all_para_list = document.querySelectorAll(".all_para");
   
all_para_list.forEach((all_para_list)=>{
       all_para_list.addEventListener('click',function(){
           para.classList.remove("active");
       })
       
   });

//all_sura_list
let all_sura_list = document.querySelectorAll(".all_sura");
   
all_sura_list.forEach((all_sura_list)=>{
    all_sura_list.addEventListener('click',function(){
        sura.classList.remove("active");
       })
       
   });