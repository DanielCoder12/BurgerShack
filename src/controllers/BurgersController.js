
import { burgersService } from "../services/BurgersService.js";
import BaseController from "../utils/BaseController.js";

export class BurgersController extends BaseController {
    constructor() {
        super('api/burgers')

        this.router
            .get('', this.getBurgers)
            .get('/test', this.test)
            .get('/:burgerId', this.getByBurgerId)
            .post('', this.createBurger)
            .delete('/:burgerId', this.destroyBurger)
    }
    async destroyBurger(request, response, next) {
        try {
            const theBurger = request.params.burgerId
            await burgersService.destroyBurger(theBurger)
            response.send('burger destroyed')
        } catch (error) {
            next(error)
        }
    }

    async getBurgers(request, response, next) {
        try {
            const myBurgers = await burgersService.getBurgers()
            response.send(myBurgers)
        } catch (error) {
            next(error)
        }
    }

    async getByBurgerId(request, response, next) {
        try {
            const myBurger = request.params.burgerId
            const selectedBurger = await burgersService.getByBurgerId(myBurger)
            response.send(selectedBurger)
        } catch (error) {
            next(error)
        }
    }

    async createBurger(request, response, next) {
        try {
            const burgerInfo = request.body
            const newBurger = await burgersService.createBurger(burgerInfo)
            response.send(newBurger)
        } catch (error) {
            next(error)
        }
    }

    test(request, response, next) {
        response.send('test')

    }
}