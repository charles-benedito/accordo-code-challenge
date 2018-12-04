!function(e){var t={};function n(s){if(t[s])return t[s].exports;var a=t[s]={i:s,l:!1,exports:{}};return e[s].call(a.exports,a,a.exports,n),a.l=!0,a.exports}n.m=e,n.c=t,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=1)}([function(e,t){e.exports=require("readline")},function(e,t,n){"use strict";n.r(t);var s=n(0),a=n.n(s);const r=new class{place(e,t,n){null!==e&&e>=0&&e<=4&&null!==t&&t>=0&&t<=4&&(this.x=e,this.y=t),(null!==n&&"north"===n||"south"===n||"east"===n||"west"===n)&&(this.facing=n)}report(){return{x:this.x,y:this.y,facing:this.facing}}isPlaced(){return void 0!==this.x&&void 0!==this.y&&void 0!==this.facing}right(){switch(this.facing){case"north":this.place(null,null,"east");break;case"south":this.place(null,null,"west");break;case"east":this.place(null,null,"south");break;case"west":this.place(null,null,"north")}}left(){switch(this.facing){case"north":this.place(null,null,"west");break;case"south":this.place(null,null,"east");break;case"east":this.place(null,null,"north");break;case"west":this.place(null,null,"south")}}move(){switch(this.facing){case"north":this.place(this.x,++this.y);break;case"south":this.place(this.x,--this.y);break;case"east":this.place(++this.x,this.y);break;case"west":this.place(--this.x,this.y)}}messages(e){switch(e){case"instructions":return this.isPlaced()?"You can use any of these commands below:\n    [43mmove[0m       will move one square forward on facing direction\n    [43mleft[0m       will rotate 90 degrees left\n    [43mright[0m      will rotate 90 degrees right\n    [43mreport[0m     to report your current position\n\n":"To start you need to place the buss inside the 5x5 car park, using the command:\n\n    [43mplace x y facing[0m\n\n    x and y can accept any value from 0 to 4, facing can accept north, south, west and east\n    example: place 2 2 north (will put the buss in the middle facing north\n\n";case"parking":let t="";if(this.isPlaced()){for(let e=4;e>=0;e--){for(let n=0;n<5;n++)if(n===this.x&&e===this.y)switch(this.facing){case"north":t+=` [41m[  ${n},${e}⬆ ][0m `;break;case"south":t+=` [41m[  ${n},${e}⬇ ][0m `;break;case"east":t+=` [41m[  ${n},${e}➡ ][0m `;break;case"west":t+=` [41m[  ${n},${e}⬅ ][0m `}else t+=` [  ${n},${e}  ] `;t+="\n"}t+="\n"}return t;case"logo":return"\n                                                                                   ./(######(/*,                     \n                                                                               *((*..       ..*(#(*                 \n                                                                              ,*.      ....       .(.               \n                                                                                ** .*/,,....,*/*.  .,                \n                                                                                   */,,.. (%/.   ,*                   \n                                                                                   ...,,.(#/,,, ..                   \n                                                                                       ...#%/. .                     \n                                                                                          #%/.                        \n   ,(#%%%(/.*#,     /#%%%%%(,       *#%%%%%#,      .*#%%%%%#/,     ##*,(#%%#*.   *(#%%%#(.(%/.    ./#%%%%%(/          \n./%%*.   .*%%%,  .#%#.     /%%,   #%#.     *%%,   (%%,     .#%#*  .#%%%,. .,*. ,%%(     .#%%/.  ,%%(,     *#%#.       \n %#/       ,#%, ./%#.       ,,.  *%%.       ,,.  ,%(,       ./%%. .#%(,       ,#%,       .%%/.  #%(        .%%/       \n(%(.       ./%, ,#%(            .(%#            ./%*.        ,%%. .#%*        *##.        (%/. .##*         (%(       \n(%#,       .(%, ,(%#            ./%#             *%/.        *%%. .#%,        *#%.        #%/.  #%(         #%(       \n,(%#.      (%%,  ,%%*      ,%%*  .%%/      ,%%/. .%%(       /#%(  .#%,        ./%(,      *%%/.  /%%,      ./%%,       \n  (%%#***#%##%,   *#%#(**/(%#*    ,(%#(**/(%%/    .#%%#/**/#%%,   .#%,          /%%(/**(###%/.   /#%%(/*/(%%(,        \n    ,/(((*, .*.     ./((((/,        .*/((((,         */((((*.      **.            ,/(((/* ,*,      .*((((/,.\n\n\n\n"}}},o=a.a.createInterface({input:process.stdin,output:process.stdout});console.log("c\n"+r.messages("logo")+r.messages("instructions")),o.on("line",e=>{console.log("c"+r.messages("logo"));const t=e.trim().toLowerCase().split(" ");switch(t[0]){case"place":t[1]&&t[2]&&t[3]?r.place(Number(t[1]),Number(t[2]),t[3]):console.log(`Command "${e}" not identified`);break;case"move":r.move();break;case"left":r.left();break;case"right":r.right();break;case"report":const n=r.report();console.log(`Your position is x: ${n.x} y: ${n.y} facing: ${n.facing}`);break;default:console.log(`Command "${e}" not identified`)}console.log(r.messages("instructions")+r.messages("parking"))})}]);