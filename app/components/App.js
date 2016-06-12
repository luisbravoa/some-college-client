import React from 'react';
import Login from './Login';
import Dashboard from './Dashboard/Dashboard';
import Navigation from './Navigation';
import Modal from './Dashboard/Modal';
import Loader from './Loader';
export default
class App extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        const {loading, route, selectedCourseId} = this.props;

        var modal;

        if (selectedCourseId !== undefined) {
            modal = <Modal {...this.props} id={selectedCourseId}/>;
        }

        var content, loader;
        if (loading === true) {
            loader = (<Loader></Loader>);
        }

            
            switch(route){

                case 'dashboard':
                    content = (
                        <div>
                            <Navigation {...this.props}/>
                            <Dashboard {...this.props}/>
                        </div>

                    );
                    break;

                case 'login':
                default:
                    content = (
                        <Login {...this.props}/>
                    );
                    break;
            }



        return (
            <div>
                {loader}
                {content}
                {modal}
            </div>
        );
    }
}