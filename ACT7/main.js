function procesar(){


    let suma = document.getElementById('suma').value
    let n1 = parseInt(document.getElementById('n1').value)
    let n2 = parseInt(document.getElementById('n2').value)
    let n3 = parseInt(document.getElementById('n3').value)

    if(n1+n2+n3 == suma){
        exacta()
    }else if(n1+n2+n3 < suma){
        mayor()
    }else if(n1+n2+n3 > suma){
        menor()
    }





  
 
  }

function exacta(n1,n2,n3,suma){
  alert(`la suma de los tres numeros es igual al numero de la parte superior`)
  setlocalstorageE()
}
function mayor(n1,n2,n3,suma){
  alert(`el numero de la parte superior es mayor que el resultado de la suma de los otros tres`)
 setlocalstorageMa()
}

function menor(n1,n2,n3,suma){
    alert(`el numero de la parte superior es menor que el resultado de la suma de los otros tres`)
  setlocalstorageMe()
}


  function setlocalstorageE(){
  
    localStorage.setItem('resultado', `exacto`);
    
  
  }
  function setlocalstorageMa(){
  
    localStorage.setItem('resultado', `mayor`);
    
  
  }
  function setlocalstorageMe(){
  
    localStorage.setItem('resultado', `menor`);
    
  
  }