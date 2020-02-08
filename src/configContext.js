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
        // shuffleArray: () => {
        // this.state.icons.sort(()=> Math.random() - .5);
        // },
        handleClick: (clicked) => {
        

            //variables for later
            let clickedArray = this.state.clickedIcons;
            let iconArray = this.state.icons; 
            let currentscore = this.state.currentscore;

            let lost = false;
            //if there is something in the clicked array we will do this
            // if (clickedArray.length > 0) {

            // map through clicked icons
                this.state.clickedIcons.map(element => {

                    /// if one of the elements matches what was just clicked
                    if (element === clicked) {
                        //we tell them they lost
                        lost= true;
                        alert("you lost");                       
                        // if it didnt match anything
                    } 
                    // else {
                    //     // add it to our array
                    //     clickedArray.push(clicked);
                    //     // update our score
                    //     currentscore += 1;

                    //     /// update states to reflect score
                    //     this.setState({currentscore: currentscore});
                    //     this.setState({ clickedIcons: clickedArray });
                    // }
                    // return null;
                })

            // if the clicked array is empty
            // } 
            // else {
            if (lost===false){
                clickedArray.push(clicked);
                //update state
                this.setState({ clickedIcons: clickedArray })
                // update score
                currentscore += 1;
                // update state
                this.setState({currentscore: currentscore});
            }
                // //add what was just clicked
                // clickedArray.push(clicked);
                // //update state
                // this.setState({ clickedIcons: clickedArray })
                // // update score
                // currentscore += 1;
                // // update state
                // this.setState({currentscore: currentscore});
                
            // }
            // currentscore += 1;
            // this.setState({currentscore: currentscore})

        //shuffle array
        iconArray.sort(() => Math.random() - 0.5);
        // update array to shuffled array
        this.setState({icons: iconArray});
        return null;
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