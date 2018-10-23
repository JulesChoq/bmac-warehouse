/**
 *  A component
 */

import React from 'react';
import App from './src/App'

const styles = {
  container: {
  },
};

class Dashboard extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div style={styles.container}>
        <App/>
      </div>
    );
  }
}

export default Dashboard;
