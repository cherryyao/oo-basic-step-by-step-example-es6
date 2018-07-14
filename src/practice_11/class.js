export default class Class{
    constructor(number){
        this.number = number;
        this.leaderAssignedListeners = [];
        this.joinListeners = [];
    }

    getDisplayName(){
        return "Class " + this.number
    }

    assignLeader(student){
        if(this.number === student.klass.number){
            this.leader = student;
            this._notifyLeaderAssigned(student);
        }else{
            console.log ("It is not one of us.")
        } 
    }

    verifyLeader(student) {
        return this.leader !== undefined && this.leader.is(student);
    }

    appendMember(student){
        student.changeClass(this);
        this._nofiyJoined(student);
    }

    equal(peopleklass){
        return this.number === peopleklass.number;
    }

    registerAssignLeaderListener(listener){
        this.leaderAssignedListeners.push(listener);
    }

    _notifyLeaderAssigned(leader){
        this.leaderAssignedListeners.forEach(listener => listener.nofityLeaderAssigned(leader, this));
    }

    registerJoinListener(listener){
        this.joinListeners.push(listener);
    }

    _nofiyJoined(student) {
        this.joinListeners.forEach(listener => listener.nofiyJoined(student, this));
    }
}




