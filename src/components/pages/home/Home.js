import React, { Component } from 'react';
import axios from 'axios';
import style from './Home.module.css';
import Socialmedia from '../../socialMedia/Socialmedia';
import SliderContent from '../../slidercontent/SliderContent';
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
                this.setState({
                    sliderimg: response.data
                });
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
                     <Socialmedia />
                    </div>

                </>);
            }
        }

export default Slider;

