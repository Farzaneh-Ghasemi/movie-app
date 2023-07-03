import React, { Component } from 'react';
import style from './Movie.module.css';
import axios from 'axios';
import SingleContent from '../../singlecntent/SingleContent';

class Movies extends Component {
    constructor(props) {
        super(props);
        this.state = {
            content: [],
            selectContent: [],
            genres: [],
            selectedGenres: []
        }

    }
    fetchMovies = () => {
        axios.get('/jsonData/movies.json')
            .then((response) => {
                this.setState({
                    content: response.data

                }, () => {
                    console.log(this.state.content);
                    this.setState({
                        genres: this.fetchGenres()
                    })

                })
            })
            .catch((error) => {
                console.log(error)
            })
    }

    fetchGenres = () => {
        let uniqGenre = [];
        this.state.content.forEach(movie => {
            const genre = movie.Genre.split(',');
            uniqGenre = [...uniqGenre, ...genre];
        });
        uniqGenre = Array.from(new Set(uniqGenre));
        return uniqGenre;
    }



    addGenres = (event, genre) => {
        console.log(genre)
        const setGenre = this.state.genres.filter(g => g !== genre)
        this.setState((prevstate) => ({
            selectedGenres: [...prevstate.selectedGenres, genre],
            genres: setGenre
        }), () => this.setSelectedContent(this.state.selectedGenres))

    };

    removeGenres = (event, genre) => {
        console.log('remove:'+genre);
        const  setSelectGenre=this.state.selectedGenres.filter(g=>g!=genre)
        this.setState((prevstate)=>({
            genres:[genre,...prevstate.genres],
            selectedGenres: setSelectGenre
        }), () => this.setSelectedContent(this.state.selectedGenres))
    };
    setSelectedContent = async (genres) => {
        let selected = [];
      
        for (const movie of this.state.content) {
          const genre = movie.Genre.split(',');
          const hasCommonGenre = genre.some((element) => genres.includes(element));
      
          if (hasCommonGenre) {
            selected.push(movie);
          }
        }
      
        await this.setState({
          selectContent: [...selected]
        });
      };

    componentDidMount = () => {
        this.fetchMovies();
    };

    render() {
        return (
            <div>
                <span className={style.pageTitle}>Movies</span>
                <div className={style.genreContainer}>
                    {this.state.selectedGenres.length > 0 && this.state.selectedGenres.map((element, index) => (
                        <button className={style.removeGenre} key={index} onClick={(event) => this.removeGenres(event, element)}>{element}</button>
                    ))}
                    {this.state.genres.length > 0 && this.state.genres.map((element, index) => (
                        <button className={style.addGenre} key={index} onClick={(event) => this.addGenres(event, element)}>{element}</button>
                    ))}

                </div>
                <div className={style.movies}>
                    {
                        this.state.selectContent.length > 0
                            ?
                            this.state.selectContent.map((movie) =>
                                <SingleContent
                                    key={movie.Id}
                                    id={movie.Id}
                                    poster={movie.Poster}
                                    title={movie.Title}
                                    date={movie.Year}
                                    media_type={movie.Type}
                                    vote_average={movie.imdbRating}
                                    plot={movie.Plot}
                                    genre={movie.Genre}
                                />
                            )
                            :
                            this.state.content.map((movie) =>
                                <SingleContent
                                    key={movie.Id}
                                    id={movie.Id}
                                    poster={movie.Poster}
                                    title={movie.Title}
                                    date={movie.Year}
                                    media_type={movie.Type}
                                    vote_average={movie.imdbRating}
                                    plot={movie.Plot}
                                    genre={movie.Genre}
                                />
                            )
                    }

                </div>
            </div>
        );
    }
}

export default Movies;




    // fetchGenres = () => {
    //     return new Promise((resolve, reject) => {
    //         const setGenres = new Set();
    //         if (this.state.content) {
    //             this.state.content.forEach((movie) => {
    //                 const gener = movie.Genre.split(',');
    //                 for (let i = 0; i < gener.length - 1; i++) {
    //                     setGenres.add(gener[i]);
    //                 }
    //             });
    //             resolve(setGenres);
    //         } else {
    //             reject('No content available');
    //         }
    //     })
    //         .then((setGenres) => {
    //             this.setState({
    //                 genres: setGenres
    //             });
    //             console.log('Genres fetched and state updated successfully!');
    //         })
    //         .catch((error) => {
    //             console.error('Error occurred while fetching genres:', error);
    //         });
    // };
     // selectedGenre = (event, element) => {
    //     const genre = element.trim();
    //     this.selectedGenres=this.selectedGenres.filter( item=>{
    //         return item!==genre
    //     })
    //     console.log('this gener:' + genre)
    //     const selectMovie = this.state.selectContent.filter((movie) => {
    //         const movieGenres = movie.Genre.split(',');
    //         for (let i = 0; i < movieGenres.length; i++) {
    //             if (genre === movieGenres[i].trim()) {
    //                 return true;
    //             }
    //         }
    //         return false;
    //     });
    //     console.log(selectMovie)
    //     if (selectMovie.length > 0) {
    //         this.setState({
    //             selectContent: selectMovie
    //         });
    //     }
    // };

     // fetchGenres = () => {
    //     const setGenres = new Set();
    //     if (this.state.content) {
    //         this.state.content.forEach((movie) => {
    //             const gener = movie.Genre.split(',');
    //             for (let i = 0; i < gener.length; i++) {
    //                 setGenres.add(gener[i].trim());
    //             }
    //         });
    //     }
    //     return setGenres;
    // }