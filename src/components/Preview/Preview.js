import * as React from "react";
import  styles from  './Preview.css';
const marked = require('marked');


const Preview = (props) =>{
        return(
        <div>
            <nav id="preview-nav"><i className="fas fa-file-code" style={{marginRight : 10}}></i><strong>Preview</strong></nav>
            <div id='preview' dangerouslySetInnerHTML={{__html: marked(props.text)}} />
        </div>
        );
}
export default Preview;