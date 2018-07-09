
class Class{
    constructor(number){
        this.number = number;
    }
    getDisplayName(){
        return ("Class "+this.number);
    }
    equal(klass){
       return klass.number !== this.number;
    }
}
module.exports = {Class};