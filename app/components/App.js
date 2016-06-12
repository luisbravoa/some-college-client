import React from 'react';
import Login from './Login';
export default
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        const {loading} = this.props;

        var content;
        if (loading === true) {
            content = (<div id="loaderWrapper"><img id="loader" src="images/loader.gif"/></div>);
        } else {
            content = (
                <Login/>
            );
        }


        return (
            <div>
                
                {content}
            </div>
        );
    }
}