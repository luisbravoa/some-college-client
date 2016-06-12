import React from 'react';
import actions from '../../actions/index';
export default class Period extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    render() {

        var {course, compact} = this.props;
        var className = (course)? 'info': '';
        var title = (course)? course.name: '';
        var content = '';

        if(!compact && course){
            content = <a href="#" onClick={
            (e)=>{
                e.preventDefault();
                actions.showCourse(course.id);
            }
            }>
                {course.name}
            </a>
        }

        return (
            <td className={className + ' elipsis'} title={title}>{content}</td>
        );
    }
}