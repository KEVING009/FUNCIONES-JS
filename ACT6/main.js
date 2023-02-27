function procesar(){

  let cop = document.getElementById("cop").value

  cop_usd(cop)

}

function cop_usd(cop){

  let usdTotal = (cop / 4855 )
  document.getElementById("usd").value = usdTotal
  imprimirUSD(usdTotal)
}


function procesar2(){

  let usd2 = document.getElementById("usd2").value

  usd_cop(usd2)

}


function usd_cop(usd2){

  let copTotal = (usd2 * 4855)
  document.getElementById("cop2").value = copTotal
  imprimirCOP(copTotal)
}

function imprimirCOP(copTotal){

  setlocalstorageCOP(copTotal)
 
 }
 function imprimirUSD(usdTotal){

  setlocalstorageUSD(usdTotal)
 
 }
 
 
   
 function setlocalstorageUSD(usdTotal){
   
  localStorage.setItem('USD', usdTotal);
  alert(`${cop} pesos colombianos son ${usdTotal} dolares`)

}
   
   function setlocalstorageCOP(copTotal){
   
     localStorage.setItem('COP', copTotal);
     alert(`${usd2} dolares son ${copTotal} pesos colombianos`)
   
   }