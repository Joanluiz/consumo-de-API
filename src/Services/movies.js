import React, { Component } from 'react';
import axios from 'axios'

const FilmesApi = axios.create({
    baseURL:'https://api.themoviedb.org/3/movie/popular?api_key=52460cb453458e84f6b577c430c6eaf8&language=pt-BR&page=1'
})


class Movies extends Component {
state={
    movies:[]
}

componentDidMount(){
    this.getMovies()
}

getMovies = async () => {
  const resposta = await FilmesApi.get();

  const AllFilmes = resposta.data.results.map((item) => {
    return {
      ...item,
      nome:item.original_title
    }
  })

  this.setState({
    movies: AllFilmes
  });
}

  render() {
    return (
        <div>
            {this.state.movies.map((item) => (
            <ul>
              <li>{item.nome}</li>
              <li>{item.overview}</li>
            </ul>
            ))}
        </div>
      );
  }
}

export default Movies;