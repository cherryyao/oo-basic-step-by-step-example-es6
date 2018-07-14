import Person from "../practice_11/person";

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

    nofityLeaderAssigned(leader, klass){
        console.log(`I am ${this.name}. I know ${leader.name} become Leader of ${klass.getDisplayName()}.`)
    }

    nofiyJoined(student, klass){
        console.log(`I am ${this.name}. I know ${student.name} has joined ${klass.getDisplayName()}.`);
    }
  }







