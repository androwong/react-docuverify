import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import './UploadDocument.css'
import CustomFileDrop from '../../components/CustomFileDrop/CustomFileDrop';
class UploadDocument extends Component {
  render(){
    return(
      <GridContainer className="body">
        <GridItem xs={false} className="page-header">
          <GridContainer>
          <GridItem xs={6} className="logo-container">
            Docu <span className="text-underline">Verify</span>
          </GridItem>
          <GridItem xs={6}>
            <GridContainer className="button-container">
              <img src="/assets/images/iconPower.png"/>
              <NavLink  className="button-logoff" to="#" >
                Logoff
              </NavLink>
            </GridContainer>  
          </GridItem>
          </GridContainer>
        </GridItem>
        <GridItem className="upload-content">
        <GridContainer className="space-between">
          <GridItem className="grid-left-part border-grey">
            <CustomFileDrop title="Purchase Order"/>
          </GridItem>
          <GridItem className="grid-left-part border-grey">
            <CustomFileDrop title="Proposal Document" />
          </GridItem>
        </GridContainer>
        <GridContainer className="justify-center">
          <GridItem className="button-submit-container">
            <NavLink className="button-submit" to="#" >
                Submit
            </NavLink>
          </GridItem>
        </GridContainer>
        <GridContainer className="space-between">
          <GridItem className="grid-left-part display-flex justify-right">
            <div className="font-26 display-flex flex-column">
              <GridItem xs={12}>
                PO Number: <span className="color-green">Yes</span>
              </GridItem>
              <GridItem xs={12}>
                PO Date: <span className="color-green">Yes</span>
              </GridItem>
              <GridItem xs={12}>
                CNPJ: <span className="color-green">Yes</span>
              </GridItem>
              <GridItem xs={12}>
                Customer Address: <span className="color-green">Yes</span>
              </GridItem>
              <GridItem xs={12}>
                Customer State: <span className="color-green">Yes</span>
              </GridItem>
            </div>
          </GridItem>
          <GridItem className="grid-left-part padding-75">
            <GridContainer className="font-26">
              <GridItem xs={12}>
                <span className="font-light">PO Number: </span><span className="color-green">Yes</span>
              </GridItem>
              <GridItem xs={12}>
              <span className="font-light">PO Date: </span><span className="color-green">Yes</span>
              </GridItem>
              <GridItem xs={12}>
              <span className="font-light">CNPJ: </span><span className="color-green">Yes</span>
              </GridItem>
              <GridItem xs={12}>
              <span className="font-light">Customer Address: </span><span className="color-green">Yes</span>
              </GridItem>
              <GridItem xs={12}>
              <span className="font-light">Customer State: </span><span className="color-green">Yes</span>
              </GridItem>
            </GridContainer>
          </GridItem>
        </GridContainer>
        <GridContainer className="justify-center">
          <GridItem className="footer-label">
            Proposal date within range of PO date range
          </GridItem>
        </GridContainer>
        </GridItem>
      </GridContainer>
    )
  }
}
export default UploadDocument;