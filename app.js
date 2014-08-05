var resultOutput = document.getElementById("result");
var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
var operation = document.getElementById('operation');

var operations = {
  add : function (num1, num2) {
      return  num1 + num2;
  },

  substract : function (num1, num2) {
      return  num1 - num2;
  },

  multiply : function (num1, num2) {
      return  num1 * num2;
  },

  divide : function (num1, num2) {
      return  num1 / num2;
  }
}

function chooseOperation(operation){
  switch(operation.options[operation.selectedIndex].value){
    case "+":
      return operations.add;
      break;
    case "-":
      return operations.substract;
      break;
    case "*":
      return operations.multiply;
      break;
    case "/":
      return operations.divide;
      break;
    default:
     return "operation not supported"; 
  }
}

function changeListenerOn(el){
  el.addEventListener('change', function(){
      var num1 = parseInt(input1.value);
      var num2 = parseInt(input2.value);
      var operate = chooseOperation(operation);
      var result = operate(num1, num2);

      resultOutput.innerText = result;
  });
}

changeListenerOn(input1);
changeListenerOn(input2);
changeListenerOn(operation);
