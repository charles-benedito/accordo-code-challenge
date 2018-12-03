export default class BussCarPark {
    constructor(x = 0, y = 0, facing = 'north') {
        this.x = x;
        this.y = y;
        this.facing = facing;
    }

    report() {
        return {
            x: this.x,
            y: this.y,
            facing: this.facing
        }
    }
}