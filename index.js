const readline = require('readline')
const rl = readline.createInterface({ input: process.stdin, output: process.stdout })

const lineOne = 'Please enter the terrain bounds as a coordinate separated by a space: (e.g. 8 10)  '
const lineTwo = 'Please enter the starting coordinates of the rover and the first letter of the direction of the rover: (e.g. 1 2 E)  '
const lineThree = 'Please enter the movement commands of the rover: (e.g. MMLMRMMRRMML)  '

var boundsX = 0
var boundsY = 0

rl.question(lineOne, answer => {

  boundsX = Number(answer.split(' ')[0])
  boundsY = Number(answer.split(' ')[1])

  rl.question(lineTwo, answer2 => {

    var x = Number(answer2.split(' ')[0])
    var y = Number(answer2.split(' ')[1])
    var direction = answer2.split(' ')[2]

    rl.question(lineThree, answer3 => {

      var movementArray = answer3.split('')

      for(var i = 0; i<movementArray.length; i++){

        if(movementArray[i] == 'M'){

          if(direction == 'N'){
            y += 1
          }
          else if(direction == 'E'){
            x += 1
          }
          else if(direction == 'S'){
            y -= 1
          }
          else if(direction == 'W'){
            x -= 1
          }

        }
        else if(movementArray[i] == 'R'){
          if(direction == 'N'){
            direction = 'E'
          }
          else if(direction == 'E'){
            direction = 'S'
          }
          else if(direction == 'S'){
            direction = 'W'
          }
          else if(direction == 'W'){
            direction = 'N'
          }
        }
        else if(movementArray[i] =='L'){
          if(direction == 'N'){
            direction = 'W'
          }
          else if(direction == 'E'){
            direction = 'N'
          }
          else if(direction == 'S'){
            direction = 'E'
          }
          else if(direction == 'W'){
            direction = 'S'
          }
        }

        if(x > boundsX || y > boundsY){
          console.log('Oh no, the rover went out of bounds. Try adjusting your movement instructions');
          rl.close()
          return
        }

      }
      console.log(`Success! The location of the rover will be ${x},${y} ${direction}`)
      rl.close()

    })
  })
})
