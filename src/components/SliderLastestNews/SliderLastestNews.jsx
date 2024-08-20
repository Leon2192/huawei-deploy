"use client"

import Image from 'next/image'
import styles from './SliderLastestNews.module.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import './slider.css'

const SliderLastestNews = () => {
    const carouselItems = [
        {
            id: 1,
            img: "/sliderLastestNews/slider1.jpg",
            title: "Huawei EU Enterprise Distribution Product Warranty",
            description: ""
        },
        {
            id: 2,
            img: "/sliderLastestNews/slider2.jpg",
            title: "Introduction to Huawei Specialist Certifications for Distribution Partner",
            description: ""
        },
        {
            id: 3,
            img: "/sliderLastestNews/slider3.jpg",
            title: "[Newly Launched] 4 key functions",
            description: "Digitalization for Success"
        },
        {
            id: 4,
            img: "/sliderLastestNews/slider4.png",
            title: "New Function Express: HUAWEI eKit Website Launch of the Incentive Dashboard",
            description: "Intuitive and visible data display on the incentive dashboard; self-service query of incentive details"
        },
        {
            id: 5,
            img: "/sliderLastestNews/slider5.jpg",
            title: "HUAWEI eKit Joins Hands with Distribution Partners to Explore Unlimited Opportunities in the SME Market",
            description: "Focus on distribution partners (DPs), stay subcontractor-centred, and help global DPs to keep developing the SME market through continuous innovation and competitive products & services."
        },
        {
            id: 6,
            img: "/sliderLastestNews/slider6.png",
            title: "Reliable and efficient data storage infrastructure is key to overcoming the challenges of the Yottabyte Age",
            description: "The world's total data will soon reach the yottabyte (YB) and traditional technologies are completely unable to cope with this. At Huawei, we understand the challenges and the future solutions."
        },
        {
            id: 7,
            img: "/sliderLastestNews/slider7.png",
            title: "HUAWEI eKit digital platform has been officially launched!",
            description: "HUAWEI eKit is a digital distribution platform that integrates marketing, transaction, service, enablement, and partner operations for numerous distribution partners and enterprise-level users."
        },
        {
            id: 8,
            img: "/sliderLastestNews/slider8.jpg",
            title: "Build Digital Resilience for Long-Term Development",
            description: "As data increasingly becomes a core asset for enterprises, digital #resilience is a major metric for building enterprise resilience #frameworks."
        },
    ]

    const settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 2,
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1200,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div className={styles.sliderLastestNews}>
            <h2 className={styles.sliderH2}>Lastest News</h2>
            <div className={styles.contenedorSlider}>
                <Slider {...settings} className={styles.carousel}>
                    {carouselItems.map((item) => (
                        <div key={item.id} className={styles.sliderCard}>
                            <Image
                                className={styles.sliderImg}
                                src={item.img}
                                height={250}
                                width={550}
                                alt={`slider ${item.id}`}
                            />
                            <div className={styles.sliderText}>
                                <h5 className={styles.sliderH5}>{item.title}</h5>
                                <p className={`text-gray-400 ${styles.sliderP}`}>{item.description}</p>
                            </div>
                            <p className='text-left p-5'>View Details {`>`}</p>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default SliderLastestNews
