import React, { Component } from 'react';
import './MemoryCard.css'

class MemoryCard extends Component {
    constructor(){
        super();
        this.state = {
            isFlipped: false
        };
    }

    
    render(){

        let memoryCardInnerClass = 'MemoryCardInner';

        if(this.state.isFlipped === true){
            memoryCardInnerClass = 'MemoryCardInner flipped'
        }

        return(
            <div className="MemoryCard" onClick={()=>{
                this.setState(
                    {isFlipped: !this.state.isFlipped}
                    )
                }}>
                
                <div className = {memoryCardInnerClass}>

                    <div className="MemoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png"/>
                    </div>

                    <div className="MemoryCardFront">
                    ∆
                    </div>

                </div>
            </div>
        )
    }
}


export default MemoryCard;