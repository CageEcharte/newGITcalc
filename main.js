var box = document.getElementById('steps');

function toScreen (x) {
  box.value+=x;
  if(x==='c'){
    box.value = " ";
  }
}

function answer(){
  x=box.value;

  x=eval(x);
  box.value=x;
}

function power(x){
  x=box.value;
  x=eval(x*x);
  box.value=x;
}

function backspace(){
 var num = box.value;
 var len = num.length-1;
 var newNuM = num.substring(0,len);
  box.value = newNuM;
}
