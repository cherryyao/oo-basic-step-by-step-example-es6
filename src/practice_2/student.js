import Person from "../practice_2/person";

export default class Student extends Person {
    constructor(name,age,klass) {
      super(name, age); // 调用父类的constructor(x, y)
      this.klass = klass;
    }
  
    introduce() {
      return "I am a Student. I am at Class "+ this.klass +".";
    }
  }
