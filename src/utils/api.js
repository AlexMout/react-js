import * as request from 'request-promise'


/* FREE JSON API EXAMPLE */
/* https://www.apixu.com/api-explorer.aspx */

export const ENDPOINTS = {

    API_URL: 'http://www.omdbapi.com/?t='

}

/* REQUEST (Promise) DOCUMENTATION */
/* https://github.com/request/request-promise */

export function get( url, queryParameters ) {

    //returns a Promise which can be used with the async - await syntax

    return request.get( {
        json: true,
        uri: url,
        qs: queryParameters
    })
}