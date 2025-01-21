

import React from 'react'
import Slider from 'react-slick'
import ava01 from '../../assets/images/ava-1.jpg'
import ava02 from '../../assets/images/ava-2.jpg'
import ava03 from '../../assets/images/ava-3.jpg'

const Testimonials=() => {

    const settings={
        dots:true,
        infinite:true,
        autoplay:true,
        speed:1000,
        swipeToSlide:true,
        autoPlaySpeed:2000,
        slidesToShow:3,

        responsive:[
            {
                breakpoint:992,
                settings:{
                    slidesToShow:2,
                    slidesToScroll:1,
                    infinite:true,
                    dots:true,

                },
            },
            {
                breakpoint:576,
                settings:{
                    slidesToShow:1,
                    slidesToScroll:1,
              
                },
            },
        ]
    }
    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Assumenda, iure. Dolorum commodi fugit voluptate quia facilis minima ullam? Nulla placeat nobis obcaecati accusantium quibusdam eum rerum? At voluptatem sapiente aliquam?
            </p>
        
            <div className="d-flex align-items-center gap-4 mt-3">
             <img src={ava01} className='w-25 h-25 rounded-2'  alt=""/>
                <div>
                    <h5 className="mb-0 mt-3">John Doe</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequatur distinctio ab quas! Accusamus praesentium totam error, voluptas officiis nesciunt cumque, dolor saepe numquam illo cum dicta consectetur mollitia quos repellendus?
            </p>
        
            <div className="d-flex align-items-center gap-4 mt-3">
             <img src={ava02} className='w-25 h-25 rounded-2'  alt=""/>
                <div>
                    <h5 className="mb-0 mt-3">Lia frank</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nam nihil a corporis doloribus reprehenderit libero minus iusto accusantium, aliquid perferendis autem nobis nostrum in! Rerum ea ipsum deserunt similique ipsa?
            </p>
        
            <div className="d-flex align-items-center gap-4 mt-3">
             <img src={ava03} className='w-25 h-25 rounded-2'  alt=""/>
                <div>
                    <h5 className="mb-0 mt-3">Pandey</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Ratione facere dolor aperiam aliquid sequi eius fugiat, dolore veritatis minus nulla sit maiores at velit! Magnam labore nostrum eum architecto recusandae?
            </p>
        
            <div className="d-flex align-items-center gap-4 mt-3">
             <img src={ava01} className='w-25 h-25 rounded-2'  alt=""/>
                <div>
                    <h5 className="mb-0 mt-3">John Doe</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Impedit excepturi inventore ipsa delectus corporis cumque dicta ducimus similique deleniti sint, molestias quidem, facilis dolor. Nostrum qui at eveniet sunt corrupti!
            </p>
        
            <div className="d-flex align-items-center gap-4 mt-3">
             <img src={ava01} className='w-25 h-25 rounded-2'  alt=""/>
                <div>
                    <h5 className="mb-0 mt-3">John Doe</h5>
                    <p>Customer</p>
                </div>
            </div>
        </div>

    </Slider>; 
};

export default Testimonials;