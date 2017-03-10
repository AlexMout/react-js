/* ROOT Component of your App  */

import React, { Component } from 'react'
import logo from './logo.svg'
import './App.css'

const APP_TITLE = 'Film documentation App'
//update document title (displayed in the opened browser tab)
document.title = APP_TITLE

//web api utils
import { get, ENDPOINTS } from './utils/api'

//components
import FilmCard from './components/FilmCard'

class App extends Component {

    /* React state initialization DOCUMENTATION : https://facebook.github.io/react/docs/react-without-es6.html#setting-the-initial-state */

    constructor( props ) {
        super( props )
        this.state = {
            film: undefined,
            filmName: ""
        }
    }

    replaceFilm = (event) => {
        this.setState({ 
            filmName: event.target.value
        })
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
                        
                        <h1>Indicate the name of a movie below :</h1>
                        <input type="text" value={this.state.value} onChange={this.replaceFilm} />
     
                        <button onClick={ this.fetchWeather } className="waves-effect waves-light btn">
                            Get informations !
                        </button>

                    </div>

                    <div className="row" style={ { marginTop: 20 } } >
                        <div className="col s12 m6 offset-m3">
                            { this.displayWeatherInfo() }
                        </div>
                    </div>
                </div>

            </div>
        )
    }


    //method triggered by onClick event of the "Weather?" button
    /* Arrow function syntax used for Autobinding, see details here : https://facebook.github.io/react/docs/react-without-es6.html#autobinding */
    fetchWeather = async () => {

        /* ASYNC - AWAIT DOCUMENTATION : https://developer.mozilla.org/fr/docs/Web/JavaScript/Reference/Op%C3%A9rateurs/await */

        try {
            const film = await get( ENDPOINTS.API_URL + this.state.filmName.replace(" ","+"), {
                q: this.state.filmName
            })

            /* React state DOCUMENTATION : https://facebook.github.io/react/docs/lifting-state-up.html */

            this.setState( {
                film
            })
        }
        catch ( error ) {
            console.log( 'Failed fetching data: ', error )
        }

    }
    

    //handle display of the received weather object
    displayWeatherInfo = () => {
        const film = this.state.film

        if ( film ) {
            return (
                <FilmCard data={ film } />
            )
        }

        return null
    }

}

export default App
