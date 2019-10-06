class Person {
  name: string;
  age: number;
  constructor (name:string, age:number) {
    this.name = name;
    this.age = age;
  }
  dance () {
    console.log(`${this.name} is dancing.`)
  }
}

class AwesomePerson extends Person {
  dance () {
    super.dance()
    console.log(`${this.name} is better at dancing.`)
  }
}

const bran = new Person('Bran', 19)
bran.dance()

const rob = new AwesomePerson('Rob', 27)
rob.dance()

