import React, { Component } from 'react';
import axios from 'axios';
import style from './Slider.module.css';
import SliderContent from '../slidercontent/SliderContent';
class Slider extends Component {
    constructor(props) {
        super(props);
        this.state = {
            sliderimg: []
        };
    }

    fetchSlider = () => {
        axios.get('/jsonData/slider.json')
            .then((response) => {
                console.log(response.data);
                this.setState({
                    sliderimg: response.data
                }, () => console.log(this.state.sliderimg));
            }
            )

            .catch((error) => {
                console.log(error);
            });
    };

    componentDidMount = () => {
            this.fetchSlider();
           }

            render() {
                return (<>

                    <div className={style.container}>
                     <SliderContent sliders={this.state.sliderimg}/>   
                    </div>

                </>);
            }
        }

export default Slider;

