import React from 'react';
import actions from '../../actions/index';
export default class CourseList extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {
        var {courses} = this.props;
        return (
            <div id="courseList">
                <ul>
                    {
                        courses.map((course)=> {
                            return (
                                <li key={course.id}>
                                    <a href="#" onClick={(e)=>{
                                            e.preventDefault();
                                            actions.showCourse(course.id);
                                        }}>{course.name}</a>
                                </li>
                            );
                        })
                    }
                </ul>
            </div>
        );
    }
}