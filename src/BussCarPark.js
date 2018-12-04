export default class BussCarPark {

    place(x, y, facing) {
        if(x !== null && x >= 0 && x <= 4 && y !== null && y >= 0 && y <= 4) {
            this.x = x;
            this.y = y;
        }

        if(facing !== null && facing === 'north' || facing === 'south' || facing === 'east' || facing === 'west')
            this.facing = facing;
    }

    report() {
        return {
            x: this.x,
            y: this.y,
            facing: this.facing
        }
    }

    isPlaced() {
        return this.x !== undefined && this.y !== undefined && this.facing !== undefined;
    }

    right() {
        switch(this.facing) {
            case 'north':
                this.place(null, null, 'east');
            break;
            case 'south':
                this.place(null, null, 'west');
            break;
            case 'east':
                this.place(null, null, 'south');
            break;
            case 'west':
                this.place(null, null, 'north');
            break;
        }
    }

    left() {
        switch(this.facing) {
            case 'north':
                this.place(null, null, 'west');
            break;
            case 'south':
                this.place(null, null, 'east');
            break;
            case 'east':
                this.place(null, null, 'north');
            break;
            case 'west':
                this.place(null, null, 'south');
            break;
        }
    }

    move() {
        switch(this.facing) {
            case 'north':
                this.place(this.x, ++this.y);
            break;
            case 'south':
                this.place(this.x, --this.y);
            break;
            case 'east':
                this.place(++this.x, this.y);
            break;
            case 'west':
                this.place(--this.x, this.y);
            break;
        }
    }

    messages(message) {

        switch(message) {
            case 'instructions':
                if(this.isPlaced())
                    return `You can use any of these commands below:
    \x1b[43mmove\x1b[0m       will move one square forward on facing direction
    \x1b[43mleft\x1b[0m       will rotate 90 degrees left
    \x1b[43mright\x1b[0m      will rotate 90 degrees right
    \x1b[43mreport\x1b[0m     to report your current position\n\n`;
                else
                    return `To start you need to place the buss inside the 5x5 car park, using the command:\n
    \x1b[43mplace x y facing\x1b[0m\n
    x and y can accept any value from 0 to 4, facing can accept north, south, west and east
    example: place 2 2 north (will put the buss in the middle facing north\n\n`;
            
            case 'parking':
                let squares = '';
                if(this.isPlaced()) {
                    for(let y = 4; y >= 0; y--) {        
                        for(let x = 0; x < 5; x++) {
                            if(x === this.x && y === this.y) {
                                switch(this.facing) {
                                    case 'north':
                                        squares += ` \x1b[41m[  ${x},${y}⬆ ]\x1b[0m `; // red background + bright
                                    break;
                                    case 'south':
                                        squares += ` \x1b[41m[  ${x},${y}⬇ ]\x1b[0m `;
                                    break;
                                    case 'east':
                                        squares += ` \x1b[41m[  ${x},${y}➡ ]\x1b[0m `;
                                    break;
                                    case 'west':
                                        squares += ` \x1b[41m[  ${x},${y}⬅ ]\x1b[0m `;
                                    break;
                                }
                            } else
                                squares += ` [  ${x},${y}  ] `;
                        }
                        squares += '\n';
                    }
                    squares += '\n';
                }
                return squares;

            case 'logo':
                return `
                                                                                   ./(######(/*,                     
                                                                               *((*..       ..*(#(*                 
                                                                              ,*.      ....       .(.               
                                                                                ** .*/,,....,*/*.  .,                
                                                                                   */,,.. (%/.   ,*                   
                                                                                   ...,,.(#/,,, ..                   
                                                                                       ...#%/. .                     
                                                                                          #%/.                        
   ,(#%%%(/.*#,     /#%%%%%(,       *#%%%%%#,      .*#%%%%%#/,     ##*,(#%%#*.   *(#%%%#(.(%/.    ./#%%%%%(/          
./%%*.   .*%%%,  .#%#.     /%%,   #%#.     *%%,   (%%,     .#%#*  .#%%%,. .,*. ,%%(     .#%%/.  ,%%(,     *#%#.       
 %#/       ,#%, ./%#.       ,,.  *%%.       ,,.  ,%(,       ./%%. .#%(,       ,#%,       .%%/.  #%(        .%%/       
(%(.       ./%, ,#%(            .(%#            ./%*.        ,%%. .#%*        *##.        (%/. .##*         (%(       
(%#,       .(%, ,(%#            ./%#             *%/.        *%%. .#%,        *#%.        #%/.  #%(         #%(       
,(%#.      (%%,  ,%%*      ,%%*  .%%/      ,%%/. .%%(       /#%(  .#%,        ./%(,      *%%/.  /%%,      ./%%,       
  (%%#***#%##%,   *#%#(**/(%#*    ,(%#(**/(%%/    .#%%#/**/#%%,   .#%,          /%%(/**(###%/.   /#%%(/*/(%%(,        
    ,/(((*, .*.     ./((((/,        .*/((((,         */((((*.      **.            ,/(((/* ,*,      .*((((/,.\n\n\n\n`

        }
    }
   
}