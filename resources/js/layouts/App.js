import React from 'react';
import ReactDOM from 'react-dom';
import ScriptTag from 'react-script-tag';
import '../../css/siteground-optimizer-combined.css';
import '../../css/style.css';
import '../../fonts/latin.css';
import '../../fonts/roboto.css';

function Javascript (props) {
    <ScriptTag type="text/javascript" src="js/themes/popper.minab7d.js"/>
}



function App() {
    return (
        <Header>
            <p>Test</p>
        </Header>
    );
}

export default App;

if (document.getElementById('app')) {
    ReactDOM.render(<App />, document.getElementById('app'));
}