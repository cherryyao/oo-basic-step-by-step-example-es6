export default class Class{
    constructor(number){
        this.number = number;
    }

    getDisplayName(){
        return "Class " + this.number
    }

    assignLeader(student){
        if(this.equal(student.klass)){
            this.leader = student;
        }else{
            console.log ("It is not one of us.")
        } 
    }

    appendMember(student){
        // student.klass = this;  在Class类中不应该直接修改student类中的值
        student.changeKlass(this);
    }

    equal(peopleklass){
        return this.number === peopleklass.number;
    }

    verifyLeader(student) {
        return this.leader !== undefined && this.leader.is(student);
    }
}


