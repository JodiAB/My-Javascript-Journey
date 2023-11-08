// function USD(YSA){

//     const ExchangeRate = 18.48;
//     return YSA * ExchangeRate; 
// }

// function EUR(TSA){
//     const ExchangeRate = 19.73; 
//     return TSA * ExchangeRate;  
// }

// function Pounds(SSA)
// {
//     const ExchangeRate = 22.66;
//     return SSA * ExchangeRate; 
// }
const amountInRand = 1;

const exchangeRates = {
  USD: 18.48, 
  EUR: 19.73, 
  GBP: 22.66, 
};

const amountInUSD = amountInRand * exchangeRates.USD;
const amountInEUR = amountInRand * exchangeRates.EUR;
const amountInGBP = amountInRand * exchangeRates.GBP;

console.log(`$1 is equal to R${amountInUSD} `);
console.log(`€1 is equal to R${amountInEUR} `);
console.log(`£1 is equal to R${amountInGBP} `);


function CAWV(amount) {
    const vatRate = 0.15; 
    const Total = amount + amount * vatRate;
    return Total;
  }
  
  const Amount = 400; 
  const Total = CAWV(Amount);
  
  console.log(`The amount after tax is R${Amount} is R${Total}.`);

  const Num1 = 8;
const Num2 = 20;
const Num3 = 14;

function findLargestNumber() {
  if (Num1 >= Num2 && Num1 >= Num3) {
    console.log("Num1 is the largest:", Num1);
  } else if (Num2 >= Num1 && Num2 >= Num3) {
    console.log("Num2 is the largest:", Num2);
  } else {
    console.log("Num3 is the largest:", Num3);
  }
}

findLargestNumber();


function isOddOrEven(num1) {
    if (num1 % 2 === 0) {
      console.log(`${num1} is even.`);
    } else {
      console.log(`${num1} is odd.`);
    }
  }

  function isOddOrEven(num2) {
    if (num2 % 2 === 0) {
      console.log(`${num2} is even.`);
    } else {
      console.log(`${num2} is odd.`);
    }
  }
  
  
  const num1 = 167; 
  const num2 = 178;
  isOddOrEven(num1);
  isOddOrEven(num2);


  function sortNumbersDescending(Number1, Number2, Number3) {
    let largest, middle, smallest;
  
    if (Number1 >= Number2 && Number1 >= Number3) {
      largest = Number1;
      if (Number2 >= Number3) {
        middle = Number2;
        smallest = Number3;
      } else {
        middle = Number3;
        smallest = Number2;
      }
    } else if (Number2 >= Number1 && Number2 >= Number3) {
      largest = Number2;
      if (Number1 >= Number3) {
        middle = Number1;
        smallest = Number3;
      } else {
        middle = Number3;
        smallest = Number1;
      }
    } else {
      largest = Number3;
      if (Number1 >= Number2) {
        middle = Number1;
        smallest = Number2;
      } else {
        middle = Number2;
        smallest = Number1;
      }
    }
  
    console.log(`Sorted from largest to smallest: ${largest}, ${middle}, ${smallest}`);
  }
  
  const Number1 = 14; 
  const Number2 = 8; 
  const Number3 = 20; 
  
  sortNumbersDescending(Number1,Number2,Number3);
  
  