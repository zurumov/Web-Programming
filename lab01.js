const eForm = document.getElementById('form');
//If i ever need to write eForm = then it should be let eForm = document.getElementById('form'); otherwise it should stay as const if I won't make changes
const eResults = document.getElementById('result');

//Clear function that writes an empty string
function clear(){
    eResults.innerHTML = 'empty string';
}

//Write function 
function write(s){
    eResults.innerHTML += '<p>'+s+'</p>';
}

function showValue(e) {
    if(e.type == 'submit') {
        return '';
    }else if(e.type == 'radio') {
        if (e.checked) {
            return 'Selected to adopt a '+e.value;
        } else {
            return '';
        }
    } else {
        return e.name+': '+e.value;
    }
}



function display(){
    clear();
    write('New request for a pet:');
    for(let i=0; i<eForm.elements.length; i++) {
        write(showValue(e.Form.elements[i]));
    }
    return false;
}