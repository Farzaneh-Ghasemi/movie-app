import React, { Component } from 'react';
import style from './AboutUs.module.css';


class AboutUs extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        return (
            <div className={style.containr}>
                <div className={style.content}>
                    <div className={style.title}><h1>About Movie App</h1></div>
                    <div className={style.body}>
                        <p>
                            Welcome to our movie application,
                             your ultimate destination for all things cinema! We are thrilled to present an immersive
                             and user-friendly platform that caters to movie enthusiasts, providing them with an unforgettable
                             movie-watching experience.
                 </p>
                        <p>
                            At <strong>Movie App</strong>, we are passionate about movies and dedicated to bringing the magic of the silver
                            screen right to your fingertips. Our application boasts an extensive collection of movies
                            from various genres, spanning across different eras, languages, and cultures.
                            Whether you're a fan of action-packed blockbusters, gripping dramas, hilarious comedies,
                            or thought-provoking documentaries, we've got you covered
                 </p>
                        <p>
                            With our user-friendly interface and powerful search engine,
                            discovering your favorite movies has never been easier.
                            Our carefully curated library ensures that you have access to
                            a diverse selection of films, ranging from all-time classics to the
                            test releases. Get ready to embark on a cinematic journey like no other!
                 </p>
                        <p>
                            In addition to our vast movie collection, we understand that the movie-watching
                            experience is not limited to just the film itself. That's why we provide
                            comprehensive information about each movie, including plot summaries, cast and
                            crew details, ratings, and reviews. Stay up-to-date with the latest buzz and make
                             informed decisions about what to watch next.
                 </p>
                    </div>
                </div>

            </div>

        );
    }
}

export default AboutUs;