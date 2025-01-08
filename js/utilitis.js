function getInputValueFieldById(id){
    const inputVaule=document.getElementById(id).value;
    const inputAmount=parseFloat(inputVaule);
    return inputAmount;
}

function getInputTextFieldById(id){
    const textVaule=document.getElementById(id).innerText;
    const textAmount=parseFloat(textVaule);
    return textAmount;
}

function getInputRequiedFieldById(id){
    const requiredVaule=document.getElementById(id).innerText;
    const requiredAmount=parseFloat(requiredVaule);
    return requiredAmount;
}

function showSectionById(id){
    document.getElementById('donation-conatiner').classList.add('hidden');
    
    document.getElementById(id).classList.remove('hidden')
}

