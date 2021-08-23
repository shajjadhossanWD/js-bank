

function inputFild(getIdOne){
    const getINput = document.getElementById(getIdOne);
    const getInputTxt = getINput.value;
    const getInputVal = parseFloat(getInputTxt);
    getINput.value = '';
    return getInputVal;
}
function getBlance(getId, amount){
    const addDipo = document.getElementById(getId);
    const dipoTxt = addDipo.innerText;
    const dipoVal = parseFloat(dipoTxt);
    addDipo.innerText = dipoVal + amount ;
   
}
function gettotalAmontVal(){
    const getTotalVal = document.getElementById("totalBlnc");
    const getTotalinTxt = getTotalVal.innerText;
    const getTotalInNum = parseFloat(getTotalinTxt);
    return getTotalInNum;
}
function getTotal(amount, isAdding){
    const addTotal = document.getElementById('totalBlnc');
    const addTotalTxt = addTotal.innerText;
    const addTotalVal = parseFloat(addTotalTxt);
    let finalTotal;
    if(isAdding== true){
        finalTotal = addTotalVal + amount;
    }
    else if(isAdding == false ){
        finalTotal = addTotalVal - amount ;
    }
    addTotal.innerText = finalTotal;

     
}

document.getElementById('depositBtn').addEventListener('click',function(){
    const inputAmount = inputFild('depoInput');
    if(inputAmount > 0){
        getBlance('dipoBlnc', inputAmount);
        getTotal(inputAmount, true);
    }
})
document.getElementById('withdrawBtn').addEventListener('click',function(){
    const inputAmount = inputFild('withdrawInput');
   const totalAmount = gettotalAmontVal()
    if(inputAmount > 0 && totalAmount >= inputAmount){
        getBlance('withrawAmount', inputAmount);
        getTotal(inputAmount, false);
    }
})