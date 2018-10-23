import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import About from '../pages/about';
import Home from '../pages/home';
import Shipments from '../pages/shipments';
import Receipts from '../pages/receipts';
import Products from '../pages/products';
import Staff from '../pages/staff';
import Providers from '../pages/providers';
import Customers from '../pages/customers';
import Reports from '../pages/reports';
import Help from '../pages/help';
import SignIn from '../components/SignIn';
import SignUp from '../components/SignUp';
import * as routes from '../constants/routes';
import SignOutButton from './SignOut';
import { Layout, Menu, Button } from 'antd';
import firebase from '../firebase';
const { Header, Content, Footer } = Layout;

const pages = {
  home: Home,
  about: About,
  shipments: Shipments,
  receipts: Receipts,
  products: Products,
  staff: Staff,
  providers: Providers,
  customers: Customers,
  reports: Reports,
  help: Help,
  SignIn: routes.SIGN_IN,
  SignUp: routes.SIGN_UP

}

const styles = {
  layout: {
    display: "flex",
    flex: "column",
    minHeight: "100vh",
  },

  header: {
    display: "flex",
    backgroundColor: "white",
    justifyContent: "flex-start",
    alignItems: "center",
    width: "100%",
    borderBottom: "1px solid #EBEDF0",
  },

  footer: {
    width: "100%",
    padding: "1em",
    alignSelf: "flex-end",
    backgroundColor: "white",
    borderTop: "1px solid #EBEDF0",
    fontSize: "small",
    color: "#595959",
    textAlign: "center",
  },

  content: {
    display: "flex",
    flexDirection: "column",
    backgroundColor: "#F0F2F5",
    textAlign: "center",
  },

  menu: {
  },

  title: {
    paddingRight: "50px",
    fontSize: "2em",
  },
}

class App extends Component {
  state = {
    // this should be "home" but currently the app doesn't
    // auto-route to the home page, so for now this is null
    current: null,
  }
  signOut = () => firebase.auth().signOut().then(function() {
    // Sign-out successful.
    alert("Logged out")
  }).catch(function(error) {
    // An error happened.
    alert("not logged out")
  })
  .then(() => {
    console.log(firebase.auth().currentUser)
    
    
  })
  handleClick = (e) => {
    this.setState({
      current: e.key,
    });
  }

  render() {
    return (
      <Router>
        <Layout style={styles.layout}>
          <Header style={styles.header}>

            
            
            <Menu
              onClick={this.handleClick}
              selectedKeys={[this.state.current]}
              mode="horizontal"
              theme="light"
              style={styles.menu}
            >

              {Object.keys(pages).map((name) => {
                 return(
                   <Menu.Item key={name}>
                     <Link to={"/"+name}>
                       {name.charAt(0).toUpperCase() + name.slice(1)}
                     </Link>
                   </Menu.Item>
                 )
              })}
              
            </Menu>
            <Button onClick={this.signOut}>Sign Out</Button>
            
          </Header>

          <Content style={styles.content}>
          <Route exact path="/about" component={About} />
            <Route exact path="/home" component={Home} />
            <Route exact path="/shipments" component={Shipments} />
            <Route exact path="/receipts" component={Receipts} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/staff" component={Staff} />
            <Route exact path="/providers" component={Providers} />
            <Route exact path="/customers" component={Customers} />
            <Route exact path="/reports" component={Reports} />
            <Route exact path="/help" component={Help} />
            <Route exact path={routes.SIGN_UP}component={SignUp}/>
            <Route exact path={routes.SIGN_IN}component={SignIn}/>
          </Content>

          <Footer style={styles.footer}>
            Whitman Capstone Project 2019 <br/>
            Copyright ©2018 Rajesh Narayan, Paul Milloy, Ben Limpich, Jules Choquart, and Pablo Fernandez
          </Footer>

        </Layout>

      </Router>

    );
  }
}

export default App;
