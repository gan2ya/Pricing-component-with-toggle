const checkbox=document.getElementById('checkbox');
const monthly=document.getElementsByClassName('monthly');
const annually=document.getElementsByClassName('annually');


function Check() {
    if(checkbox.checked){
        
        for (let item of monthly){
            item.style.display='block';
        }
        for (let item of annually){
            item.style.display = 'none';
        }
        
        
    }else{
        for (let item of monthly){
            item.style.display = 'none';
        }
        for (let item of annually){
            item.style.display='block';
        }  
    }
}

Check();
checkbox.addEventListener('change', Check);