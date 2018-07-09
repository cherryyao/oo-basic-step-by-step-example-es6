const {Person} = require ("../../src/practice_6/person.js");

class Teacher extends Person{
    constructor(name,age,klass){
        super(name,age);
        this.klass = klass;
    }
    introduce(){
        if(this.klass === undefined){
            return (super.introduce()+" I am a Teacher. I teach No Class.");
        }else{
            return (super.introduce()+" I am a Teacher. I teach Class "+this.klass+".");
        }
       
    }

}
module.exports = {Teacher};
