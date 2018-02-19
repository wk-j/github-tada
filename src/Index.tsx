import { EventEmitter } from "events";
import * as React from "react"
import * as ReactDOM from "react-dom"
import "./Style.css"

const line = "🎨⚡🔥🐛🚑✨📝🚀💄🎉✅🔒🍎🐧🏁🤖🍏🔖🚨🚧💚⬇⬆📌👷📈♻➖🐳➕🔧🌐✏💩⏪🔀📦👽🚚📄💥🍱👌♿💡🍻💬🗃🔊🔇👥🚸🏗📱🤡"
const mojis = Array.from(line).map((value, index) => ({ value, index: index + 10 }))

type Item = {
    value: string
    index: number
}

type State = {
    hover: Item
}

class App extends React.Component<{}, State> {

    constructor(props) {
        super(props)
        this.state = { hover: {} as Item }
    }

    private onMouseEnter = (text) => (e) => {
        this.setState({ hover: text })
    }

    private onKeyup = (e: React.KeyboardEvent<HTMLTextAreaElement>) => {
        if (e.altKey) {
            const input = document.getElementsByTagName("textarea")[0] as HTMLTextAreaElement
            let text = input.value
            mojis.forEach(item => {
                text = text.replace(`@${item.index}`, item.value)
            })
            input.value = text
            input.select()
            document.execCommand("Copy")

            const { ipcRenderer } = require("electron")
            ipcRenderer.send("cancel")
        }
    }

    private Moji = ({ item }: { item: Item }) =>
        <span style={{
            width: "30px",
            height: "30px",
            fontSize: "25px",
            cursor: "pointer",
            margin: "5px",
            padding: "3px",
            textShadow: this.state.hover === item ? "4px 4px 4px #000000" : "2px 2px 4px #000000"
        }}
            onMouseEnter={this.onMouseEnter(item)} key={item.index}>
            <div style={{
                display: "inline-block",
            }}>
                {item.value} {item.index}
            </div>
        </span>

    private MojiContainer = ({ items }) =>
        <div style={{
            margin: "2px",
            height: "250px"
        }}>
            {items.map(x => <this.Moji item={x} />)}
        </div>

    private InputContainer = () =>
        <div style={{
            width: "100%",
            background: "green"
        }}>
            <textarea style={{
                padding: "8px",
                height: "calc(100% - 250px)",
                fontSize: "25px",
                width: "100%",
                fontFamily: "NewRocker",
                color: "Fuchsia",
                border: "1px solid grey",
                boxSizing: "border-box",
                textShadow: "1px 1px 1px grey",
                boxShadow: "1px 1px 1px grey"
            }}
                onKeyUp={this.onKeyup}
                autoFocus={true} />
        </div>

    public render() {
        return (
            <div>
                <this.MojiContainer items={mojis} />
                <this.InputContainer />
            </div>
        )
    }
}

const el = document.getElementById("root")
ReactDOM.render(<App />, el)