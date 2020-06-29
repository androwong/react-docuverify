import React, { Component } from 'react'
import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import {Input, Button} from '@material-ui/core';
import './LoginForm.css'
class LoginForm extends Component{

  handleClickLogin = () => {
    this.props.handleLogin();
  }

  render(){
    return(
    <GridContainer className="modal-container">
      <GridItem xs={3} className="model-label-container margin">
        Email:
      </GridItem>
      <GridItem xs={9} className="margin">
        <Input
          fullWidth={true}
          type="text"
        />
      </GridItem>
      <GridItem xs={3} className="model-label-container margin">
        Password:
      </GridItem>
      <GridItem xs={9} className="margin">
        <Input
          fullWidth={true}
          type="password"
        />
      </GridItem>
      <GridItem xs={12}>
        <GridContainer>
          <GridItem xs={8}></GridItem>
          <GridItem xs={2}>
            <Button onClick={this.handleClickLogin}>
              Login
            </Button>
          </GridItem>
          <GridItem xs={2}>
            <Button color="info" onClick={this.handleClickLogin}>
              Cancel
            </Button>
          </GridItem>
        </GridContainer>
      </GridItem>
    </GridContainer>
  );}
}
export default LoginForm;