function procesar(){


   
    let juan = parseInt(document.getElementById('juan').value)
    let pedro = parseInt(document.getElementById('pedro').value)
    let maria = parseInt(document.getElementById('maria').value)
    let totalr= parseInt(juan)+parseInt(pedro)+parseInt(maria)

calcularTotal(juan,pedro,maria)
porJuan(juan,totalr)
porPedro(pedro,totalr)
porMaria(maria,totalr)
}

function calcularTotal(juan,pedro,maria){
    let totalr= parseInt(juan)+parseInt(pedro)+parseInt(maria)
    document.getElementById("total").value = totalr
    setlocalstorageT(totalr)
}
function porJuan(juan,totalr){
    let porcJuan =(parseInt(juan)*parseInt(100))/parseInt(totalr)
    document.getElementById("Pjuan").value = porcJuan
    setlocalstorageE(porcJuan)
}
function porPedro(pedro,totalr){
    let porcPedro =(parseInt(pedro)*parseInt(100))/parseInt(totalr)
    document.getElementById("Ppedro").value = porcPedro
    setlocalstorageMa(porcPedro)
}
function porMaria(maria,totalr){
    let porcMaria =(parseInt(maria)*parseInt(100))/parseInt(totalr)
    document.getElementById("Pmaria").value = porcMaria
    setlocalstorageMe(porcMaria)
}



function setlocalstorageT(totalr){
  
    localStorage.setItem('totalr', totalr);
    
  
  }


  function setlocalstorageE(porcJuan){
  
    localStorage.setItem('Juan', porcJuan);
    
  
  }
  function setlocalstorageMa(porcPedro){
   
    localStorage.setItem('Pedro', porcPedro);
    
  
  }
  function setlocalstorageMe(porcMaria){
  
    localStorage.setItem('Maria', porcMaria);
    
  
  }