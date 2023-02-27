function procesar(){


    let compra = document.getElementById('compra').value
    let efectivo = parseInt(document.getElementById('efectivo').value)
    



    if(compra>50000){
     let compraD=compra*0.9
     if(compraD>efectivo){
      faltaD(compraD,efectivo)
  }else{
      cambioD(compraD,efectivo)
    }
    }
    else if(compra>efectivo){
        falta(compra,efectivo)
    }else{
        cambio(compra,efectivo)
      }


  
 
  }

function faltaD(compraD,efectivo){
  let total= parseInt(compraD)-parseInt(efectivo)
  alert(`falta ${total} de efectivo para realizar la compra`)
  imprimir(total)
}
function cambioD(compraD,efectivo){
  let total= parseInt(efectivo)-parseInt(compraD)
  alert(`su cambio es de ${total}`)
  imprimir(total)
}

function falta(compra,efectivo){
    let total= parseInt(compra)-parseInt(efectivo)
    alert(`falta ${total} de efectivo para realizar la compra`)
    imprimir(total)
}
function cambio(compra,efectivo){
    let total= parseInt(efectivo)-parseInt(compra)
    alert(`su cambio es de ${total}`)
    imprimir(total)
}

function imprimir(total){
 limpiar()
 setlocalstorage(total)

}


  
   function limpiar(){
     document.getElementById('compra').value=0
    document.getElementById('efectivo').value=0
  }
  
  function setlocalstorage(total){
  
    localStorage.setItem('total', total);
    
  
  }