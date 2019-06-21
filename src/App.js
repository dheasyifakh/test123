import React from 'react';
import {Button, Collapse} from 'react-bootstrap';
import './App.css';
import Main from './view/test'
import {Scrollbars} from 'react-custom-scrollbars';
import FeatherIcon from 'feather-icons-react';
import Dropzone from 'react-dropzone';

class App extends React.Component{
  // constructor(props, context) {
  //   super(props, context);

  //   this.state = {
  //     open: false,
  //   };
  // }
  // constructor() {
  //   super();
 
  //   // this.state = {
  //   //   icon: 'x'
  //   // };
  // }
  // // toggleIcon = (icon) => {
  // //   this.setState({
  // //     icon
  // //   });
  // //}
  // onDrop = (acceptedFiles) => {
  //   console.log(acceptedFiles);
  // }
  
  render(){
    return (
      <div>
        {/* <Dropzone onDrop={this.onDrop}>
          {({getRootProps, getInputProps}) => (
            <div {...getRootProps()}>
              <input {...getInputProps()} />
              Click me to upload a file!
            </div>
          )}
        </Dropzone>
        <ul className="list-group mt-2">
  {acceptedFiles.length > 0 && acceptedFiles.map(acceptedFile => (
    <li className="list-group-item list-group-item-success">
      {acceptedFile.name}
    </li>
  ))}
</ul> */}

        {/* <Button
            onClick={() => this.setState({ open: !open })}
            aria-controls="example-collapse-text"
            aria-expanded={open}
          >
            click
          </Button>
          <Collapse in={this.state.open}>
            <div id="example-collapse-text">
              Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus
              terry richardson ad squid. Nihil anim keffiyeh helvetica, craft beer
              labore wes anderson cred nesciunt sapiente ea proident.
            </div>
          </Collapse> 
          <Scrollbars style={{width: 500, height: 300}}>
            <p>Some great content...</p>
            
          </Scrollbars>
          
           <FeatherIcon icon={icon} />
        <ul>
          <li>
            <button onClick={() => this.toggleIcon('x')}>
              Make the Icon an X
            </button>
          </li>
          <li>
            <button onClick={() => this.toggleIcon('anchor')}>
              Make the Icon an Anchor
            </button>
          </li>
          <li>
            <button onClick={() => this.toggleIcon('box')}>
              Make the Icon a box
            </button>
          </li>
        </ul> */}

      </div>
    );
  }
}

export default App;
