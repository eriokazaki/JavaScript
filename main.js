let buttons = document.getElementsByClassName(".Button");
let result =document.getElementById("result");
let str = result.innerHTML;
let newStr = str.slice(0, -1);

function clickButton(target) {
  let target_value = target.innerHTML;
  
  if (target_value == "AC") {
    result.innerHTML = "0";
  } else if (target_value == "=") {
    if (result.innerHTML.slice(-1) ==".") {
      return;
    }
    result.innerHTML = eval(result.innerHTML)　
  } else if (target_value == "." && result.innerHTML == "0") {
    result.innerHTML = "0.";
  } else if (target_value == "." && result.innerHTML.includes(".")) {
    return;
  } else if (target_value == "." && result.innerHTML.slice(-1) =="-") {
    return;
  }  else if (target_value == "." && result.innerHTML.slice(-1) =="+") {
    return;
  } else if (target_value == "." && result.innerHTML.slice(-1) =="*") {
    return;
  } else if (target_value == "." && result.innerHTML.slice(-1) =="/") {
    return;
  }  else if (target_value == "00" && result.innerHTML == "0") {
    result.innerHTML = "0";
  } else if (target_value == "*" && result.innerHTML == "0") {
    result.innerHTML = "0*";
  } else if (target_value == "/" && result.innerHTML == "0") {
    result.innerHTML = "0/";
  } else if (target_value == "+" && result.innerHTML.slice(-1) ==".") {
    return;
  } else if (target_value == "+" && result.innerHTML.slice(-1) =="-") {
    let slice = result.innerHTML.slice(0, -1);
    result.innerHTML = slice + target_value;
  } else if (target_value == "+" && result.innerHTML.slice(-1) =="*") {
    let slice = result.innerHTML.slice(0, -1);
    result.innerHTML = slice + target_value;
  } else if (target_value == "+" && result.innerHTML.slice(-1) =="/") {
    let slice = result.innerHTML.slice(0, -1);
    result.innerHTML = slice + target_value;
  } else if (target_value == "-" && result.innerHTML == "0") {
    result.innerHTML = "0-";
  } else if (target_value == "-" && result.innerHTML.slice(-1) =="+") {
    let slice = result.innerHTML.slice(0, -1);
    result.innerHTML = slice + target_value;
  } else if (target_value == "-" && result.innerHTML.slice(-1) =="*") {
    let slice = result.innerHTML.slice(0, -1);
    result.innerHTML = slice + target_value;
  } else if (target_value == "-" && result.innerHTML.slice(-1) =="/") {
    let slice = result.innerHTML.slice(0, -1);
    result.innerHTML = slice + target_value;
  } else if (target_value == "-" && result.innerHTML.slice(-1) ==".") {
    return;
  } else if (target_value == "*" && result.innerHTML.slice(-1) ==".") {
    return;  
  } else if (target_value == "*" && result.innerHTML.slice(-1) =="-") {
    let slice = result.innerHTML.slice(0, -1);
    result.innerHTML = slice + target_value;
  } else if (target_value == "*" && result.innerHTML.slice(-1) =="+") {
    let slice = result.innerHTML.slice(0, -1);
    result.innerHTML = slice + target_value;
  } else if (target_value == "*" && result.innerHTML.slice(-1) =="/") {
    let slice = result.innerHTML.slice(0, -1);
    result.innerHTML = slice + target_value;  
  } else if (target_value == "/" && result.innerHTML.slice(-1) ==".") {
    return;
  } else if (target_value == "/" && result.innerHTML.slice(-1) =="-") {
    let slice = result.innerHTML.slice(0, -1);
    result.innerHTML = slice + target_value;
  } else if (target_value == "/" && result.innerHTML.slice(-1) =="*") {
    let slice = result.innerHTML.slice(0, -1);
    result.innerHTML = slice + target_value;
  } else if (target_value == "/" && result.innerHTML.slice(-1) =="+") {
    let slice = result.innerHTML.slice(0, -1);
    result.innerHTML = slice + target_value;
  } else {
    if (result.innerHTML == "0") {
      result.innerHTML = target_value;
    } else {
      result.innerHTML += target_value;
    }
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
  } else if (str.slice(-1) == "-" && target_value =="+") {
    result.innerHTML = newStr + target_value
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