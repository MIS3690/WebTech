/* Psuedo-Code


makeShape() - generate a random shape, and display it on the screen, get the start time
    1. create shape
        1. random position
            - set left and top to be a random integer
            - we might need to use window.innerHeight and window.innerWidth
        2. random size
        3. random color
        4. random shape (circle/box?)
    2. display this shape - set display to block
    3. get start time (new Date().getTime())

displayReaction() - calculate the reaction time and display it, repeat makeShape
    1. get the end time
    2. reaction time = end - start
    3. display reaction time - use innerHTML/innerText
    4. make the shape disappear - set display to none
    5. setTimeout(makeShape, randomWaitingTime)


Clicking on the button triggers makeShape

Clicking on the shape triggers the displayRecation

*/
