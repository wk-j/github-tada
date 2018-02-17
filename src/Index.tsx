import * as React from "react"
import * as ReactDOM from "react-dom"

class App extends React.Component<{}, {}> {
    public render() {
        return (
            <h1>Hello</h1>
        )
    }
}

const el = document.getElementById("root")
ReactDOM.render(<App />, el)
