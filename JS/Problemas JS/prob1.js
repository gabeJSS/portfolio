function verificador(num1, num2) {
    if (num1 >= num2) {
      return console.log(num1,"é maior ou igual a",num2);
    } else {
      return console.log(num2,"é maior que",num1);
    }
  }
  
  console.log(verificador(5, 3));  
  console.log(verificador(2, 7));  

  