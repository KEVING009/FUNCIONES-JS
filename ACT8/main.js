function procesar(){


   
    let juan = parseInt(document.getElementById('juan').value)
    let pedro = parseInt(document.getElementById('pedro').value)
    let maria = parseInt(document.getElementById('maria').value)

    if(juan>pedro && juan>maria){
    mayorJuan()
    }else if(pedro>juan && pedro>maria){
    mayorPedro()
    }else{ 
    mayorMaria()
    }





  
 
  }

function mayorJuan(){
  alert(`juan es mayor que pedro y maria`)
  setlocalstorageE()
}
function mayorPedro(){
  alert(`pedro es mayor que juan y maria`)
 setlocalstorageMa()
}

function mayorMaria(){
    alert(`maria es mayor que pedro y juan`)
  setlocalstorageMe()
}


  function setlocalstorageE(){
  
    localStorage.setItem('mayor', `juan`);
    
  
  }
  function setlocalstorageMa(){
   
    localStorage.setItem('mayor', `pedro`);
    
  
  }
  function setlocalstorageMe(){
  
    localStorage.setItem('mayor', `maria`);
    
  
  }