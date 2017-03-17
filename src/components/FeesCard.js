import React, { Component } from 'react'

import './FeesCard.css'

class FeesCard extends Component {

    // THIS COMPONENT TAKES A 'data' object as "props"

    //Principal data sent by the bitcoinfee API : 

    /*
    { "fastestFee": integer,
      "halfHourFee": integer,
       "hourFee": integer
    }
    */


    render() {

        const fees = this.props.data

        var feesBTC = [fees.fastestFee,fees.halfHourFee,fees.hourFee]

        function convertSatoIntoBTC(n){
            return n*0.00000001
        }

        //using MAP function : 
        feesBTC = feesBTC.map(convertSatoIntoBTC)

        //using FILTER function :
        function feeMax(value){
            //Thresold given by hand
            return value <=0.00000200
        }
        
        var feesLessThan200 = feesBTC.filter(feeMax)
        //If the array contains at least 1 value, the transaction is possible
        var transactionPossible = "Transaction possible"

        
        if (feesLessThan200.length ==0){
            transactionPossible = "Transaction impossible"
        }

        return (
            <div className="card horizontal" style={ { margin: 'auto' } }>
                <div className="card-image">
                <img alt="city" className="fees-icon" src="https://bitcoin.org/img/icons/opengraph.png" />
                </div>
                <div className="card-stacked">
                    <div className="card-content">

                        <div className="fees-data">
                            <h3 className="fees-title">Informations</h3>
                            <p>
                                <i className="material-icons">info</i>
                                Fastest transaction :
                                <br/>
                                <span>{ fees.fastestFee } satoshis</span>
                                <br/>
                                Equals : 
                                <span>{ feesBTC[0].toFixed(8) } BTC</span>
                            </p>

                            <p>
                                <i className="material-icons">info</i>
                                30 min transaction delay:  
                                <br/>
                                <span>{ fees.halfHourFee } satoshis</span>
                                <br/>
                                Equals : 
                                <span>{ feesBTC[1].toFixed(8) } BTC</span>
                            </p>

                            <p>
                                <i className="material-icons">info</i>
                                60 min transaction delay: 
                                <br/>
                                <span>{ fees.hourFee } satoshis</span>
                                <br/>
                                Equals : 
                                <span>{ feesBTC[2].toFixed(8) } BTC</span>
                            </p>   

                            <p>
                                <i className="material-icons">info</i>
                                Transaction possible under 200 satoshis ?
                                <br/>
                                Equals : 
                                <span>{ transactionPossible }</span>
                            </p>    
                        </div>

                    </div>
                    <div className="card-action center-align">
                        <a className="fees-city" >Current transaction fees</a>
                    </div>
                </div>
            </div>
        )
    }

}

export default FeesCard