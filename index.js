const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })
const calculateLocation = require('./calculateLocation')

const lineOne = 'Please enter the terrain bounds as a coordinate separated by a space: (e.g. 8 10)  '
const lineTwo = 'Please enter the starting coordinates of the rover and the first letter of the direction of the rover: (e.g. 1 2 E)  '
const lineThree = 'Please enter the movement commands of the rover: (e.g. MMLMRMMRRMML)  '

rl.question(lineOne, bounds => {
  rl.question(lineTwo, startLocation => {
    rl.question(lineThree, commandList => {
      console.log(calculateLocation(bounds, startLocation, commandList))
      rl.close()
    })
  })
})
