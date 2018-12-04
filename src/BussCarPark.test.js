import { expect } from 'chai'
import BussCarPark from './BussCarPark';

describe('Buss Car Park Simulator', () => {
    var simulator;

    beforeEach(function() {
        simulator = new BussCarPark();
    });

    describe('Method place', () => {
        it("should set position x", function() {
            let x = 1,
                y = 2;
            simulator.place(x, y);
            expect(simulator.x).to.equal(1);
        });

        it("should set position y", function() {
            let x = 1,
                y = 2;
            simulator.place(x, y);
            expect(simulator.y).to.equal(2);
        });

        it("should set facing", function() {
            let facing = 'north';
            simulator.place(null, null, facing);
            expect(simulator.facing).to.equal('north');
        });
        
        it("should set position x, y, facing", function() {
            let x = 4,
                y = 3,
                facing = 'south';
            simulator.place(x, y, facing);
            expect(simulator.x).to.equal(4);
            expect(simulator.y).to.equal(3);
            expect(simulator.facing).to.equal('south');
        });

        it("should not exit the carpark", function() {
            simulator.place(8, 2);
            expect(simulator.x).to.equal(undefined);
            expect(simulator.y).to.equal(undefined);
            
            simulator.place(1, 5);
            expect(simulator.x).to.equal(undefined);
            expect(simulator.y).to.equal(undefined);
            
            simulator.place(7, 6);
            expect(simulator.x).to.equal(undefined);
            expect(simulator.y).to.equal(undefined);
        });

        it("should not accept not a number", function() {
            simulator.place('foor', 3);
            expect(simulator.x).to.equal(undefined);
            expect(simulator.y).to.equal(undefined);

            simulator.place(4, 'bar');
            expect(simulator.x).to.equal(undefined);
            expect(simulator.y).to.equal(undefined);

            simulator.place('foo', 'bar');
            expect(simulator.x).to.equal(undefined);
            expect(simulator.y).to.equal(undefined);
        });

        it("should not accpet negative positions", function() {
            simulator.place(-3, 3);
            expect(simulator.x).to.equal(undefined);
            expect(simulator.y).to.equal(undefined);

            simulator.place(2, -9);
            expect(simulator.x).to.equal(undefined);
            expect(simulator.y).to.equal(undefined);

            simulator.place(-2, -1);
            expect(simulator.x).to.equal(undefined);
            expect(simulator.y).to.equal(undefined);
        });
        
    });

    describe('Method report', () => {
        it('should have not empity position at start', () => {
            expect(simulator.report()).to.not.be.empty;
        });

        it('should have undefined positions at start', () => {
            const report = simulator.report();
            expect(report.x === undefined && report.y === undefined && report.facing === undefined).to.be.true;
        });

        it('should report current position', () => {
            let x = 1,
                y = 2,
                facing = 'north';
            simulator.place(x, y, facing);
            expect(simulator.report()).to.deep.equal({x: x, y: y, facing: facing});
        });

        it('should return 3 keys', () => {
            expect(Object.keys(simulator.report())).to.have.lengthOf(3);
        });
    });

    describe('Method move', () => {
        it('should move one unit to north when facing north', () => {
            let x = 2,
                y = 2,
                facing = 'north';
            simulator.place(x, y, facing);
            simulator.move();
            expect(simulator.x).to.equal(2);
            expect(simulator.y).to.equal(3);
        });
        
        it('should move one unit to south when facing south', () => {
            let x = 2,
                y = 2,
                facing = 'south';
            simulator.place(x, y, facing);
            simulator.move();
            expect(simulator.x).to.equal(2);
            expect(simulator.y).to.equal(1);
        });

        it('should move one unit to west when facing west', () => {
            let x = 2,
                y = 2,
                facing = 'west';
            simulator.place(x, y, facing);
            simulator.move();
            expect(simulator.x).to.equal(1);
            expect(simulator.y).to.equal(2);
        });

        it('should move one unit to east when facing east', () => {
            let x = 2,
                y = 2,
                facing = 'east';
            simulator.place(x, y, facing);
            simulator.move();
            expect(simulator.x).to.equal(3);
            expect(simulator.y).to.equal(2);
        });
    });

    describe('Method right', () => {
        it('should face east after turn 90° right when facing north', () => {
            simulator.place(null, null, 'north');
            simulator.right();
            expect(simulator.facing).to.equal('east');
        });

        it('should face west after turn 90° right when facing south', () => {
            simulator.place(null, null, 'south');
            simulator.right();
            expect(simulator.facing).to.equal('west');
        });

        it('should face sout after turn 90° right when facing east', () => {
            simulator.place(null, null, 'east');
            simulator.right();
            expect(simulator.facing).to.equal('south');
        });

        it('should face north after turn 90° right when facing west', () => {
            simulator.place(null, null, 'west');
            simulator.right();
            expect(simulator.facing).to.equal('north');
        });
    });

    describe('Method left', () => {
        it('should face west after turn 90° left when facing north', () => {
            simulator.place(null, null, 'north');
            simulator.left();
            expect(simulator.facing).to.equal('west');
        });

        it('should face east after turn 90° left when facing south', () => {
            simulator.place(null, null, 'south');
            simulator.left();
            expect(simulator.facing).to.equal('east');
        });

        it('should face north after turn 90° left when facing east', () => {
            simulator.place(null, null, 'east');
            simulator.left();
            expect(simulator.facing).to.equal('north');
        });

        it('should face south after turn 90° left when facing west', () => {
            simulator.place(null, null, 'west');
            simulator.left();
            expect(simulator.facing).to.equal('south');
        });
    });

    describe('Integrations', () => {
        it('should report position 0, 1, north', () => {
            simulator.place(0, 0, 'north');
            simulator.move();
            expect(simulator.report()).to.deep.equal({x: 0, y: 1, facing: 'north'});
        });

        it('should report position 0, 0, west', () => {
            simulator.place(0, 0, 'north');
            simulator.left();
            expect(simulator.report()).to.deep.equal({x: 0, y: 0, facing: 'west'});
        });

        it('should report position 3, 3, north', () => {
            simulator.place(1, 2, 'east');
            simulator.move();
            simulator.move();
            simulator.left();
            simulator.move();
            expect(simulator.report()).to.deep.equal({x: 3, y: 3, facing: 'north'});
        });
    });
    

});