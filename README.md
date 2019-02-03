## Mars Rover Challenge


### Context:

Rovers have been sent to Mars to survey the terrain and you have been charged with creating
their navigation system. The specifications of the challenge are listed below.

- Mars’s surface can be thought of as a zone that is itself a two-dimensional grid of square areas.
- The zones have been very carefully surveyed ahead of time and are deemed safe for
exploration within the landing terrain bounds, as represented by a single cartesian coordinate - for example: (5, 5).
- The rover understands the cardinal points and can face either East (E), West (W), North(N) or South (S) at any given time.
- The rover understands three commands:
  - M - Move one space forward in the direction it is facing
  - R - rotate 90 degrees to the right
  - L - rotate 90 degrees to the left
- Due to the transmission delay in communicating with the rover on Mars, you are only able to send the rover a single list of commands.
- These commands will be executed by the rover and its resulting location sent back to HQ. This is an example of the list of commands sent to the rover:
8 10
12 E
MMLMRMMRRMML
- This is how the rover will interpret the above commands:
  - The first line describes how big the current zone is. This zone’s boundary is at
  the Cartesian coordinate of 8,10 and the zone comprises 80 blocks.
  - The second line describes the rover’s starting location and orientation.
  - This rover would start at position 1 on the horizontal axis, position 2 on the vertical axis and would be facing East (E). The third line is the list of commands (movements and rotations) to be executed by the rover.
  - As a result of following these commands, a rover starting at 1 2 E in this zone
  would land up at 3 3 S .


### Design decisions:

- Do not over complicate code and keep the code as intuitive to understand as possible, by avoiding too many granular functions and constructs, to improve readability and code clarity.
- Aim to make the code functional and declarative, by avoiding global state and using ES6, for code cleanliness and readability.
- Keep performance in mind, by terminating loops in the event of an error.
- Separate the core function from the user interface, to keep the program modular.
- Use ESLint for consistency in the code.


### Testing strategy:

I used jest, a JavaScript testing framework, is write 6 unit tests for the program, which includes testing for correct outputs, error handling and user input validation.


### 1. Install dev dependencies
```
$ npm install
```

### 2. Run tests
```
$ npm test
```

### 3. Run program
```
$ npm start
```
