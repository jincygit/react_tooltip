// -----------------------------------Tooltip Component---------------------------
// ----------------Importing React,& files from component----------------
import React, { Component } from 'react';
import './tool.css';


class Tool extends Component {
    render() {
        const {showToolTip , position} = this.props.state;
        const {changeShowToolTip} = this.props;
        
        return (
            <div>
                {/* On hovering of the button it should show a tooltip. */}

                <div className="tool-button" onMouseEnter={()=>changeShowToolTip("enter")} onMouseLeave={()=>changeShowToolTip("leave")} >
                    { <div className="button-info">Hover over me!</div>          /*-- button --*/}
                </div>
                {/* According to the position the tooltip should render at that position */}
                {
                    showToolTip
                    ?<div className= {`box-${position} arrow-${position}`}>I am a Tooltip.</div>   /*-- ToolTip --*/
                    :null
                }
            </div>
        
        );
    }
}

export default Tool;