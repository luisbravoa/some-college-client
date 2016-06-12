import React from 'react';
import actions from '../actions/index';
export default class Login extends React.Component {
    constructor(props) {
        super(props);

        this.state = {};
    }
    onSubmit (e){
        e.preventDefault();
        actions.login(this.refs.email.value, this.refs.password.value);
    }

    render() {

        return (
            <div className="row">
                <div className="col-lg-8 col-lg-push-2">
                    <h1 className="text-center">Please Login To continue</h1>
                    <form className="form-horizontal">
                        <div className="form-group">
                            <label for="inputEmail3" className="col-sm-2 control-label">Email</label>
                            <div className="col-sm-10">
                                <input type="email" className="form-control" id="inputEmail3" placeholder="Email" ref="email"  />
                            </div>
                        </div>
                        <div className="form-group">
                            <label for="inputPassword3" className="col-sm-2 control-label">Password</label>
                            <div className="col-sm-10">
                                <input type="password" className="form-control" id="inputPassword3"
                                       placeholder="Password" ref="password" />
                            </div>
                        </div>
                        <div className="form-group">
                            <div className="col-sm-offset-2 col-sm-10">
                                <button type="submit" className="btn btn-default" onClick={this.onSubmit.bind(this)}>Sign in</button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}