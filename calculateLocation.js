
function calculatePosition(bounds, startLocation, commandList){

  let boundsArray = bounds.split(' ')
  let x = Number(startLocation.split(' ')[0])
  let y = Number(startLocation.split(' ')[1])
  let direction = startLocation.split(' ')[2]
  let currentLocation = [x,y]
  let commandListArray = commandList.split('')
  let wentOutOfBounds = false

  commandListArray.forEach( command => {

    if(command === 'M'){
      currentLocation = moveRover(direction, currentLocation)
    }
    else if(command === 'R'){
      direction = rotateRight(direction)
    }
    else if(command === 'L'){
      direction = rotateLeft(direction)
    }

    if(isOutOfBounds(currentLocation, boundsArray) && wentOutOfBounds == false) wentOutOfBounds = true

  })

  return wentOutOfBounds ? 'The rover went out of bounds' : `${currentLocation[0]} ${currentLocation[1]} ${direction}`

}

function isOutOfBounds(currentLocation, bounds){
  return (Number(currentLocation[0]) > bounds[0] || Number(currentLocation[1]) > bounds[1])
}

function rotateLeft(direction){
  if(direction == 'N'){
    return 'W'
  }
  else if(direction == 'E'){
    return 'N'
  }
  else if(direction == 'S'){
    return 'E'
  }
  else if(direction == 'W'){
    return 'S'
  }
}

function rotateRight(direction){
  if(direction == 'N'){
    return 'E'
  }
  else if(direction == 'E'){
    return 'S'
  }
  else if(direction == 'S'){
    return 'W'
  }
  else if(direction == 'W'){
    return 'N'
  }
}

function moveRover(direction, currentLocation){
  if(direction == 'N'){
    currentLocation[1]++
  }
  else if(direction == 'E'){
    currentLocation[0]++
  }
  else if(direction == 'S'){
    currentLocation[1]--
  }
  else if(direction == 'W'){
    currentLocation[0]--
  }
  return currentLocation
}

module.exports = calculatePosition
