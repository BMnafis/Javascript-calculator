function calc(value){
    form.panel.value = form.panel.value + value;
}

function calculator(calculate){
    form.panel.value = eval(calculate);
}

function clearBtn(){
    form.panel.value = '';
}

function backF(){
    let value = form.panel.value;

    form.panel.value = value.substr(0, value.length-1);
}