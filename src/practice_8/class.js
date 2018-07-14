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
        }
    }

    equal(peopleklass){
        return this.number === peopleklass.number;
    }

    vertifyLeader(student){
        return this.leader !== undefined && this.leader.is(student);
    }
}

