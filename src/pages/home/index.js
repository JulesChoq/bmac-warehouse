/**
 *  A component
 */

import React from 'react';
import TableDropdown from '../../components/TableDropdown.js';

const styles = {
  container: {
  },
};

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <div style={styles.container}>
        This is the DOME page!
        <TableDropdown/>
      </div>
    );
  }
}

export default Home;
