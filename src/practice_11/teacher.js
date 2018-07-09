const {Person} = require ("../../src/practice_11/person.js");

class Teacher extends Person{
    constructor(id,name,age,klasses){
        super(id,name,age);
        this.klasses = klasses;
    }
    introduce(){
        if(this.klasses === undefined){
            return (super.introduce()+" I am a Teacher. I teach No Class.");
        }else{
            return (super.introduce()+` I am a Teacher. I teach Class ${this.klasses.map(klass=> klass.number).join(', ')}.`);
        }
       
    }
    introduceWith(student){
        if(student.klass.equal(this.klasses)){
           return (super.introduce()+" I am a Teacher. I teach Jerry.");
        }else{
            return (super.introduce()+" I am a Teacher. I don't teach Jerry.");
        }       
    }
    isTeaching(student){
       if(student.klass.isIn(student)){
        introduceWith(student);
       } 

    }

}
module.exports = {Teacher};

