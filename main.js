let buttons = document.getElementsByClassName(".Button");
let cal = document.getElementsByClassName(".cal");
let result =document.getElementById("result");

function clickButton(target) {
  let target_value = target.innerHTML;

  if (target_value == "AC") {
    result.innerHTML = "0";
  } else if (target_value == "=") {
    result.innerHTML = eval(result.innerHTML)　
  }  else {
    if (result.innerHTML == "0") {
      result.innerHTML = target_value;
    } else {
      result.innerHTML += target_value;
    }
  }

}

$(function() {
 $('.cal').click(function () { 
 if (result.textContent.slice(-1) === cal.innerHTML) {
  const f = result.textContent.slice(0,-1)
  result.textContent = f + cal.textContent;
 }else{
  result.textContent += cal.textContent;
 }
 }
})
}
