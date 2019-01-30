const calculateLocation = require('./calculateLocation')

test('Bounds: 8,10. Starting location 1,2 E. Command list: MMLMRMMRRMML should be 3 3 S', () => {
  expect(calculateLocation('8 10','1 2 E', 'MMLMRMMRRMML')).toBe('3 3 S')
})

test('Test out of bounds', () => {
  expect(calculateLocation('1 1','1 2 E', 'MM')).toBe('The rover went out of bounds')
})
