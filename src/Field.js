import React from "react";
import ReactDOM from 'react-dom';
import './Field.css'

class Field extends React.Component{
    constructor(props){
        super(props);

    };

    render(){
        var imagePath=this.props.fieldPictureUrl;
        return(
            <button className="field" 
            style={{backgroundImage:imagePath}}
            onClick={this.props.onClick}
            onContextMenu={this.props.onContextMenu}
            onMouseDown={this.props.onMouseDown}
            />


           
        )
    }
    
} 
export default Field;

