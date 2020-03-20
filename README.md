# Clicky Game

A simply memory game in which the user attempts to click all 9 pictures without clicking the same one twice. Once the client clicks a picture twice that game is over. The highscore is updated once it is beat. 

## Images of Gameplay
![Gif of game play](/midnightgame.gif)
![Gif of game play](/losing.gif)

# Deployment
* [Live Site](https://boundsalexis.github.io/clicky-game/)
* [Repository](https://github.com/boundsalexis/clicky-game)


## Code Snippet
```Javascript
if (lost === false) {
    // update our temporary vars
    //if lost is false, the image that was just clicked is not already in the clicked array
    //we have to add it and give them a point
    updatedClicked.push(clicked);
    newCurrentScore += 1;
    //setting the state
    this.setState({ clickedIcons: updatedClicked })
    this.setState({ currentscore: newCurrentScore });
        //stops the highscore from continuing to acrue across multiple games
        if(newCurrentScore > highscore && newHighScore<9){
            newHighScore += 1;
            this.setState({ highscore: newHighScore });}
        // alerts user to win, resets score to play again
        if( newCurrentScore === 9){
            alert("You Won!")
            updatedClicked =[];
            newCurrentScore=0;
            this.setState({ clickedIcons: updatedClicked })
            this.setState({ currentscore: newCurrentScore });}

}
```


## Built With
* [React](https://reactjs.org/) - The web framework used
* [Node.js](https://nodejs.org/en/)
* [CSS](https://developer.mozilla.org/en-US/docs/Web/CSS)
* [Javascript](https://www.javascript.com/)
* [Node.js](https://nodejs.org/en/)
* [Express](https://www.npmjs.com/package/express)

# Installation
1. Clone repository
2. Run npm start

## Authors

* **Alexis Bounds** 
* [Portfolio](https://alexisboundsportfolio.herokuapp.com/)
* [Github Profile](https://github.com/boundsalexis)
* [LinkedIn Profile](https://linkedin.com/in/boundsalexis)


## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
