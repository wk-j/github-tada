import { EventEmitter } from "events";
import * as React from "react"
import * as ReactDOM from "react-dom"
import "./Style.css"

const line = "🎨⚡🔥🐛🚑✨📝🚀💄🎉✅🔒🍎🐧🏁🤖🍏🔖🚨🚧💚⬇⬆📌👷📈♻➖🐳➕🔧🌐✏💩⏪🔀📦👽🚚📄💥🍱👌♿💡🍻💬🗃🔊🔇👥🚸🏗📱🤡"
const mojis = Array.from(line)

type State = {
    hover: string
}

class App extends React.Component<{}, State> {

    constructor(props) {
        super(props)
        this.state = { hover: "" }
    }

    private onMouseEnter = (text) => (e) => {
        this.setState({ hover: text })
    }

    private onMouseLeave = (e) => {
    }

    private Moji = ({ item }: { item: string }) =>
        <span style={{
            width: "30px",
            height: "30px",
            fontSize: "25px",
            cursor: "pointer",
            margin: "2px",
            padding: "3px",
            textShadow: this.state.hover === item ? "4px 4px 4px #000000" : "2px 2px 4px #000000"
        }} onMouseEnter={this.onMouseEnter(item)} key={item}>
            {item}
        </span>

    private MojiContainer = ({ items }: { items: string[] }) =>
        <div style={{
            margin: "10px"
        }}>
            {items.map(x => <this.Moji item={x} />)}
        </div>

    private InputContainer = () =>
        <div style={{ width: "100%", background: "green" }}>
            <textarea style={{
                padding: "8px",
                fontSize: "25px",
                width: "100%",
                fontFamily: "NewRocker",
                // fontFamily: "Iosevka",
                // fontFamily: "Herculanum Regular",
                // color: "PURPLE",
                color: "Fuchsia",
                border: "1px solid grey",
                boxSizing: "border-box",
                textShadow: "1px 1px 1px grey"
            }} />
        </div>

    public render() {
        return (
            <div style={{ height: "100%" }}>
                <this.MojiContainer items={mojis} />
                <this.InputContainer />
            </div>
        )
    }
}

const el = document.getElementById("root")
ReactDOM.render(<App />, el)
