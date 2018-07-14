import Person from "../practice_8/person";

export default class Teacher extends Person {
    constructor(id,name,age,klass) {
      super(id, name, age); 
      this.klass = klass;
    }
  
    introduce() {
        if(this.klass == null){
            return super.introduce() + " I am a Teacher. I teach No Class.";
        }else{
            return super.introduce() + " I am a Teacher. I teach Class "+ this.klass.number +".";
        }         
    }

    introduceWith(student){
        if(student.klass.equal(this.klass)){
            return super.introduce() +" I am a Teacher. I teach "+ student.name +".";
        }else{
            return super.introduce() +" I am a Teacher. I don't teach Jerry.";
        }
    }
  }






