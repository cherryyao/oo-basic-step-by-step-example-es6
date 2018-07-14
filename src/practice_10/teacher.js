import Person from "../practice_10/person";

export default class Teacher extends Person {
    constructor(id,name,age,klasses) {
      super(id, name, age); 
      this.klasses = klasses;
    }
  
    introduce() {
        if(this.klasses == undefined || this.klasses.length === 0){
            return super.introduce() + " I am a Teacher. I teach No Class.";
        }else{
            let teachClass = this.klasses.map(klass => klass.number).join(", ");
            return super.introduce() + " I am a Teacher. I teach Class "+ teachClass +".";
        }         
    }

    introduceWith(student){
        let isStudent = this.klasses.some( klass => klass.equal(student.klass));
        if(isStudent){
            return super.introduce() +" I am a Teacher. I teach "+ student.name +".";
        }else{
            return super.introduce() +" I am a Teacher. I don't teach Jerry.";
        }
    }
}








