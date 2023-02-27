function Adivinar(){


    let numero = document.getElementById('numero').value
    let numeroOculto= 7
   
   
if(numero==numeroOculto){
    founded()
}else if(numero>numeroOculto){
    mayor()
}else{
    menor()
}
     

  }


  
function founded(){
    alert(`¡Encontraste el numero oculto!`)
    setlocalstorageF()
}
function mayor(){
    alert(`El numero ingresado es mayor que el numero oculto`)
    setlocalstorageMA()
}
function menor(){
    alert(`El numero ingresado es menor que el numero oculto`)
}
  
function setlocalstorageF(){
  
    localStorage.setItem('#oculto', `encontrado`);
   
  
  }
  function setlocalstorageMA(){ 
  
    localStorage.setItem('#oculto', `mayor`);
    
  
  }
  function setlocalstorageME(){
  
    localStorage.setItem('#oculto', `menor`);
  
  
  }