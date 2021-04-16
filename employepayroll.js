const regexname=RegExp('[A-Z]{1}[a-z]{3,}');
const nonzeroregex = RegExp('^[0-9]*[1-9][0-9]*$');
const genderregex = RegExp("^[MF]$");
const regexpincode = RegExp('^[1-9]{1}[0-9]{2}[\\s]?[0-9]{3}$');
const emailregex = RegExp('^[A-Za-z0-9_-]+(\\.[A-Za-z0-9_-])*@[A-Za-z0-9-]+(?:\\.[A-Za-z0-9-]+)*$');
const date = new Date();

class EmployeePayroll{
    id;
    salary;
    gender;
    startdate;
    pincode;
    email;

    constructor(...params){

        this.id = params[0];
        this.name = params[1];
        this.salary = params[2];
        this.gender = params[3];
        this.startdate = params[4];
        this.pincode = params[5];
        this.email = params[6];

    } 

    get id(){ return this._id; }

    set id(id){
        if(nonzeroregex.test(id)){
            this._id = id;
        }
        else{
            throw "ID is Incorrect";
        }
    }

    get name(){ return this._name;}
    
    set name(name){ 
        if(regexname.test(name)){
            this._name = name;
        }
        else{
            throw "Name is Incorrect";
        }
    }

    get salary(){ return this._salary;}
    
    set salary(salary){ 
        if(nonzeroregex.test(salary)){
            this._salary = salary;
        }
        else{
            throw "Name is Incorrect";
        }
    }

    get gender(){ return this._gender;}
    
    set gender(gender){ 
        if(genderregex.test(gender)){
            this._gender = gender;
        }
        else{
            throw "Gender is Incorrect";
        }
    }

    get startdate(){ return this._startdate;}
    
    set startdate(startdate){ 
        if( startdate.getFullYear() <= date.getFullYear() ){
            this._startdate = startdate;
        }
        else{
            throw "Start Date is Incorrect";
        }
    }

    get pincode(){ return this._pincode; }
    
    set pincode(pincode){ 
        if(regexpincode.test(pincode)){
            this._pincode = pincode;
        }
        else{
            throw "Pincode is Incorrect";
        }
    }

    get email(){ return this._email; }
    
    set email(email){ 
        if(emailregex.test(email)){
            this._email = email;
        }
        else{
            throw "Email is Incorrect";
        }
    }
    toString(){
        return "id=" +this.id+ ", name= " +this.name+ ", salary= " +this.salary+ " , gender= " +this.gender+
        " , startdate= "+this.startdate+ " , pincode= " +this.pincode+ " , email: "+this.email;
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
    let newemployeePayroll = new EmployeePayroll(2,"Roshni",98000,"F",new Date(2015,11,04));
    console.log(newemployeePayroll.toString());
}catch(e){
    console.error(e);
}

try{
    let employeePayroll3 = new EmployeePayroll(3,"Anup",99999,"M",new Date(2017,08,07),783375);
    console.log(employeePayroll3.toString());
}catch(e){
    console.error(e);
}

try{
    let employeePayroll4 = new EmployeePayroll(4,"Deepika",18000,"F",new Date(2019,10,09),201305,"deepika@gmail.com");
    console.log(employeePayroll4.toString());
}catch(e){
    console.error(e);
}
