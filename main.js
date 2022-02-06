function clickbutton(target) {
  let result = document.getElementById("result");
  let target_value = target.innerHTML;
  const operator = ["+", "-", "*", "/", "."];
  

if (target_value == "AC") {
    result.innerHTML = "0";
 } else if (target_value == "=") {
       result.innerHTML = eval(result.innerHTML);
 } else {
   if (operator.includes(target_value) && operator.includes(result.innerHTML.slice(-1))) return
   if (result.innerHTML == "0") {
      result.innerHTML = target_value;
  } else if (result.innerHTML == "00") {
      result.innerHTML = target_value;
  } else if (result.innerHTML == "+") {
      result.innerHTML = target_value;
  } else if (result.innerHTML == "*") {
      result.innerHTML = target_value;     
  } else if (result.innerHTML == ".") {
      result.innerHTML = eval("0." + target_value);
  } else {
      result.innerHTML += target_value; 
  }
}
}


