import React, { Component } from 'react'
import {NavLink} from 'react-router-dom'
import FileDrop from 'react-file-drop';

import GridContainer from 'components/Grid/GridContainer';
import GridItem from 'components/Grid/GridItem';
import './CustomFileDrop.css'

function buildFileSelector(){
  const fileSelector = document.createElement('input');
  fileSelector.setAttribute('type', 'file');
  fileSelector.setAttribute('multiple', 'multiple');
  fileSelector.setAttribute('accept', '.pdf');
  return fileSelector;
}

class CustomFileDrop extends Component{

  state = {
    fileName: ""
  }
  componentDidMount(){
    this.fileSelector = buildFileSelector();
    this.fileSelector.addEventListener('change',e => this.handleCloseFileDialog(e));
  }

  handleFileClick = (e) => {
    e.preventDefault();
    this.fileSelector.click();
  }
  handleCloseFileDialog = (e) => {
    if(this.fileSelector.files.item(0) === null)
      return;
    this.setState({fileName: this.fileSelector.files.item(0).name})
  }
  handleFileDrop = (files, event) => {
    if(files.item(0).name.substring(files.item(0).name.length - 4, files.item(0).name.length) === ".pdf")
      this.setState({fileName: files.item(0).name})
  }

  render(){
    let description = "Drag and drop file here";
    if(this.state.fileName !== "")
      description = this.state.fileName;
    return(
      <FileDrop onDrop={this.handleFileDrop}>
      <GridContainer className="filedrop-container">
        <GridItem xs={12} className="document-type">
          {this.props.title}
        </GridItem>
        <GridItem xs={12} className="label-upload-pdf">
          Upload PDF
        </GridItem>
        <GridItem xs={12} >
          <GridContainer className="drop-component-container"> 
            <GridItem xs={12} className="label-drag-and-drop">
              {description}
            </GridItem>
            <GridItem xs={12} className="label-or">
              OR
            </GridItem>
            <GridItem xs={12}>
              <NavLink to="#" className="btn-browse-file" onClick={this.handleFileClick}>
                Browse File
              </NavLink>
            </GridItem>
          </GridContainer>
        </GridItem>
      </GridContainer>
      </FileDrop>
    )
  }
}
export default CustomFileDrop;