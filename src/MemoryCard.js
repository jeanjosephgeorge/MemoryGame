import React, { Component } from 'react';
import './MemoryCard.css'

class MemoryCard extends Component {

    render(){

        let memoryCardInnerClass = 'MemoryCardInner';

        if(this.props.isFlipped){
            memoryCardInnerClass = 'MemoryCardInner flipped'
        }

        return(
            <div className="MemoryCard" onClick={this.props.pickCard}>
                
                <div className = {memoryCardInnerClass}>
                    <div className="MemoryCardBack">
                        <img src="https://www.digitalcrafts.com/img/DigitalCrafts-Logo-Wrench.png" alt="This is a logo!" />
                    </div>

                    <div className="MemoryCardFront">
                    {this.props.symbol}
                    </div>

                </div>
            </div>
        )
    }
}


export default MemoryCard;