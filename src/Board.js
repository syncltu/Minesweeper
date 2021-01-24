import React from "react";
import ReactDOM from 'react-dom';
import Field from './Field';

import MineLogo from './images/flag.png';
import FlagLogo from './images/mine.jpg';
import "./Board.css"


class Board extends React.Component{
    constructor(props){
        super(props);

        this.state={
            fields:Array(9),
            backGroundUrls:Array(9)
        }

        this.setButtonPicture=this.setButtonPicture.bind(this);
    }

    handleLeftMouseClick(i){
        const fields=this.state.fields.slice();


    }

    handleMiddleMouseClick(i){
        const fields=this.state.fields.slice();
        let pictureUrl=`url(${MineLogo})`
        this.setButtonPicture(i,pictureUrl)
    }

    handleRightMouseClick(i){
        const fields=this.state.fields.slice();
        let pictureUrl=`url(${FlagLogo})`
        this.setButtonPicture(i,pictureUrl)
    }
    setButtonPicture(i,url){
        const backGroundUrls=this.state.backGroundUrls.slice();
        backGroundUrls[i]=url;
        this.setState({
            backGroundUrls:backGroundUrls
        });
    }

    renderField(i){

        return(
            <Field
                value={this.state.fields[i]}
                onClick={()=>this.handleLeftMouseClick(i)}
                onContextMenu={()=>this.handleMiddleMouseClick(i)}
                onMouseDown={()=>this.handleRightMouseClick(i)}
                fieldPictureUrl={this.state.backGroundUrls[i]}
            />
        );
    }

    render(){
        let status;
        return(
            
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {this.renderField(0)}
                    {this.renderField(1)}
                    {this.renderField(2)}
                </div>
                <div className="board-row">
                    {this.renderField(3)}
                    {this.renderField(4)}
                    {this.renderField(5)}
                </div>
                <div className="board-row">
                    {this.renderField(6)}
                    {this.renderField(7)}
                    {this.renderField(8)}
                </div>

            </div>
        )
    }
}
export default Board