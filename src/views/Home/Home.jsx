import React, {Component} from 'react';
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import {withStyles, Modal} from '@material-ui/core'
import { NavLink, Redirect  } from 'react-router-dom'
import './home.css'
import homeStyle from './homeStyle'
import LoginForm from 'components/LoginForm/LoginForm';
const modalStyle = {
  top: '40%',
  left: '35%',
  width: '35%',
}

class Home extends Component {

  state = {
    isLoginModalOpened: false,
    redirect: false,
  }
  handleClickLogin = () => {
    this.setState({isLoginModalOpened: true});
  }

  handleCloseLoginForm = (data) => {
    this.setState({isLoginModalOpened: false, redirect: true});
    if(data == null)
      return;
  }

  handleClickRegister = () => {

  }
  
  renderRedirect = () => {
    if(this.state.redirect)
      return <Redirect to='/upload' />
  }

  render(){
    const {isLoginModalOpened} = this.state;
    return (
      <GridContainer className="body">
        {this.renderRedirect()}
        <GridItem xs={false} className="page-header">
          <GridContainer>
          <GridItem xs={6} className="logo-container">
            Docu <span className="text-underline">Verify</span>
          </GridItem>
          <GridItem xs={6}>
            <GridContainer className="button-container">
              <NavLink  className="button-login" to="#" onClick={this.handleClickLogin}>
                Login
              </NavLink>
              <NavLink  className="button-register" to="#" >
                Register
              </NavLink>
            </GridContainer>  
          </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem className="page-content">
        <GridContainer className="content-container">
          <GridItem className="label-container">
              The HP document verification platform
          </GridItem>
        </GridContainer>
        </GridItem>
        <Modal
          open={isLoginModalOpened}
          onClose={this.handleCloseLoginForm}
          disableAutoFocus={true}
          style={modalStyle}
          >
          <LoginForm handleLogin={this.handleCloseLoginForm} />
        </Modal>
      </GridContainer>
    )
  }
}
export default withStyles(homeStyle)(Home);
