
import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
// import Autoplay from 'embla-carousel-autoplay'
import { coursesDataLocal } from '../../data/CoursesData'

import categoryIcon from '../../assets/design-icon.svg'
import clockIcon from '../../assets/clock-icon.svg'

import '../../styles/CourseCarousel.css'

function CoursesCarousel({ coursesData }) {

    const [emblaRef, emblaApi] = useEmblaCarousel({ loop: false })

    const scrollPrev = useCallback(() => {
        if (emblaApi) emblaApi.scrollPrev()
    }, [emblaApi]);

    const scrollNext = useCallback(() => {
        if (emblaApi) emblaApi.scrollNext()
    }, [emblaApi]);

    return (
        <div className='carousel'>
            <div className='container carousel-header'>
                <h3 className='carousel-heading'>Recommended for you</h3>
                <a href="#" className='carousel-see-all-link'>See all</a>
            </div>

            <div className='container slider-container'>
                <div className="embla">
                    <div className="embla__viewport" ref={emblaRef}>
                        <div className="embla__container">

                            {Array.isArray(coursesData) && coursesData.length > 0 ? (
                                coursesData.map((course, index) => (

                                    <div className="embla__slide" key={index}>
                                        <div className='course-card'>
                                            <img src={course.course_image_url} alt={`${course.course_title} image`} className='course-image' />

                                            <div className='course-category-and-duration'>
                                                <div className="course-category">
                                                    <img src={categoryIcon} alt="category icon" className='course-category-icon' />
                                                    <p className='course-category'>{course.course_category}</p>
                                                </div>
                                                <div className="course-duration">
                                                    <img src={clockIcon} alt="clock icon" className='course-duration-icon' />
                                                    <p className='course-duration'>{`${course.course_duration} months`}</p>
                                                </div>
                                            </div>

                                            <h3 className='course-title'>{course.course_title}</h3>

                                            <p className="course-description">
                                                {course.course_description}
                                            </p>

                                            <div className="course-instructor-and-price">
                                                <div className="course-instructor">
                                                    <img src={course.avatar_image} alt={`${course.instructorName} picture`} className="course-instructor-avatar" />
                                                    <p className="course-instructor-name">
                                                        {course.course_instructor_name}
                                                    </p>
                                                </div>
                                                <div className="course-price">
                                                    <p className="course-original-price">{`$${course.course_original_price}`}</p>
                                                    <p className="course-discounted-price">{`$${course.course_discounted_price}`}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                ))
                            ) : (
                                coursesDataLocal.map((course, index) => (
                                    <div className="embla__slide" key={index}>
                                        <div className='course-card'>
                                            <img src={course.image} alt={`${course.title} image`} className='course-image' />

                                            <div className='course-category-and-duration'>
                                                <div className="course-category">
                                                    <img src={categoryIcon} alt="category icon" className='course-category-icon' />
                                                    <p className='course-category'>{course.category}</p>
                                                </div>
                                                <div className="course-duration">
                                                    <img src={clockIcon} alt="clock icon" className='course-duration-icon' />
                                                    <p className='course-duration'>{`${course.duration} months`}</p>
                                                </div>
                                            </div>

                                            <h3 className='course-title'>{course.title}</h3>

                                            <p className="course-description">
                                                {course.desc}
                                            </p>

                                            <div className="course-instructor-and-price">
                                                <div className="course-instructor">
                                                    <img src={course.instructureAvatar} alt={`${course.instructorName} picture`} className="course-instructor-avatar" />
                                                    <p className="course-instructor-name">
                                                        {course.instructorName}
                                                    </p>
                                                </div>
                                                <div className="course-price">
                                                    <p className="course-original-price">{`$${course.originalPrice}`}</p>
                                                    <p className="course-discounted-price">{`$${course.discountedPrice}`}</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))
                            )}

                        </div>
                    </div>

                    <div className='carousel-nav-buttons'>
                        <button className="embla__prev" onClick={scrollPrev}>Prev</button>
                        <button className="embla__next" onClick={scrollNext}>Next</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CoursesCarousel
