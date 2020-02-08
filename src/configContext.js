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
        icons: ["./images/doberman1.jpg" ,"./images/doberman2.jpg", "./images/doberman3.jpg", "./images/doberman4.jpg", "./images/doberman5.jpg", "./images/doberman6.jpg", "./images/doberman7.jpg", "./images/doberman8.jpg", "./images/doberman9.jpg" ],
        // shuffleArray: () => {
            // this.state.icons.sort(()=> Math.random() - .5);
        // },
        handleClick: (clicked) => {
            console.log(this.state.clickedIcons);
            let clickedArray = this.state.clickedIcons;
            if (clickedArray.length >0 ){
                this.state.clickedIcons.map( element =>{
                    console.log("in here")
                    if (element === clicked){
                        
                        alert("You lose");
                    }else{
                        console.log("down here");
                        clickedArray.push(clicked);
                        this.setState({clickedIcons: clickedArray})
                    }

            })
        }else{
            clickedArray.push(clicked);
            this.setState({clickedIcons: clickedArray})
        }


        }
       
    };

    render() {
        return (
            <Provider value={{
                highscore: 12,
                currentscore: 0,
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