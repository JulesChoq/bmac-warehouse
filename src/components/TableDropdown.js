/**
 *  A component
 */

import React from 'react';
import ReactTable from 'react-table';
import "react-table/react-table.css";

const styles = {
  container: {
  },
};

    const data = [
      {
        name: 'Ben Limpenis',
        age: 12,
      },
      {
        name: 'Jules Chopenis',
        age: 8,
      },
      {
        name: 'Rajesh Narapenis',
        age: 70,
      }      
    ];

  const columns = [{
    Header: 'Name',
    accessor: 'name'
  }, {
    Header: 'Age',
    accessor: 'age'
  }]

class TableDropdown extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  render() {
    return(
      <ReactTable
        data={data}
        columns={columns}>
      </ReactTable>
    );
  }
}

export default TableDropdown;
