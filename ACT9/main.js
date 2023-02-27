function procesar(){

    let gc = document.getElementById("gc").value
  
    gcgf(gc)
  
  }
  
  function gcgf(gc){
  
    let fTotal = (( parseInt(gc) * 9/5) + 32 )
    document.getElementById("gf").value = fTotal
    imprimirF(fTotal)
  }
  
  
  function procesar2(){
  
    let gf2 = document.getElementById("gf2").value
  
    gfgc(gf2)
  
  }
  
  
  function gfgc(gf2){
  
    let cTotal = ((parseInt(gf2) - 32) * 5/9)
    document.getElementById("gc2").value = cTotal
    imprimirC(cTotal)
  }
  
  function imprimirC(cTotal){
  
    setlocalstorageC(cTotal)
     alert(`${document.getElementById("gf2").value} grados farenheit son ${cTotal} grados centigrados`)

   }
   function imprimirF(fTotal){
  
    setlocalstorageF(fTotal)
    alert(`${document.getElementById("gc").value} grados centigrados son ${fTotal} grados farenheit`)
   }
   
   
     
   function setlocalstorageF(fTotal){
     
    localStorage.setItem('farenheit', fTotal);
   
  
  }
     
     function setlocalstorageC(cTotal){
     
       localStorage.setItem('centigrados', cTotal);
     
     } 