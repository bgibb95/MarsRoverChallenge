
function calculateLocation(bounds, startLocation, commandList){

  let boundsArray = bounds.split(' ').map(Number)
  let x = startLocation.split(' ')[0]
  let y = startLocation.split(' ')[1]
  let direction = startLocation.split(' ')[2].toUpperCase()
  let currentLocation = [x, y].map(Number)
  let commandListArray = commandList.split('')
  let wentOutOfBounds = false
  let invalidCommand = false

  if(isInvalidNumberInput(currentLocation, boundsArray)) return 'Please enter the starting location and terrain bounds as numbers only'

  for(let command of commandListArray){

    command = command.toUpperCase()

    if(command === 'M'){
      currentLocation = moveRover(direction, currentLocation)
    }
    else if(command === 'L' || command === 'R'){
      direction = rotate(direction, command)
    }
    else{
      invalidCommand = command
      break
    }

    if(isOutOfBounds(currentLocation, boundsArray) && wentOutOfBounds === false){
      wentOutOfBounds = true
      break
    }

  }

  if(invalidCommand){
    return `The following command was not understood: ${invalidCommand}`
  }
  else if(wentOutOfBounds){
    return 'The rover went out of bounds'
  }
  else{
    return `The final location of the rover is: ${currentLocation[0]} ${currentLocation[1]} ${direction}`
  }

}

function isInvalidNumberInput(currentLocation, boundsArray){
  return (isNaN(currentLocation[0]) || isNaN(currentLocation[1]) || isNaN(boundsArray[0]) || isNaN(boundsArray[1]))
}

function isOutOfBounds(currentLocation, boundsArray){
  return currentLocation[0] > boundsArray[0] || currentLocation[1] > boundsArray[1] || currentLocation[0] < 0 || currentLocation[1] < 0
}

function rotate(direction, rotation){
  if(direction === 'N'){
    return rotation === 'L' ? 'W' : 'E'
  }
  else if(direction === 'E'){
    return rotation === 'L' ? 'N' : 'S'
  }
  else if(direction === 'S'){
    return rotation === 'L' ? 'E' : 'W'
  }
  else if(direction === 'W'){
    return rotation === 'L' ? 'S' : 'N'
  }
}

function moveRover(direction, currentLocation){
  if(direction === 'N'){
    currentLocation[1]++
  }
  else if(direction === 'E'){
    currentLocation[0]++
  }
  else if(direction === 'S'){
    currentLocation[1]--
  }
  else if(direction === 'W'){
    currentLocation[0]--
  }
  return currentLocation
}

module.exports = calculateLocation
