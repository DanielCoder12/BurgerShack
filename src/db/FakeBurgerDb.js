import { Burger } from "../models/Burger.js";

class FakeBurgerDb {
    constructor() {
        this.burgers = [
            new Burger({ name: 'Bacon Burger', id: 1, price: 14 }),
            new Burger({ name: 'Normal Burger', id: 2, price: 10 }),
            new Burger({ name: 'Cheese Burger', id: 3, price: 12 })
        ]
    }
}

export const fakeBurgerDb = new FakeBurgerDb()