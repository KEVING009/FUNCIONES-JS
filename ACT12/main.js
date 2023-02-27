function Procesar(){


    let numero = document.getElementById('numero').value
   
   
if(numero==1){
    Dlunes()
}else if(numero==2){
    Dmartes()
}else if(numero==3){
    Dmiercoles()
}else if(numero==4){
    Djueves()
}else if(numero==5){
    Dviernes()
}else if(numero==6){
    Dsabado()
}else if(numero==7){
    Ddomingo()
}else{
    alert(`Error`)
}

  }


  
function Dlunes(){
    alert(`Lunes`)
    setlocalstorageL()
}
function Dmartes(){
    alert(`Martes`)
    setlocalstorageMA()
}
function Dmiercoles(){
    alert(`Miercoles`)
    setlocalstorageMI()
}
function Djueves(){
    alert(`Jueves`)
    setlocalstorageJ()
}
function Dviernes(){
    alert(`Viernes`)
    setlocalstorageV()
}
function Dsabado(){
    alert(`Sabado`)
    setlocalstorageS()
}
function Ddomingo(){
    alert(`Domingo`)
    setlocalstorageD()
}


  
function setlocalstorageL(){
  
    localStorage.setItem('Día', `Lunes`);
   
  
  }
  function setlocalstorageMA(){ 
  
    localStorage.setItem('Día', `Martes`);
    
  
  }
  function setlocalstorageMI(){
  
    localStorage.setItem('Día', `Miercoles`);
  
  
  }
  function setlocalstorageJ(){
  
    localStorage.setItem('Día', `Jueves`);
   
  
  }
  function setlocalstorageV(){
  
    localStorage.setItem('Día', `Viernes`);
   
  
  }
  function setlocalstorageS(){
  
    localStorage.setItem('Día', `Sabado`);
   
  
  }
  function setlocalstorageD(){
  
    localStorage.setItem('Día', `Domingo`);
   
  
  } 