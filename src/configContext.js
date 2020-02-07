import React, { Component, createContext } from "react";

//connecting Highscore and Currentscore
const { Provider, Consumer } = createContext();

//provider will be exported in configprovider class 
class ConfigProvider extends Component {
    state = {
        highscore: 0,
        currentscore: 0,
        lastClicked: "",
        clickedIcons: [],
        icons: [],
        handleClick: () => {
            console.log(this.state);
            didWin();
        },
        didWin: () => {
            this.state.clickedIcons.map(element => {
                if (element === lastClicked) {
                    console.log("You lost")
                }
            })
        }
    };

    render() {
        return (
            <Provider value={{
                highscore: 12,
                currentScore: 0,
                clickedIcons: this.state.clickedIcons,
                icons: this.state.icons
            }}>
                {this.props.children}
            </Provider>

        )
    }
}
export { ConfigProvider };

export default Consumer;