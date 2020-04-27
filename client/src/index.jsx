import React from 'react';
import ReactDOM from 'react-dom';
import $ from 'jquery';
import Registration from './components/Registration.jsx';

class App extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        user: {
          name: 'placeholder'
        },
        displayText: false
      }
    }

    componentDidMount() {
      console.log('componentDidMount()');

    }

    sendRegistration(event) {
      event.preventDefault();

      var newUser = {
        name: event.target[0].value,
        password: event.target[1].value,
        email: event.target[2].value,
      }

      $.ajax({
        type: 'POST',
        url: '/create',
        data: newUser

      }).then(() => {
        console.log('then');
        this.setState({
          user: newUser,
          displayText: true
        })

      }).catch((err) => {
        console.log('caught err');
        console.log(err);
      });

      // console.log('sendRegistration()');
      // console.log(event.target[0].name + ' ' + event.target[0].value);
      // console.log(event.target[1].name + ' ' + event.target[1].value);
      // console.log(event.target[2].name + ' ' + event.target[2].value);
    }

    render () {

      // conditional rendering
      if (this.state.displayText) {
        var newUserDisplay = 'User ' + this.state.user.name + ' has been created!!!';
      }

      return (
      <div>

        {newUserDisplay}
        <Registration sendRegistration={this.sendRegistration.bind(this)} />
      </div>
      )
    }
  }

  ReactDOM.render(<App />, document.getElementById('app'));