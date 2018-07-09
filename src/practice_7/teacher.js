const {Person} = require ("../../src/practice_7/person.js");

class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass === undefined){
            return (super.introduce()+" I am a Teacher. I teach No Class.");
        }else{
            return (super.introduce()+" I am a Teacher. I teach Class "+this.klass.number+".");
        }
       
    }
    introduceWith(student){
        if(student.klass.equal(this.klass)){
           return (super.introduce()+" I am a Teacher. I don't teach Jerry.");
        }else{
            return (super.introduce()+" I am a Teacher. I teach Jerry.");
        }
        

    }

}
module.exports = {Teacher};

