 // Add navigation functionality to the Home button
document.getElementById('blogButton').addEventListener('click', function(event) {
            event.preventDefault(); // Prevent default link behavior
            console.log('added')
            
            window.location.href = '/blog.html';
        });


// donation for noakhali
document.getElementById('btn-dnt-noakhali').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney=getInputValueFieldById('input-amount-for-noakhali');
    

    if (!isNaN(addMoney) && addMoney > 0) {
        
        const balanceOfNoakhali=getInputTextFieldById('balanc-noakhali');
        const requiredBalance=getInputRequiedFieldById ('requirdDonation')
        

        const newBalanceOfNoakhali= addMoney +balanceOfNoakhali;
        const newRequiredOfNoakhali= requiredBalance-addMoney;

        document.getElementById('balanc-noakhali').innerText=newBalanceOfNoakhali;
        document.getElementById('requirdDonation').innerText=newRequiredOfNoakhali;

        const openModalBtn = document.getElementById('btn-dnt-noakhali');
        const closeModalBtn = document.getElementById('closeModalBtn');
        const modal = document.getElementById('modal');

         openModalBtn.addEventListener('click', () => {
         modal.classList.remove('hidden');
         });

        closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
         });

        const pal =document.createElement('div');
  
        const now = new Date(); // Get the current date and time
        const gmtString = now.toUTCString(); // Convert to UTC string
        const timeZoneOffset = now.getTimezoneOffset(); // Get the timezone offset in minutes
        const offsetHours = String(Math.abs(timeZoneOffset / 60)).padStart(2, '0');
        const offsetMinutes = String(Math.abs(timeZoneOffset % 60)).padStart(2, '0');
        const offsetSign = timeZoneOffset <= 0 ? '+' : '-';
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Get the local timezone name
            

        
        pal.classList.add(
                    "border", 
                    "border-gray-300", 
                    "p-4", 
                    "rounded-lg", 
                    "bg-gray-50", 
                    "shadow-sm"
                  );
        pal.innerHTML=`
        <p class="text-lg font-semibold">${addMoney} Taka is Donated for Flood at Noakhali</p>
        <p> ${gmtString} GMT ${offsetSign}${offsetHours}${offsetMinutes} (${timeZone})</P>
        `
        
        document.getElementById('transaction-history').appendChild(pal);
        
     }
          

    
     else {
        alert('Put the right amount (positive number)');
      }



})


// donation for feni
document.getElementById('btn-dnt-feni').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney=getInputValueFieldById('input-amount-for-feni');
    

    if (!isNaN(addMoney) && addMoney > 0) {
        
        const balanceOfFeni=getInputTextFieldById('balanc-feni');
        const requiredBalance=getInputRequiedFieldById ('requirdDonation')
        

        const newBalanceOfFeni= addMoney +balanceOfFeni;
        const newRequiredOfNoakhali= requiredBalance-addMoney;

        document.getElementById('balanc-feni').innerText=newBalanceOfFeni;
        document.getElementById('requirdDonation').innerText=newRequiredOfNoakhali;

        const openModalBtn = document.getElementById('btn-dnt-feni');
        const closeModalBtn = document.getElementById('closeModalBtn');
        const modal = document.getElementById('modal');

         openModalBtn.addEventListener('click', () => {
         modal.classList.remove('hidden');
         });

        closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
         });

        const pal =document.createElement('div');
  
        const now = new Date(); // Get the current date and time
        const gmtString = now.toUTCString(); // Convert to UTC string
        const timeZoneOffset = now.getTimezoneOffset(); // Get the timezone offset in minutes
        const offsetHours = String(Math.abs(timeZoneOffset / 60)).padStart(2, '0');
        const offsetMinutes = String(Math.abs(timeZoneOffset % 60)).padStart(2, '0');
        const offsetSign = timeZoneOffset <= 0 ? '+' : '-';
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Get the local timezone name
            

        
        pal.classList.add(
                    "border", 
                    "border-gray-300", 
                    "p-4", 
                    "rounded-lg", 
                    "bg-gray-50", 
                    "shadow-sm"
                  );
        pal.innerHTML=`
        <p class="text-lg font-semibold">${addMoney} Taka is Donated for Flood at Feni</p>
        <p> ${gmtString} GMT ${offsetSign}${offsetHours}${offsetMinutes} (${timeZone})</P>
        `
        
        document.getElementById('transaction-history').appendChild(pal);
        
     }
          

    
     else {
        alert('Put the right amount (positive number)');
      }



})

// donation for aid of qouta
document.getElementById('btn-dnt-qaid').addEventListener('click',function(event){
    event.preventDefault();
    const addMoney=getInputValueFieldById('input-amount-for-qaid');
    

    if (!isNaN(addMoney) && addMoney > 0) {
        
        const balanceOfQaid=getInputTextFieldById('balanc-qaid');
        const requiredBalance=getInputRequiedFieldById ('requirdDonation')
        

        const newBalanceOfQaid= addMoney +balanceOfQaid;
        const newRequiredOfNoakhali= requiredBalance-addMoney;

        document.getElementById('balanc-qaid').innerText=newBalanceOfQaid;
        document.getElementById('requirdDonation').innerText=newRequiredOfNoakhali;

        const openModalBtn = document.getElementById('btn-dnt-qaid');
        const closeModalBtn = document.getElementById('closeModalBtn');
        const modal = document.getElementById('modal');

         openModalBtn.addEventListener('click', () => {
         modal.classList.remove('hidden');
         });

        closeModalBtn.addEventListener('click', () => {
        modal.classList.add('hidden');
         });

        const pal =document.createElement('div');
  
        const now = new Date(); // Get the current date and time
        const gmtString = now.toUTCString(); // Convert to UTC string
        const timeZoneOffset = now.getTimezoneOffset(); // Get the timezone offset in minutes
        const offsetHours = String(Math.abs(timeZoneOffset / 60)).padStart(2, '0');
        const offsetMinutes = String(Math.abs(timeZoneOffset % 60)).padStart(2, '0');
        const offsetSign = timeZoneOffset <= 0 ? '+' : '-';
        const timeZone = Intl.DateTimeFormat().resolvedOptions().timeZone; // Get the local timezone name
            

        
        pal.classList.add(
                    "border", 
                    "border-gray-300", 
                    "p-4", 
                    "rounded-lg", 
                    "bg-gray-50", 
                    "shadow-sm"
                  );
        pal.innerHTML=`
        <p class="text-lg font-semibold">${addMoney} Taka is Donated for  injured people in qouta movement</p>
        <p> ${gmtString} GMT ${offsetSign}${offsetHours}${offsetMinutes} (${timeZone})</P>
        `
        
        document.getElementById('transaction-history').appendChild(pal);
        
     }
          

    
     else {
        alert('Put the right amount (positive number)');
      }



})




 // btn donation and history


document.getElementById('btn-donation').addEventListener('click',function(){
    showSectionById('donation-conatiner')

})
document.getElementById('btn-history').addEventListener('click',function(){
    showSectionById('transection-container')

})
 