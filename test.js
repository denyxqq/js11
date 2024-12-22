const bankAccount = {
  ownerName: "denis",
  accountNumber: 7952812,
  balance: 150,
  deposit(money) {
    let newBalance = bankAccount.balance += money;
    return newBalance;
  },

  withdraw(money) {
    let newBalance = bankAccount.balance -= money;
    return newBalance;
  },
};
bankAccount.deposit(Number(prompt("скільки хочете покласти грошей")));
alert(`сума на карті ${bankAccount.balance}`)
bankAccount.withdraw(Number(prompt("скільки хочете покласти грошей")));
alert(`сума на карті ${bankAccount.balance}`)



// #2

const weather = {
  temperature:Number(prompt("введіть температуру")) ,
  humidity:5 ,
  windSpeed:12 ,

  weatherTemp(){
    if(weather.temperature === 0){
      message = true;
    }else{
      message = false;
    }
  return message
    
  },
};
if (weather.weatherTemp() === true) {
  alert("температура 0 градусів")
  } else {
      alert("температура більша 0 градусів")
  }
  

  // #3
  
const user = {
  name: "denis",
  email: "denis@gmail.com",
  password: "7952812",
  login () {
      if(prompt("введіть email") === this.email && prompt("введіть пароль") === this.password){
          return("ви зареєстровані");
      }
  }
}

console.log(user.login());