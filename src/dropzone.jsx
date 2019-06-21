import React,{Component} from "react";
import Dropzone from "react-dropzone";
import { uniqBy } from "ramda";
import styled from "styled-components";

const DZ = styled(Dropzone)`
  padding: 20px;
  border: 2px dotted gray;
  &.active {
    border-color: lime;
  }
  &.reject {
    border-color: red;
  }
`;
DZ.defaultProps = {
  activeClassName: "active",
  rejectClassName: "reject"
};

export default class DropzoneTest extends Component {
  state = { accepted: [], dragOverStatus: null };
  ref = React.createRef();

  onDrop = accepted => {
    this.setState(state => ({
      accepted: uniqBy(this.getFileKey, state.accepted.concat(accepted))
    }));
  };

  getFileKey = f => `${f.name}_${f.size}`;

  componentWillUnmount() {
    this.state.accepted.forEach(f => {
      window.URL.revokeObjectURL(f.preview);
    });
  }

  render() {
    return (
      <section>
        <div className="dropzone">
          <DZ
            ref={this.ref}
            accept="image/jpeg, image/png"
            onDrop={this.onDrop}
            onDragOver={(...args) => {
              console.log("onDragOver args", [...args]);
            }}
          >
            <p>
              Try dropping some files here, or click to select files to upload.
            </p>
          </DZ>
          <button
            type="button"
            onClick={() => {
              this.ref.current.open();
            }}
          >
            Open File Dialog
          </button>
        </div>
        <aside>
          <h2>Dropped files</h2>
          <ul>
            {this.state.accepted.map(f => (
              <li key={f.name}>
                <img src={f.preview} style={{ height: 50 }} />
                {f.name} - {f.size} bytes
              </li>
            ))}
          </ul>
        </aside>
      </section>
    );
  }
}