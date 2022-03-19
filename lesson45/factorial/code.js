
function myFactorial (n) {
    if (n <= 1) {
        return 1
    } else {
        return n * myFactorial(n-1) // 5 * (5-1)  1*2*3*4*5*6*7*9*10
    }
    
}
console.log(myFactorial(5))  







// function powOne(x, n) {
//     let result = 1;
  
//     // умножаем result на x n раз в цикле
//     for (let i = 0; i < n; i++) {
//     //   result *= x;  
//       result = result * x  
//     }
  
//     return result;
//   }
  
//   alert( powOne(2, 3) );       








  function factorial(n) {
    // Начальный результат будет равен 1,
    // чтобы его можно было умножать на последующие числа.
    // 0 подходит только для подсчёта суммы,
    // потому что умножение на 0 всегда даёт 0.
    let result = 1
  
    for (let i = 0; i < n ; i++) {
      // Так как наш счётчик начинается с 0
      // и растёт до n-1, нам нужно прибавить к нему
      // единицу, чтобы правильно рассчитать произведение.
      result *= i + 1    
    
    }
  
    return result
  }
  
  console.log(factorial(5))// 120
  