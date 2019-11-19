import React, { Component } from 'react';
import Slider from 'react-slick';

class SliderImage extends Component {
    getImages = (index) => {
        try {
            return require('Assets/image/slider/slide0' + index + '.jpg')
        } catch (e) {
            return require(`Assets/image/slider/slider.jpg`)
        }
    }

    render() {

        var settings = {
            dots: true,
            infinite: true,
            autoplay: true,
            speed: 2000,
            autoplaySpeed: 2000,
            slidesToShow: 1,
            slidesToScroll: 1,
            pauseOnHover: true
        };

        var ArrayVar = [1, 2, 3, 4, 5, 6, 7];

        return (
            <div>
                <Slider {...settings}>
                    {ArrayVar.map((index) => {
                        return (
                            <img key={index} src={this.getImages(index + 1)} alt="photos" height="525px" width="100%" />
                        );
                    })}
                </Slider>
            </div>
        );
    }
}

export default SliderImage;