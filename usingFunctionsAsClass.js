// class name - Employee
function Employee(id, name){
    //fields
    this.id = id
    this.name = name


    // Inefficient to replicate this function accross objects
    //this.print = function(){
     //   console.log(`Name: ${this.name} id: ${this.id} \ncurrent employees count: ${Employee.count}`)
    //}

    //Better method: define common functions in prototype
    
}

//class level variables
//shared accross objects
Employee.prototype.baseSalary = 50000;

Employee.prototype.print = function(){
    console.log(`Name: ${this.name} id: ${this.id} \ncurrent employees count: ${Employee.count}`)
}

Employee.count = 0


d = new Employee(1, 'divya')
Employee.count++;
d.print()


v = new Employee(1, 'vvvv')
Employee.count++;

v.print()
