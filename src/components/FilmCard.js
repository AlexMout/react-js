import React, { Component } from 'react'

//import picture from './img/paris.jpg'

import './FilmCard.css'

class FilmCard extends Component {

    // THIS COMPONENT TAKES A 'data' object as "props"

    //Principal data sent by the OMDb API : 

    /*
    {
        "Title" : string
        "Year" : string
        "Rated" : string
        "Released" : string 
        "Runtime" : string 
        "Genre" : string
        "Director" : string 
        "Writer" : string 
        "Actors" : string
        "Plot" : string
        "Language" : string
        "Awards" : string
        "Poster" : string
        
    }
    */


    render() {

        const film = this.props.data

        return (
            <div className="card horizontal" style={ { margin: 'auto' } }>
                <div className="card-image">
                <img alt="city" src={ film.Poster } />
                </div>
                <div className="card-stacked">
                    <div className="card-content">

                        <div className="weather-data">
                            <h3>Informations</h3>
                            <p>
                                <i className="material-icons">info</i>
                                Durée : 
                                <span>{ film.Runtime }</span>
                            </p>
                            <p>
                                <i className="material-icons">info</i>
                                Date de sortie :  
                                <span>{ film.Released }</span>
                            </p>
                            <p>
                                <i className="material-icons">info</i>
                                Genre :  
                                <span>{ film.Genre }</span>
                            </p>
                            <p>
                                <i className="material-icons">info</i>
                                Réalisateur : 
                                <span>{ film.Writer }</span>
                            </p>
                            <p>
                                <i className="material-icons">info</i>
                                Acteurs : 
                                <span>{ film.Actors }</span>
                            </p>
                            <p>
                                <i className="material-icons">info</i>
                                Languages : 
                                <span>{ film.Language }</span>
                            </p>
                            
                        </div>

                        
                    </div>
                    <div className="card-action center-align">
                        <a className="weather-city" href="#" onClick={ e => e.preventDefault() }>{ film.Title}</a>
                    </div>
                </div>
            </div>
        )
    }

}

export default FilmCard