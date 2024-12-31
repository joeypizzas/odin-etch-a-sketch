# Planning and pseudocode for etch-a-sketch game
## Does your program have a user interface? What will it look like? What functionality will the interface have?
- title in HTML. 
- a brief explanation of how the game works in HTML. 
- a default 16x16 grid on which the game can be played. This is created via the DOM inside a div in HTML. 
- moving mouse over one of the squares on the grid highlights it using hover when entering and leaving. Leaving adds a pixelated effect to the square like on a a real etch-a-sketch. 
- a  new grid button that prompts the user to enter the number of squares they want for their new grid. Submitting removes the old grid, adds the new one in the same total space. Max squares is 100x100.
- Randomize the color of the square's RGB value each time the mouse interacts with it.
## What inputs will your program have? Will the user enter data or will you get input from somewhere else?
- Creating grid via DOM initially. 
- Input from mouse moving over grid, handled via event listeners. 
- Prompt to create a new grid takes size from user. 
- Extra credit: randomized color takes input likely from some function that randomizes values, maybe math.random()?
## What’s the desired output?
- Initialized etch-a-sketch game with 16x16 grid. Fully functional. 
- Ability to create a new grid of your desired size. 
- Randomly change the color of the squares through each interaction. 
## Given your inputs, what are the steps necessary to return the desired output?
1. Add the title and initial explanations in HTML. 
2. Add new grid button, maybe on the same line as the initial explanation of the game. 
3. Create the grid using divs via DOM in JS. Create them using a loop and flexbox to appear correctly. Make sure the gird is the correct size (960px each side). 
4. Add event listeners on each square and add hover effect when the mouse goes into the square. When the mouse leaves the square, add the pixelated trail. 
5. Add event listener for new grid button. Clicking it prompts for the size of the new grid you want. 
6. Submitting the prompt removes the existing grid, adds the new grid in the correct size. Max of 100x100 is allowed. Anything else throws an error. 
7. Add randomized color for hover and or pixelated trail. Likely using function to assign random RGB value to hover or background color after triggering an event handler. Do this on a new branch after completing project. 