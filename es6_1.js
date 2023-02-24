class car {
  constructor(carname, modelname) {
    this.carname = carname;
    this.modelname = modelname;
  }

  model() {
    console.log(`I have a ${this.carname},it is a ${this.modelname}`);
  }
}

let car1 = new car("Ford", "Mustang");

//accessing property
console.log(car1.name);

//accessing method
car1.model();
