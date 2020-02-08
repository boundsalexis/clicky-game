import React, { Component, createContext } from "react";
// import { scryRenderedComponentsWithType } from "react-dom/test-utils";

//connecting Highscore and Currentscore
const { Provider, Consumer } = createContext();

//provider will be exported in configprovider class 
//HAVE TO DEFINE PROVIDER BECAUSE ITS PROVIDEING, DONT HAVE TO DEFINE CONSUMER BECAUSE ITS JUST USING THOSE VALUES

class ConfigProvider extends Component {
    state = {
        highscore: 0,
        currentscore: 0,
        lastClicked: "",
        clickedIcons: [],
        icons: ["./images/doberman1.jpg", "./images/doberman2.jpg", "./images/doberman3.jpg", "./images/doberman4.jpg", "./images/doberman5.jpg", "./images/doberman6.jpg", "./images/doberman7.jpg", "./images/doberman8.jpg", "./images/doberman9.jpg"],
        handleClick: (clicked) => {
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
                    alert("you lost");
                    // if it didnt match anything
                }
            })


            if (lost === false) {
                // update our update vars
                updatedClicked.push(clicked);
                newCurrentScore += 1;
                this.setState({ clickedIcons: updatedClicked })
                this.setState({ currentscore: newCurrentScore });
                if(newCurrentScore > highscore && newHighScore<9){
                    newHighScore += 1;
                    this.setState({ highscore: newHighScore });
                    }

            }else{
                console.log("itsa me");
                updatedClicked =[];
                newCurrentScore=0;
                this.setState({ clickedIcons: updatedClicked })
                this.setState({ currentscore: newCurrentScore });


            }
            // no matter what we shuffle the array
            //shuffle array
            shuffledIcons.sort(() => Math.random() - 0.5);
            shuffledIcons.sort(()=> Math.random() - 0.5);
            shuffledIcons.sort(() => Math.random() - 0.5);

            // update array to shuffled array
            this.setState({ icons: shuffledIcons });
            console.log(highscore, currentscore,clickedIcons,icons);

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



   //     icons: [
    //         {
    //         backgroundImage: 'url("/images/doberman1.jpg")'
    //     },
    //     {
    //         backgroundImage: 'url("/images/doberman2.jpg")'
    //     }
    // ]

        //FUNCTIONS I WANT TO PASS
        //`{background-image: url('./images/doberman1.jpg');}`,
        // didWin: () => {
        //     this.state.clickedIcons.map(element => {
        //         if (element === lastClicked) {
        //             console.log("You lost")
        //         }
        //     })
        // },
        // handleClick: () => {
        //     console.log(this.state);
        //     didWin();
        // }
        // didWin: () => {
        //     this.state.clickedIcons.map(element => {
        //         if (element === lastClicked) {
        //             console.log("You lost")
        //         }
        //     })
        // }