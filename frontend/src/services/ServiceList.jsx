import React from 'react';
import ServiceCard from './ServiceCard';
import { Col } from 'reactstrap';

import weatherImg from '../assets/images/weather2.jpg';
import guideImg from '../assets/images/guide3.jpg';
import customizationImg from '../assets/images/customization1.jpg';

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing ",
    },
]

const ServiceList = () => {
    return (
        <>
            {servicesData.map((item, index) => (
                    <Col lg="3" key={index}>
                        <ServiceCard item={item} />

                    </Col>
             ))}
        </>
    );
};

export default ServiceList;
