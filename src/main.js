$ = jQuery      = require('jquery');
const React     = require("react");
const ReactDOM  = require("react-dom");
const Router    = require('react-router-dom').BrowserRouter;
const Header    = require("./components/common/Header.jsx");
const Body      = require("./components/common/Body.jsx");

class App extends React.Component {
    constructor(props){
        super(props);
    }

    render() {
        return (
            <Router>
                <div>
                    <Header />
                    <Body />
                </div>
            </Router>
        );
    }
}

ReactDOM.render(<App />, document.getElementById("app"));



