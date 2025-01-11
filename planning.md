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
    - Add flexbox to grid container, along with max-width and max-height, and flex-direction column. 
    - Initialize grid size variable. 
    - Create a function for creating the grid. 
        - This function takes a grid size input as a parameter, which is used to determine the size of the grid. 
        - Use for loops to create grid. Create a div, apply flex box to it and flex:1 and insert it inside the grid container, and then use another for loop to create divs inside of that until you reach the size of the grid. Apply flex:1 to all divs in the second for loop and insert the inside the div you just created with the first loop. Repeat the first for loop until you hit the correct size of the grid. 
4. Add event listeners on each square and add hover effect when the mouse goes into the square. When the mouse leaves the square, add the pixelated trail. 
5. Handle sketchpad reset: 
    - Write function that removes the existing grid. 
    - Add event listener on new grid button. 
    - Clicking it prompts for the size of the new grid you want.
    - Submitting it calls function that removes the existing grid, adds the new grid. Max size of 100x100 is allowed. Anything bigger throws an error. Non-numbers throws an error. Negative numbers throws an error. Non-integers throw an error. 
    - Make sure new grid is added in the same total space as initial grid. 
7. Add randomized color for pixelated trail:
    - New function that randomizes color. 
    - Initalize 3 RGB value variables outside of the loops. 
    - 3 infinite loops. In each one:
        - Assign one of the variables to math.random.
        - Trim the variable to 3 places. 
        - Check whether value <= .255. 
        - If so:
            - Check whether value ends in a 0. If so:
                - Trim the third digit. 
                - Multiple value by 100. 
                - Break the loop
            - If value doesn't end in a 0:
                - Multiply the value by 1000. 
                - Break the loop. 
    - Concatenate the three variables into RGB format. 
    -After creating function, call function to assign background color with pixelated trail. 
        