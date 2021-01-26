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
            backGroundUrls:Array(9),
            textValue:"Test"
        }

        this.setButtonPicture=this.setButtonPicture.bind(this);
        this.renderRow=this.renderRow.bind(this);
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
                buttonText={i}
                fieldPictureUrl={this.state.backGroundUrls[i]}
                
            />
        );
    }
    renderRow(membersInRow,fieldCounter){
        var rowMembers=[];
        let fieldNumber=fieldCounter;
        for(var i=0;i<membersInRow;i++){
            rowMembers.push(this.renderField(fieldNumber))
            fieldNumber++;
        }
        return(
            <div className="board-row" onContextMenu={(e)=>e.preventDefault()}>
            {rowMembers}
            </div>
        )
    }
    renderBoard(columnCounter,rowCounter){
        let counter=0;
        var gameBoard=[];
        for (var i=0;i<rowCounter;i++){
            var renderedRow=this.renderRow(columnCounter,counter);
            gameBoard.push(renderedRow);

            counter+=rowCounter;
        }
        return gameBoard;

    }
    render(){
        let status;
        var test2=this.renderBoard(4,4);
        return(
            test2

        )
    }
}
export default Board