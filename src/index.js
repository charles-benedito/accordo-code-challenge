import BussCarPark from './BussCarPark';
import readline from 'readline';

const simulator = new BussCarPark();
const rl = readline.createInterface({input: process.stdin, output: process.stdout});

console.log('\x1Bc\n'+simulator.messages('logo')+simulator.messages('instructions'));

rl.on('line', line => {
    console.log('\x1Bc'+simulator.messages('logo')); // clear console

    const words = line.trim().toLowerCase().split(' ');
    switch(words[0]) {
        case 'place':
            if(words[1] && words[2] && words[3])
                simulator.place(Number(words[1]), Number(words[2]), words[3]);
            else
                console.log(`Command "${line}" not identified`);
        break;
        case 'move':
            simulator.move();
        break;
        case 'left':
            simulator.left();
        break;
        case 'right':
            simulator.right();
        break;
        case 'report':
            const currentPosition = simulator.report();
            console.log(`Your position is x: ${currentPosition.x} y: ${currentPosition.y} facing: ${currentPosition.facing}`);
        break;
        default:
            console.log(`Command "${line}" not identified`);
    }

    console.log(simulator.messages('instructions') + simulator.messages('parking'));
});