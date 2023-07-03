import React, { Component } from 'react';
import style from './SliderContent.module.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleChevronRight, faCircleChevronLeft } from '@fortawesome/free-solid-svg-icons';
class SliderContent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            currentIndex: 0
        };
    }
    goToPrevious = () => {
        const { sliders } = this.props;
        const isFirstSlide = this.state.currentIndex === 0;
        const newIndex = isFirstSlide ?sliders.length-1:this.state.currentIndex-1;
        this.setState({
            currentIndex:newIndex
        })
    }

    goToNext = () => {
        const { sliders } = this.props;
        const isLastSlide = this.state.currentIndex ===sliders.length-1;
        const newIndex = isLastSlide ?0:this.state.currentIndex+1;
        this.setState({
            currentIndex:newIndex
        })
    }
    componentDidMount() {
     
        this.interval = setInterval(this.goToNext, 3000); 
      }
    
      componentWillUnmount() {
    
        clearInterval(this.interval);
      }
    render() {
        const { sliders } = this.props;
        if (sliders && sliders.length > 0) {
            return (<>
                <FontAwesomeIcon icon={faCircleChevronLeft} size="3x" className={style.chevronLeft} onClick={this.goToPrevious} />
                <img className={style.imgContainer} src={sliders[this.state.currentIndex].Poster} alt={sliders[this.state.currentIndex].Title}/>
          <FontAwesomeIcon icon={faCircleChevronRight} size="3x" className={style.chevronRight} onClick={this.goToNext} /></>)
        }

        return <h1>No data available</h1>;
    }
}

export default SliderContent;

