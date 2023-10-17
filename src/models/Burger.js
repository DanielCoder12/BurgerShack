export class Burger {
    constructor(data) {
        this.id = data.id
        this.name = data.name || 'no name'
        this.price = data.price || 10
    }
}