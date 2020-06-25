
function Account(id, balance){
    this.id = id
    this.balance = balance

    this.withdraw = function(amount){
          this.balance -= amount
       };

       this.deposit =  function(amount){
        this.balance += amount
     }
}


divyasAccont = new Account(1, 5000)
divyasAccont.deposit(1000)
console.table(divyasAccont)

divyasAccont.id = 0
console.table(divyasAccont)   //changes 

Object.freeze(divyasAccont)
divyasAccont.balance = 0 
console.table(divyasAccont)  //doesnt change

Object.defineProperty(Account, 'id', {
    configurable: false,
    enumerable: false,
    writable: false
  });

divyasAccont.id = -1
console.table(divyasAccont)   //no change here 