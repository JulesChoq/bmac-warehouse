/**
 *  A component
 */

import React from 'react';
import AuthenticationProtect from "../../components/AuthenticationProtect.js";

const styles = {
  container: {
  },
};

class About extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div style={styles.container}>
        <AuthenticationProtect/>
        Hello there! This is the about page!
      </div>
    );
  }
}

export default About;
