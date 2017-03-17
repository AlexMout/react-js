/* ROOT Component of your App  */

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const APP_TITLE = 'Film documentation & Bitcoin transaction fees indicator Web App '
//update document title (displayed in the opened browser tab)
document.title = APP_TITLE

//web api utils
import { get, ENDPOINTS } from './utils/api'

//components
import FilmCard from './components/FilmCard'
import FeesCard from './components/FeesCard'

class App extends Component {


    constructor( props ) {
        super( props )
        this.state = {
            //Variable for the name of the film and the content of the query
            film: undefined,
            filmName: "",
            //Variable for the second API : (Find all the cinema close to our position in a given radius)
            fees: undefined
        }
    }

    replaceFilm = ( event ) => {
        this.setState( {
            filmName: event.target.value
        } )
    }



    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h1>{ APP_TITLE }</h1>
                    <img src={ logo } className="App-logo" alt="logo" />
                </div>

                <div className="App-content">
                    <div className="center-align">

                        <h2 className="App-title">Looking for movie informations ?</h2>
                        <input type="text" value={ this.state.value } onChange={ this.replaceFilm } defaultValue="Movie title" />

                        <button onClick={ this.fetchMovie } className="waves-effect waves-light btn">
                            Get informations !
                        </button>

                    </div>

                    <div className="row" style={ { marginTop: 20 } } >
                        <div className="col s12 m6 offset-m3">
                            { this.displayMovieInfo() }
                        </div>
                    </div>

                    <div className="center-align">
                        <h2 className="App-title">Looking for the current bitcoin transaction required fees ?</h2>
                        <button onClick={ this.fetchFees } className="waves-effect waves-light btn">
                            Find the current fees !
                        </button>
                    </div>

                    <div className="row" style={ { marginTop: 20 } } >
                        <div className="col s12 m6 offset-m3">
                            { this.displayFeesInfo() }
                        </div>
                    </div>


                </div>

            </div>
        )
    }

    //Appel 1ere API

    fetchMovie = async () => {

        try {
            const film = await get( ENDPOINTS.API_URL + this.state.filmName.replace( " ", "+" ), {
                q: this.state.filmName
            } )
            this.setState( {
                film
            } )
        }
        catch ( error ) {
            console.log( 'Failed fetching data: ', error )
        }
    }

    //Appel deuxième API

    fetchFees = async () => {
        try {
            const fees = await get( ENDPOINTS.API_URL2 , {
                //q: this.state.filmName
            } )
            this.setState( {
                fees
            } )
        }
        catch ( error ) {
            console.log( 'Failed fetching data: ', error )
        }
    }



    displayMovieInfo = () => {
        const film = this.state.film

        if ( film ) {
            return (
                <FilmCard data={ film } />
            )
        }

        return null
    }

    displayFeesInfo = () => {
        const fees = this.state.fees

        if ( fees ) {
            return (
                <FeesCard data={ fees } />
            )
        }
        return null
    }

}

export default App
