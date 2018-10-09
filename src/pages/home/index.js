/**
 *  A component
 */

import React from 'react';
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
import Moment from 'moment';
import firebase from '../../firebase.js';
import ReactTable from 'react-table';
import LoadingScreen from '../../components/LoadingScreen';
import { tableKeys } from '../../constants';

const shipKeys = tableKeys['shipments'];
const receiptKeys = tableKeys['receipts']

const styles = {
  container: {
    flexGrow: 1,
    display: "flex",
    flexDirection: "column",
=======
import {Button} from 'antd';
import Form from 'pages/form';
=======
import Form from '../../pages/form';
import App from '../../app.js'
>>>>>>> 328f6fe... Committing changes made to the form and home pages to help create a form.
=======
=======
>>>>>>> 9e2a758... Committing changes made to the form and home pages to help create a form.
=======
>>>>>>> 622a571... Committing changes made to the form and home pages to help create a form.
import Form from '../../pages/form';
import App from '../../app.js'
=======
import {Button} from 'antd';
<<<<<<< HEAD
import Form from '/pages/form';
>>>>>>> Added absolute path imports
<<<<<<< HEAD
>>>>>>> 3a63214... Added absolute path imports
=======
=======
import Form from 'pages/form';
>>>>>>> altered the homepage
<<<<<<< HEAD
<<<<<<< HEAD
>>>>>>> bdc2165... altered the homepage
=======
=======
>>>>>>> 622a571... Committing changes made to the form and home pages to help create a form.
=======
import Form from '../../pages/form';
import App from '../../app.js'
>>>>>>> Committing changes made to the form and home pages to help create a form.
<<<<<<< HEAD
>>>>>>> 9e2a758... Committing changes made to the form and home pages to help create a form.
=======
import Form from '../../pages/form';
import App from '../../App.js'
>>>>>>> bb95b88... removed merge conflict code
=======
import Forms from '../../pages/form';
import App from '../../App.js';
>>>>>>> 2267fab... Remade basic changes to the form and shipments pages
=======
>>>>>>> 622a571... Committing changes made to the form and home pages to help create a form.
=======
import Form from '../../pages/form';
import App from '../../App.js'
>>>>>>> f9fc80e... removed merge conflict code
=======
import Forms from '../../pages/form';
import App from '../../App.js';
>>>>>>> 5f83b3f... Remade basic changes to the form and shipments pages
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Button, Menu } from 'antd'

const { Header, Content, Footer } = Layout;
=======
import {Button} from 'antd';
import Form from 'pages/form';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
>>>>>>> 01a3fe2... Added a page for forms
=======
=======
>>>>>>> 9f01649... Added absolute path imports
import Form from '../../pages/form';
import App from '../../app.js'
=======
import {Button} from 'antd';
<<<<<<< HEAD
import Form from '/pages/form';
>>>>>>> Added absolute path imports
=======
import Form from 'pages/form';
>>>>>>> altered the homepage
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Button, Menu } from 'antd'

const { Header, Content, Footer } = Layout;
>>>>>>> 5bf22ff... Committing changes made to the form and home pages to help create a form.

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'

  },
  button: {
    alignSelf: 'center',
    color: 'red',
<<<<<<< HEAD
>>>>>>> 65ca915... Added a page for forms
=======
>>>>>>> 01a3fe2... Added a page for forms
  },
};

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      shipData: null,
      receiptsData: null,
      receiptsData: null,
    }
  }

<<<<<<< HEAD
<<<<<<< HEAD
  componentDidMount(){
    var database = firebase.database();

    var shipmentsRef = database.ref('2/shipments')
    shipmentsRef.on('value', (snapshot) => {
      var ship = snapshot.val()
      var filteredShip = []
      for (var i = 0; i < ship.length; i++){
        var entry = ship[i]
        var entryDate = Moment(entry['ship_date'], 'YY-MM-DD:HH:mm')
        if(entryDate >= Moment().add(-10, 'days') && entryDate <= Moment()){
          filteredShip.push(entry)
        }
      }
      this.setState({
        shipData: filteredShip
      })
    });;

    var receiptsRef = database.ref('6/contributions')
    receiptsRef.on('value', (snapshot) => {
      var receipts = snapshot.val()
      var filteredReceipts = []
      for (var i = 0; i < receipts.length; i++){
        var entry = receipts[i]
        var entryDate = Moment(entry['recieve_date'], 'YY-MM-DD:HH:mm')
        if(entryDate >= Moment().add(-10, 'days') && entryDate <= Moment()){
          filteredReceipts.push(entry)
        }
      }
      this.setState({
        receiptsData: filteredReceipts
      })
    });;
=======
=======
>>>>>>> 5bf22ff... Committing changes made to the form and home pages to help create a form.
  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
<<<<<<< HEAD
>>>>>>> 328f6fe... Committing changes made to the form and home pages to help create a form.
=======
>>>>>>> 5bf22ff... Committing changes made to the form and home pages to help create a form.
  }

  render() {
    return(
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
<<<<<<< HEAD
      <div style={styles.container}>
        <p>Welcome to <em>BMAC-Warehouse</em>! Today is {Moment().format('dddd MMMM Do YYYY')}</p>
        <strong>Last 10 days Shipments</strong>

        { !this.state.shipData ? <LoadingScreen/> :
          <ReactTable
            data={this.state.shipData ? this.state.shipData : []}
            columns={shipKeys.map(string => {
                return({
                  Header: string,
                  accessor: string,
                })
            })}
            defaultPageSize={this.state.shipData.length}
            className="-striped -highlight"
            showPagination={false}
          />
        }

        <strong>Last 10 days Receipts</strong>

        { !this.state.receiptsData ? <LoadingScreen/> :
          <ReactTable
            data={this.state.receiptsData ? this.state.receiptsData : []}
            columns={receiptKeys.map(string => {
                return({
                  Header: string,
                  accessor: string,
                })
            })}
            defaultPageSize={this.state.receiptsData.length}
            className="-striped -highlight"
            showPagination={false}
          />
        }

      </div>
=======
=======
>>>>>>> 01a3fe2... Added a page for forms
      <Router>

        <div style={styles.container}>
          This is the home page!

          <Button onClick={this.handleClick} type="primary" style={styles.button}> Forms</Button>
        </div>

        <Content style={styles.content}>

            <Route exact path="/form" component={Form} />

          </Content>
      </Router>
<<<<<<< HEAD
>>>>>>> 65ca915... Added a page for forms
=======
      <div style={styles.container}>
        This is the home page!
        <Router>
            <Layout style ={styles.layout}>
              <Link to="/form">
                <Button onClick={this.handleClick} 
                  type="primary" style={styles.button}> Forms
                </Button>
              </Link>
              <Content style ={styles.content}>
              </Content>
          </Layout>
        </Router>
      </div>
>>>>>>> 997368c... Added absolute path imports
=======
>>>>>>> 01a3fe2... Added a page for forms
=======
      <div style={styles.container}>
        This is the home page!
        <Router>
            <Layout style ={styles.layout}>
              <Link to="/form">
                <Button onClick={this.handleClick} 
                  type="primary" style={styles.button}> Forms
                </Button>
              </Link>
              <Content style ={styles.content}>
              </Content>
          </Layout>
        </Router>
      </div>
>>>>>>> 5878fab... Added absolute path imports
    );
  }
}

export default Home;
