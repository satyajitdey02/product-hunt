import React, {Component} from "react";

export default class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      userName: '',
      password: ''
    }
  }

  handleChange = (event) => {
    console.log(event.target.name);
    if (event.target.name === 'userName') {
      this.setState({userName: event.target.value});
    } else if (event.target.name === 'password') {
      this.setState({password: event.target.value});
    }
  };

  handleSubmit = (event) => {
    const {onLogin} = this.props;
    event.preventDefault();
    console.log(this.state.userName);
    onLogin({userName: this.state.userName});
  };

  render() {
    return (
        <div className="modal">
          <div className="login-form-container">
            <form onSubmit={this.handleSubmit} className="container">
              <div className="row user-name">
                <input className="col-md-12"
                       type="text"
                       name={'userName'}
                       placeholder={'Enter User Name'}
                       value={this.state.userName}
                       onChange={this.handleChange}
                />
              </div>

              <div className="row password">
                <input className="col-md-12"
                       type="password"
                       name={'password'}
                       placeholder={'Enter Password'}
                       value={this.state.password}
                       onChange={this.handleChange}
                />
              </div>
              <div className="row btn-login">
                <input className="ml-auto" type={'submit'} value={'Login'}/>
              </div>
            </form>
          </div>
        </div>
    );
  }
}