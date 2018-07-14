export default class Class{
    constructor(number){
        this.number = number;
    }

    getDisplayName(){
        return "Class " + this.number
    }

    assignLeader(student){
        if (this.equal(student.klass)) {
            this.leader = student;
        }else{
            console.log("It is not one of us.")
        }
    }

    verifyLeader(student) {
        return this.leader !== undefined && this.leader.is(student);
    }

    appendMember(student){
        student.changeClass(this);
    }

    equal(peopleklass){
        return this.number === peopleklass.number;
    }
}


