import React, {Component} from 'react';
import Movie from './Movie';
import './MovieApp.css'

//클래스 -> 생성자 -> render -> ref -> componentDidMount -> (setState/props 바뀔 때 ->shouldComponentUpdate -> render -> componentDidUpdate) 
// 부모가 나를 없앴을 때 -> componentWillUnmount -> 소멸


// Render : componentWillMount() -> render() -> componentDidMount()

// Update componentWillReceiveProps() -> shouldComponentUpdate() == true -> componentWillUpdate() -> render() -> componentDidUpdate()

const movieTitles = [
    "Whiplash",
    "About Time",
    "Gok-sung",
    "Parasite"
]

const movieImages= [
    "https://i.ytimg.com/vi/_c1NJQ0UP_Q/maxresdefault.jpg",
    "https://i.ytimg.com/vi/JilHZ_DdBYg/maxresdefault.jpg",
    "https://www.chimpstickers.com/wp-content/uploads/2017/11/expression007-hi.png",
    "http://clipart-library.com/data_images/78429.png"
]

const movies =[
    {
        title : "Hi",
        poster : "https://i.ytimg.com/vi/_c1NJQ0UP_Q/maxresdefault.jpg"
    },
    {
        title : "Hi2",
        poster : "https://i.ytimg.com/vi/_c1NJQ0UP_Q/maxresdefault.jpg"
    },
    {
        title : "Hi3",
        poster : "https://i.ytimg.com/vi/_c1NJQ0UP_Q/maxresdefault.jpg"
    },
    {
        title : "Hi4",
        poster : "https://i.ytimg.com/vi/_c1NJQ0UP_Q/maxresdefault.jpg"
    },
]

class MovieApp extends Component {
    state = {
       
    }
    
    componentWillMount(){
        
    }

    componentDidMount(){
      this._getMovies();   // componentDidMount 많이 수행되니깐 최대한 작은 함수호출
    }
    
    
    _renderMovies = () => {
        
        const movies =this.state.movies.map((movie) => { // index는 map에 쓰면 느림
            console.log(movie);
            return <Movie title={movie.title} 
                        poster={movie.medium_cover_image} 
                        key={movie.id} 
                        genres={movie.genres}
                        synopsis={movie.synopsis}
                        />
         })
        return movies;
    }

     _getMovies = async () => {  // 순서랑 상관없이 수행
        const movies = await this._callApi() // call api가 성공적으로 끝나기를 기다리는게 아니라 그냥 끝나기를 기다림. 어떤 return 값이든 movies에 집어 넣음.
        this.setState({
            movies // movies: movies
        })
    }

    _callApi = () => {
        return fetch('https://yts.lt/api/v2/list_movies.json?sort_by=download_count')
        .then(response => response.json())
        .then(json => json.data.movies)
        .catch(err => console.log(err))  //에러 발생 캐치
    }

    //API에서 아직 data를 안받아 올수도 있다
    render(){
        const {movies} = this.state;
        return (
            <div className={movies ? "App" : "App--loading"}>
                {movies ? this._renderMovies() : 'Loading'}  
            </div>
        );
    }
}

export default MovieApp;