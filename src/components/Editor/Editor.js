import * as React from "react";
import  styles from  './editor.css';

const Editor = (props) =>{
    return(
        <div>
            <nav id="editor-nav"><i className="fas fa-edit" style={{marginRight : 10}}></i><strong>Editor</strong></nav>
        <textarea id="editor" value={props.markdown} onChange={props.handleChange} />
        </div>
    );
}
export default Editor;
