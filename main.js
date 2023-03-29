let buttons = document.getElementsByClassName(".Button");
let result =document.getElementById("result");
let operate = 　document.getElementsByClassName("operator");

function clickButton(target) {
  let target_value = target.innerHTML;
  
  if (target_value == "AC") {
    result.innerHTML = "0";
  } else if (target_value == "=") {
    result.innerHTML = eval(result.innerHTML)　
  } else if (target_value == "." && result.innerHTML == "0") {
    result.innerHTML = "0.";
  } else if (target_value == "00" && result.innerHTML == "0") {
    result.innerHTML = "0";
  } else if (target_value == "*" && result.innerHTML == "0") {
    result.innerHTML = "0*";
  } else if (target_value == "/" && result.innerHTML == "0") {
    result.innerHTML = "0/";
  } else if (target_value == "+" && result.innerHTML == "0") {
    result.innerHTML = "0+";
  } else if (target_value == "-" && result.innerHTML == "0") {
    result.innerHTML = "0-";
  } else {
    if (result.innerHTML == "0") {
      result.innerHTML = target_value;
    } else {
      result.innerHTML += target_value;
    }
  }
}
function operating(target) {
  let target_value = target.innerHTML;
  let operate = 　document.getElementsByClassName("operator");
   
  if (result.innerHTML.slice(-1) == operate.textContent && target_value == operate.textContent) {
     const f = result.innerHTML.slice(0,-1)
     result.innerHTML = f + target_value;
  }
}

function clickplus(target) {
   let target_value = target.innerHTML;
   
   if(result.innerHTML.slice(-1) == "+" && target_value == "+") {
     let str = result.innerHTML;
     let newStr = str.slice(0, -1);
     console.log(newStr);
     result.innerHTML = newStr + target_value;
     console.log(result.innerHTML);
     result.innerHTML = result.innerHTML.slice(0, -1);
     console.log(result.innerHTML);
   } 
}

function clickminus(target) {
  let target_value = target.innerHTML;
  
  if(result.innerHTML.slice(-1) == "-" && target_value == "-") {
    let str = result.innerHTML;
    let newStr = str.slice(0, -1);
    console.log(newStr);
    result.innerHTML = newStr + target_value;
    console.log(result.innerHTML);
    result.innerHTML = result.innerHTML.slice(0, -1);
    console.log(result.innerHTML);
  }
}

function clickmulti(target) {
  let target_value = target.innerHTML;
  
  if(result.innerHTML.slice(-1) == "*" && target_value == "*") {
    let str = result.innerHTML;
    let newStr = str.slice(0, -1);
    console.log(newStr);
    result.innerHTML = newStr + target_value;
    console.log(result.innerHTML);
    result.innerHTML = result.innerHTML.slice(0, -1);
    console.log(result.innerHTML);
  }
}

function clickdivi(target) {
  let target_value = target.innerHTML;
  
  if(result.innerHTML.slice(-1) == "/" && target_value == "/") {
    let str = result.innerHTML;
    let newStr = str.slice(0, -1);
    console.log(newStr);
    result.innerHTML = newStr + target_value;
    console.log(result.innerHTML);
    result.innerHTML = result.innerHTML.slice(0, -1);
    console.log(result.innerHTML);
  }
}
