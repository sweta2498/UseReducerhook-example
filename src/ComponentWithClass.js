import { Component, createRef } from "react";
import Btn from "./Btn";
import { ThemeContext } from "./Context";

class ComponentWithClass extends Component {
 
    constructor() {
        super();
        this.state = {};
        this.state.name = "demo";
        this.logo = createRef(null);
    }

    setName(e) {
        this.setState({ ...this.state, name: e.target.value })
    }

    changeImage = () => {
        this.logo.current.style.transform = "rotate(25deg)";
    }

    render() {
        return (
            <ThemeContext.Consumer>
                {
                    (theme) =>
                        <div className="App" style={{ background: theme.background, color: theme.color }}>
                            <h1>Class Based Component : {this.state.name}</h1>
                            <img src="logo192.png" onClick={this.changeImage} ref={this.logo} alt="logo" /><br></br>
                            <input type="text" onChange={(e) => this.setName(e)}></input>
                            <Btn/>
                        </div>
                }
            </ThemeContext.Consumer>
        )
    }
}
export default ComponentWithClass;