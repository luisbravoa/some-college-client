import React from 'react';
import actions from '../../actions/index';
import Schedule from './Schedule';
import CourseList from './CourseList';

export default class Dashboard extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        var error;

        if (this.props.error) {
            error = (<div className="alert alert-danger" role="alert">
                <strong>Oh snap!</strong> Could not enroll. Looks like you have a conflict with other courses.
            </div>);
        }

        return (
            <div id="dashboard" className="container">
                <div className="row">
                    <div className="col-lg-12 col-md-12 col-sm-12">
                        <div className="row">
                            <h1>Welcome, {this.props.user.name}</h1>
                            {error}
                            <div className="col-lg-9">
                                <h2>Your schedule:</h2>
                                <Schedule courses={this.props.user.courses}/>
                            </div>
                            <div className="col-lg-3">
                                <h2>Available Courses:</h2>
                                <CourseList courses={this.props.courses}/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}