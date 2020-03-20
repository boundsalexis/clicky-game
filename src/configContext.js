import React, { Component, createContext } from "react";
//imports react dependencies

//object destructing into a provider and consumer
const { Provider, Consumer } = createContext();


class ConfigProvider extends Component {

    //sets the global state variables we need
    state = {
        highscore: 0,
        currentscore: 0,
        clickedIcons: [],
        icons: ["./images/doberman1.jpg", "./images/doberman2.jpg", "./images/doberman3.jpg", "./images/doberman4.jpg", "./images/doberman5.jpg", "./images/doberman6.jpg", "./images/doberman7.jpg", "./images/doberman8.jpg", "./images/doberman9.jpg"],
        handleClick: (clicked) => {
            //destructure current state
            const { highscore, currentscore, clickedIcons, icons } = this.state;

            // variables to help with updating state
            let updatedClicked = clickedIcons;
            let shuffledIcons = icons;
            let newCurrentScore = currentscore;
            let newHighScore = highscore;


            //user has not lost
            let lost = false;

            // if array is not empty
            // iterate through array contents
            clickedIcons.map(element => {
                /// if one of the elements matches what was just clicked
                if (element === clicked) {
                    //we tell them they lost
                    lost = true;
                    alert("You Lost");

                }

            })


            if (lost === false) {
                // update our update vars
                //if lost is false, the image that was just clicked is not already in the clicked array
                //we had to add it and give them a point
                updatedClicked.push(clicked);
                newCurrentScore += 1;
                //setting the state
                this.setState({ clickedIcons: updatedClicked })
                this.setState({ currentscore: newCurrentScore });
                //stops the highscore from continuing to acrue across multiple games
                if (newCurrentScore > highscore && newHighScore < 9) {
                    newHighScore += 1;
                    this.setState({ highscore: newHighScore });
                }
                if (newCurrentScore === 9) {
                    alert("You Won!")
                    updatedClicked = [];
                    newCurrentScore = 0;
                    this.setState({ clickedIcons: updatedClicked })
                    this.setState({ currentscore: newCurrentScore });
                }

            } else {
                //if lost is true, reset the game

                updatedClicked = [];
                newCurrentScore = 0;
                this.setState({ clickedIcons: updatedClicked })
                this.setState({ currentscore: newCurrentScore });


            }
            // no matter what we shuffle the array
            //shuffle array
            //shuffle more that once for peak randome
            shuffledIcons.sort(() => Math.random() - 0.5);
            shuffledIcons.sort(() => Math.random() - 0.5);
            shuffledIcons.sort(() => Math.random() - 0.5);

            // update array to shuffled array
            this.setState({ icons: shuffledIcons });
            console.log(highscore, currentscore, clickedIcons, icons);

        }

    };

    render() {
        return (
            <Provider value={{
                highscore: this.state.highscore,
                currentscore: this.state.currentscore,
                clickedIcons: this.state.clickedIcons,
                icons: this.state.icons,
                shuffleArray: this.state.shuffleArray,
                handleClick: this.state.handleClick
            }}>
                {this.props.children}
            </Provider>

        )
    }
}
export { ConfigProvider };

export default Consumer;
