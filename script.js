document.addEventListener('click',function getBtn(e){
  let loh= document.getElementById('container');
  if(e.target.id==="container__btn"){
    loh.style.display="flex";
  }else if(e.target.id==="container__btn_2"){
    loh.style.display="none";
  }
  console.dir(e.target.id)
})
