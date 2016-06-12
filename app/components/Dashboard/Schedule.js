import React from 'react';
import Period from './Period';
import actions from '../../actions/index';
export default class Schedule extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }

    findCourseByPeriod(day, time) {
        var {courses} = this.props, result;

        courses.forEach((course, index)=> {
            var {periods} = course;
            periods.forEach((period) => {
                
                let periodDay = parseInt(period.day);
                let start = parseInt(period.start);
                let end = parseInt(period.end);
                if(day === periodDay && time >= start && time < end){
                    result = course;
                }
            });
        });

        return result;

    }

    buildSchedule () {

        var {compact} = this.props;
        var rows = {

        };

        for(let day = 1; day <=6;day++){


            for(let time = 8; time < 23;time++){
                this.findCourseByPeriod(day, time);
            }
        }

        for(let time = 8; time < 18;time++){
            let formatedTime = formatTime(time, compact);
            rows[time] = [<td key={time} class="elipsis">{formatedTime}</td>];
            for(let day = 1; day <=6;day++) {
                let course = this.findCourseByPeriod(day, time);
                rows[time].push(<Period key={day+time} course={course} compact={compact}/>);
            }
        }

        var table = (
            <table className=" table table-bordered">
                <thead>
                    <tr>
                        <th></th>
                        <th class="elipsis">{(compact)? 'M': 'Monday'}</th>
                        <th class="elipsis">{(compact)? 'T': 'Tuesday'}</th>
                        <th class="elipsis">{(compact)? 'W': 'Wednesday'}</th>
                        <th class="elipsis">{(compact)? 'T': 'Thursday'}</th>
                        <th class="elipsis">{(compact)? 'F': 'Friday'}</th>
                        <th class="elipsis">{(compact)? 'S': 'Saturday'}</th>
                    </tr>
                </thead>
                <tbody>
                {
                    Object.keys(rows).map((key)=>{
                        return (
                            <tr key={key}>
                                {rows[key]}
                            </tr>
                        );
                    })
                }
                </tbody>
            </table>
        );

        return table;


    }

    render() {


        return (
            <div className="col-lg-12 schedule">
                <div className="row">
                    {this.buildSchedule()}
                </div>
            </div>
        );
    }
}

function formatTime(time, compact) {
    var start = time;
    var end = time+1;

    return timeConvert(start, compact) + ' - ' + timeConvert(end, compact);
}

function timeConvert(time, compact) {
    var amOrPm = (time > 12)? 'pm' : 'am';
    var result = String((time + 11) % 12 + 1);
    if(!compact) {
        result += ' ' +amOrPm;
    }
    return result;
}