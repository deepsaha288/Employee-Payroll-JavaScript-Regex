class EmployeePayroll{
    id;
    salary;
    gender;
    startdate;

    constructor(...params){
        let nonzeroregex=RegExp('^[0-9]*[1-9][0-9]*$');
        let genderregex=RegExp('[M]{1}||[F]{1}');
        
        if(nonzeroregex.test(params[0])){
            this.id=params[0];
        }else{throw "Incorrect Id";}
        
        this.name=params[1];
        
        if(nonzeroregex.test(params[2])){
            this.salary=params[2];
        }else{throw "Incorrect Salary";}
        
        if(genderregex.test(params[3])){
            this.gender=params[3];
        }else{throw "Incorrect Gender";}

        this.startdate=params[4];
    } 

    get name(){ return this._name;}
    set name(name){ 
        let regexname=RegExp('[A-Z]{1}[a-z]{3,}');
        if(regexname.test(name)){
            this._name=name;
        }
        else{
            throw "Name is Incorrect";
        }
    }

    toString(){
        return "id=" +this.id+ ", name= " +this.name+ ", salary= " +this.salary+ " , gender= " +this.gender+
        " , startdate= "+this.startdate;
    }
}

let employeePayroll = new EmployeePayroll(1,"Deep",20000);
console.log(employeePayroll.toString());
try{
    employeePayroll.name="Manish";
    console.log(employeePayroll.toString());
}catch(e){
    console.error(e);
}

try{
    let newemployeePayroll = new EmployeePayroll(2,"Roshni",98000,"Female",new Date("03-02-2019"));
    console.log(newemployeePayroll.toString());
}catch(e){
    console.error(e);
}

try{
    let employeePayroll3 = new EmployeePayroll(3,"Anup",99999,"M",new Date("04-21-2018"));
    console.log(employeePayroll3.toString());
}catch(e){
    console.error(e);
}
