import React, { Component } from 'react'
import axios from 'axios'


const FilmesApi = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie/550?api_key=52460cb453458e84f6b577c430c6eaf8'
})

export default class movies extends Component {
  render() {
    return (
        <div>
            
        </div>
    )
  }
}
