class Stark {
  name: string = "Bran";
  static castle: string = "Winterfell";
  saying: string;

  constructor() {
    this.saying = "Winterfell"
  }

  hello(person:string) {
    console.log(`Hello ${person}`)
  }
}

var ned = new Stark()
ned.saying = "winter is coming"
ned.hello('Rob')
