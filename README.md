# Accordo - Code Challenge - Bus in car park simulator

- The application is a simulation of a robot operated bus moving in a carpark, of
dimensions 5 units x 5 units.
- There are no other obstructions in the carpark.
- The bus is free to roam around the carpark, but must be prevented from exiting the

carpark. Any movement that would result in the bus leaving the carpark must be
prevented, however further valid movement commands must still be allowed.
The application should be able to read in any one of the following commands:
PLACE X,Y,F
MOVE
LEFT
RIGHT
REPORT
- PLACE will put the bus in the carpark in position X,Y and facing NORTH, SOUTH,
EAST or WEST.
- The origin (0,0) can be considered to be the SOUTH WEST most corner.
- The first valid command to the bus is a PLACE command, after that, any sequence of
commands may be issued, in any order, including another PLACE command. The
application should discard all commands in the sequence until a valid PLACE
command has been executed.
- MOVE will move the bus one unit forward in the direction it is currently facing.
- LEFT and RIGHT will rotate the bus 90 degrees in the specified direction without
changing the position of the bus.
- REPORT will announce the X,Y and F of the bus. This can be in any form, but
standard output is sufficient.
- A bus that is not in the carpark should ignore the MOVE, LEFT, RIGHT and REPORT
commands.
- Input can be from a file, or from standard input, as the developer chooses.
- Provide test data to exercise the application.

Constraints:
- The bus must not exit the carpark during movement. This also includes the initial
placement of the bus.
- Any move that would cause the bus to exit the carpark must be ignored.

### Pictures
Beginning of planning
![beginning of planning](https://github.com/charles-benedito/accordo-code-challenge/blob/master/start.jpg)
Project finished 
![project finished](https://github.com/charles-benedito/accordo-code-challenge/blob/master/end.png)

### Installing

```
git clone https://github.com/charles-benedito/accordo-code-challenge.git
cd accordo-code-challenge
npm install && npm start
```

## Running the tests

```
npm test
```

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
