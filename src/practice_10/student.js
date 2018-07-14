import Person from "../practice_10/person";

export default class Student extends Person {
    constructor(id,name,age,klass) {
      super(id, name, age); // 调用父类的constructor(x, y)
      this.klass = klass;
    }
  
    introduce() {
        if(this.klass.verifyLeader(this)){
            return super.introduce() +" I am a Student. I am Leader of Class "+ this.klass.number +".";
        }else{
            return super.introduce() +" I am a Student. I am at Class "+ this.klass.number +".";
        }      
    }

    is(student) {
        return this.id == student.id;
    }

    changeClass(klass){
        this.klass = klass;
    }
  }









