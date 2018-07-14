import Person from "../practice_8/person";

export default class Student extends Person {
    constructor(id,name,age,klass) {
      super(id, name, age); // 调用父类的constructor(x, y)
      this.klass = klass;
    }
  
    introduce() {
        if(this.klass.vertifyLeader(this)){
        // if(this.klass.leader === this){ 去别的类取值，应该把方法封装在那个类中
            return super.introduce() +" I am a Student. I am Leader of Class "+ this.klass.number +".";
        }else{
            return super.introduce() +" I am a Student. I am at Class "+ this.klass.number +".";
        }      
    }

    is(student){
        return this.id === student.id;
    }
  }








