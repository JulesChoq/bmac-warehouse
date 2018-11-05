/**
 *  A component
 */

import React from 'react';
import Forms from '../../pages/form';
import App from '../../App.js';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import { Layout, Button, Menu } from 'antd'

const { Header, Content, Footer } = Layout;

const styles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    flexDirection: 'row'

  },
  button: {
    alignSelf: 'center',
    color: 'red',
  },
};

class Home extends React.Component {
  constructor(props){
    super(props);
    this.state = {
    }
  }

  handleClick = (e) => {
    console.log('click ', e);
    this.setState({
      current: e.key,
    });
  }

  render() {
    return(
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
    );
  }
}

export default Home;
