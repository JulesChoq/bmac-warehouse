/**
 *  A component
 */

import React from 'react';
import AuthenticationProtect from "../../components/AuthenticationProtect.js";

const styles = {
  container: {
  },
};

class Help extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div style={styles.container}>
      <AuthenticationProtect/>
        This is the help page!
      </div>
    );
  }
}

export default Help;
