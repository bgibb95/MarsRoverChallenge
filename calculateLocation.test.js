const calculateLocation = require('./calculateLocation')

test('Test valid rotation and movement example', () => {
  expect(calculateLocation('8 10', '1 2 E', 'MMLMRMMRRMML')).toBe('The final location of the rover is: 3 3 S')
})

test('Additional test valid rotation and movement example', () => {
  expect(calculateLocation('4 9', '1 8 S', 'MLMLMRMRMM')).toBe('The final location of the rover is: 3 6 S')
})

test('Test out of bounds', () => {
  expect(calculateLocation('1 1', '1 2 E', 'MM')).toBe('The rover went out of bounds')
})

test('User input case validation', () => {
  expect(calculateLocation('8 10', '1 2 e', 'mMLMrMMRRMMl')).toBe('The final location of the rover is: 3 3 S')
})

test('User input number validation', () => {
  expect(calculateLocation('a b', 'a b E', 'mMLMrMMRRMMl')).toBe('Please enter the starting location and terrain bounds as numbers only')
})

test('Invalid movement command error handling', () => {
  const invalidCommand = 'X'
  expect(calculateLocation('8 10', '1 2 E', `MMLMR${invalidCommand}MRRMML`)).toBe(`The following command was not understood: ${invalidCommand}`)
})
