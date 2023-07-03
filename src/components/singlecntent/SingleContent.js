import React, { Component } from 'react';
import { img_300, unavailable } from '../../config/config';
import style from './SingleContent.module.css';

class SingleContent extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    render() {
        const {
            id,
            poster,
            title,
            date,
            media_type,
            vote_average,
            plot,
            genre
        } = this.props;

        return (
            <div className={style.media}>
            <img  className={style.poster} src={ poster } alt={title}/>
            <h4 className={style.mainTitle}>{title}</h4>
            <span className={style.subTitle}>
                <span > {media_type}</span>
                <span >{date}</span>
            </span>
            <span className={style.genre}>{genre}</span>
            </div>
        );
    }
}

export default SingleContent;