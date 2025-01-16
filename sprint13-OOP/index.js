class Car {
    constructor(brand, model, color, mileage) {
        this.brand = brand;
        this.model = model;
        this.color = color;
        this.mileage = mileage;
    }

    getDescriptions() {
        return 'Car [brand = ${this.brand}, model = ${this.model}, color = ${this.color}, mileage = ${this.mileage}]';
    }
}

const main = () => {
    const firstCar = new Car("Volvo", "XC-60", "Black", 234000);
    const secondCar = new Car("Mazda", "CX-5", "Green", 111000);
    const thirtCar = new Car("Dacia", "BIGGSTER", "Blue", 20000);

    console.log(firstCar.getDescriptions());
    console.log(secondCar.getDescriptions());
    console.log(thirtCar.getDescriptions());
};
main();

class theRecingCar extends Car {
    constructor(brand, model, color, mileage) {
        super(brand, model, color, mileage);
    }
    taskesPartInTheChampionship(championshipPosition) {
        if (championshipPosition > 0) {
            return 'Won ${championshipPosition}th place.';
        } else {
            return `Didn't win any prizes.`;
        }
    }
}

const championship = () => {
    const car1 = new theRecingCar("Toyota", "Turbo", "Red", 100000);
    const car2 = new theRecingCar("BMW", "e90", "Grey", 160500)

    console.log(
        `The car => ${car1.getDescriptions()}, ${car1.taskesPartInTheChampionship(2)}`
    );

    console.log(
        `The car => ${car2.getDescriptions()}, ${car2.taskesPartInTheChampionship(-1)}`
    );
};
championship();