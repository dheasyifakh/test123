import React, {Component} from 'react';
import {Editor, EditorState} from 'draft-js';

class AddPost extends Component{
    constructor(props){
        super(props);
        this.state={
            editorState : EditorState.createEmpty()
        }
    }

    updateEditorState(editorState){
        this.setState({editorState})
    }

    render(){
        return(
            <div>
                <Editor
                    placeholder="Explore in here.."
                    editorState={this.state.editorState}
                    onChange={this.updateEditorState.bind(this)}
                />
            </div>
        )
    }
}

export default AddPost;