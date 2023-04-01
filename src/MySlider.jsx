import React from 'react'
import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'

const MySlider = () => {

    // lets make slides
    const slides = [
        {
            img: 'https://via.placeholder.com/600x400.png?text=Image+1',
            title: 'Slide 1 title will be here',
            description: 'Slide 1 description will be here',
        },
        {
            img: 'https://via.placeholder.com/600x400.png?text=Image+2',
            title: 'Slide 2 title will be here',
            description: 'Slide 2 description will be here',
        },
        {
            img: 'https://via.placeholder.com/600x400.png?text=Image+3',
            title: 'Slide 3 title will be here',
            description: 'Slide 3 description will be here',
        },
        {
            img: 'https://via.placeholder.com/600x400.png?text=Image+4',
            title: 'Slide 4 title will be here',
            description: 'Slide 4 description will be here',
        },
        {
            img: 'https://via.placeholder.com/600x400.png?text=Image+5',
            title: 'Slide 5 title will be here',
            description: 'Slide 5 description will be here',
        },
    ];

    // options for the slider are here
    const settings = {
        dots: true,
        Infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        pauseOnHover: true,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                },
            },
        ],
    };


  return (
    <>
    <Slider className='my-slider' {...settings}>
        {slides.map((slide) => (
            <div key={slide.img} className='slide'>
                <img
                src={slide.img}
                alt={slide.title}
                className='slide-image'
                />
                <h2 className='slide-title'>{slide.title}</h2>
                <p className='slide-description'>{slide.description}</p>
            </div>
        ))}
    </Slider>
    </>
  )
}

export default MySlider