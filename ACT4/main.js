function procesar(){


    let precio = document.getElementById('precio').value
    let descuento = parseInt(document.getElementById('descuento').value)
   
  if (descuento==0){
    sinDescuento(precio)
  }else if (descuento>0){
    descontar(precio,descuento)

  }


  
  }
  function descontar(precio,descuento){
    let total= parseInt(precio)-((parseInt(descuento)/parseInt(100))*parseInt(precio))
    imprimir(total)
  }

  
  
  function imprimir(total){
     document.getElementById('precio').value=total
    limpiar()
    setlocalstorage(total)
  
  }
  
   function limpiar(){
     document.getElementById('precio').value=0
    document.getElementById('descuento').value=0
  }
  
  function setlocalstorage(total){
  
    localStorage.setItem('total', total);
    alert(`el precio a pagar es ${total}`)
  
  }