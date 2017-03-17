import * as request from 'request-promise'


/* FREE JSON API EXAMPLE */
/* https://www.apixu.com/api-explorer.aspx */

export const ENDPOINTS = {

    API_URL: 'http://www.omdbapi.com/?t=',
    API_URL2: 'https://bitcoinfees.21.co/api/v1/fees/recommended'
}

/* REQUEST (Promise) DOCUMENTATION */
/* https://github.com/request/request-promise */

export function get( url, queryParameters ) {

    //returns a Promise which can be used with the async - await syntax

    return request.get( {
        json: true,
        uri: url,
        qs: queryParameters
    } )
}