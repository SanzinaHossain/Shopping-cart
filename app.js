function updatevalue(product,price,isupdate)
{
    const caseInput=document.getElementById(product+'-number');
    let caseNumber=caseInput.value;
    if(isupdate==true)
    {
        caseNumber=parseInt(caseInput.value)+1;
        caseInput.value=caseNumber; 
    }
    else
    {
        if(caseNumber>0)
      {
        caseNumber=parseInt(caseInput.value)-1;
        caseInput.value=caseNumber;
      }
    }

    const total=document.getElementById(product+'-total');
    total.innerText=price*caseNumber;
    calculation();
}

// phone calculation
document.getElementById('phone-plus').addEventListener('click',function(){
    updatevalue('phone',1219,true)
})
document.getElementById('phone-minus').addEventListener('click',function(){
    updatevalue('phone',1219,false)
})
//Phone case calculation
document.getElementById('case-plus').addEventListener('click',function(){
    updatevalue('case',59,true);
})
document.getElementById('case-minus').addEventListener('click',function(){
    updatevalue('case',59,false);
})

//total calculation
function getprice(product,price)
{
    const productInput=document.getElementById(product+'-number');
    const productPrice=parseInt(productInput.value)*price;
    return productPrice;
}
function calculation()
{
    const PhoneTotal=getprice('phone',1219);
    const CaseTotal=getprice('case',59);
    const subTotal=PhoneTotal+CaseTotal;
    const tax=subTotal/10;
    const total=subTotal+tax;
    document.getElementById('sub-total').innerText=subTotal;
    document.getElementById('tax-amount').innerText=tax;
    document.getElementById('total-price').innerText=total;
}