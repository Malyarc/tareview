import React from 'react';

class Registration extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return(

        <div>
          <form onSubmit={(event) => this.props.sendRegistration(event)}>
            <label>
              Name:
              <input type="text" name="name" />
            </label>

            <label>
              Email:
              <input type="text" name="email" />
            </label>

            <label>
              Password:
              <input type="text" name="password" />
            </label>
            <input type="submit" value="Submit"/>
          </form>
        </div>

        );
    }


};

export default Registration;