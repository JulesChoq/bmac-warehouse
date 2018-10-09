/**
 *  A component
 */

import React from 'react';
import firebase from '../../firebase.js';
import { Form, Icon, Input, Button } from 'antd';
import ReactTable from 'react-table';
import LoadingScreen from '../../components/LoadingScreen';
import { DatePicker } from 'antd';
import Moment from 'moment';
<<<<<<< HEAD
import { tableKeys } from '../../constants';

const keys = tableKeys['shipments'];
=======
import Forms from '../../pages/form';
<<<<<<< HEAD
>>>>>>> aa7286b... made changes to form and shipments page

=======
import Forms from '../form';  
=======
>>>>>>> 377bca0... commit

>>>>>>> 5f83b3f... Remade basic changes to the form and shipments pages

const formItem = Form.Item;
const styles = {
  container: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
  },
};

const { RangePicker } = DatePicker;

class Shipments extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      data: null,
      filteredData: null,
      dateRange: null,
    }
  }

  onDateChange = (dateRange) => {
    var newData = []
    for (var i = 0; i < this.state.data.length; i++){
      var entry = this.state.data[i]
      var entryDate = Moment(entry['ship_date'], 'YY-MM-DD:HH:mm')
      if(entryDate >= dateRange[0] && entryDate <= dateRange[1]){
        newData.push(entry)
      }
    }
    this.setState({
      filteredData: newData,
      dateRange: dateRange,
    }, function () {console.log(this.state.dateRange)})
  }

  componentDidMount(){
    var database = firebase.database();
    var shipmentsRef = database.ref('2/shipments')
    shipmentsRef.on('value', (snapshot) => {
      var ship = snapshot.val()
      this.setState({
        data: ship
      })
    });;
  }

  render() {
    return(
      <div style={styles.container}>
<<<<<<< HEAD
<<<<<<< HEAD

      <Forms/>

        <div>
          <RangePicker onChange={this.onDateChange} />
        </div>

<<<<<<< HEAD
=======
      <Forms/>
      hello
>>>>>>> 5f83b3f... Remade basic changes to the form and shipments pages
=======
        <Forms/>
>>>>>>> 9646359... Form page changes
        { !this.state.data ? <LoadingScreen/> :
=======
        { !this.state.data.length ? <LoadingScreen/> :
>>>>>>> 377bca0... commit
          <ReactTable
            data={this.state.filteredData && this.state.dateRange.length ?
                  this.state.filteredData : this.state.data}
            columns={keys.map(string => {
                return({
                  Header: string,
                  accessor: string,
                })
            })}
            defaultPageSize={10}
            className="-striped -highlight"
          />
        }

      </div>
    );
  }
}

export default Shipments;
