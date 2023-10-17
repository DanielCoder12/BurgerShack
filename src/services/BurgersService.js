import { fakeBurgerDb } from "../db/FakeBurgerDb.js"
import { Burger } from "../models/Burger.js"
import { BadRequest } from "../utils/Errors.js"

class BurgersService {
    async destroyBurger(theBurger) {
        const foundBurger = fakeBurgerDb.burgers.findIndex(burger => burger.id == theBurger)
        if (foundBurger == -1) {
            throw new BadRequest(`no more burgers with this name ${theBurger}`)
        }
        await fakeBurgerDb.burgers.splice(foundBurger, 1)
    }
    createBurger(burgerInfo) {
        // burgerInfo.id = fakeBurgerDb.burgers.length + 1
        if (fakeBurgerDb.burgers.length == 0) {
            burgerInfo.id = 1
        }
        else {
            const burgerIds = fakeBurgerDb.burgers.map(burger => burger.id)
            const largestBurgerId = Math.max(...burgerIds)
            burgerInfo.id = largestBurgerId + 1
        }
        const newBurger = new Burger(burgerInfo)
        fakeBurgerDb.burgers.push(newBurger)
        return newBurger

    }
    getByBurgerId(myBurger) {
        const theBurger = fakeBurgerDb.burgers.find(burger => burger.id == myBurger)
        if (!theBurger) {
            throw new BadRequest(`no burger with this id: ${myBurger}`)
        }
        return theBurger
    }
    async getBurgers() {
        const burgers = await fakeBurgerDb.burgers
        return burgers
    }


}

export const burgersService = new BurgersService()