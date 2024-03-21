import React, { useState } from 'react'
import Ratting from '../components/Ratting';


const reviwtitle = "Add a Review";

let ReviewList = [
    {
        imgUrl: "/src/assets/images/instructor/01.jpg",
        imgAlt: "Client thumb",
        name: "Ganelon Boileau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/02.jpg",
        imgAlt: "Client thumb",
        name: "Morgana Cailot",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/03.jpg",
        imgAlt: "Client thumb",
        name: "Telford Bois",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
    {
        imgUrl: "/src/assets/images/instructor/04.jpg",
        imgAlt: "Client thumb",
        name: "Cher Daviau",
        date: "Posted on Jun 10, 2022 at 6:57 am",
        desc: "Enthusiast build innovativ initiatives before lonterm high-impact awesome theme seo psd porta monetize covalent leadership after without resource.",
    },
];

const Review = () => {

    const [reviewShow, setReviewShow] = useState(true)

    return (
        <>
            <ul className={`review-nav lab-ul ${reviewShow ? "RevActive" : "DescActive"}`}>
                <li className='desc' onClick={() => setReviewShow(!reviewShow)}>Descsription</li>
                <li className='rev' onClick={() => setReviewShow(!reviewShow)}>Review 4</li>
            </ul>

            {/* desc $ review content */}
            <div className={`review-content ${reviewShow ? "review-content-show" : "description-show"}`}>
                <div className='review-showing'>
                    <ul className='content lab-ul'>
                        {
                            ReviewList.map((review, index) => (
                                <li key={index}>
                                    <div className='post-thumb'>
                                        <img src={review.imgUrl} alt="" />
                                    </div>
                                    <div className='post-content'>
                                        <div className='entry-meta'>
                                            <div className="posted-on">
                                                <a href="#">{review.name}</a>
                                                <p>{review.date}</p>
                                            </div>

                                            <div className='ratting'>
                                                <Ratting />
                                            </div>
                                        </div>
                                        <div className='entry-content'>
                                            <p>{review.desc}</p>
                                        </div>
                                    </div>
                                </li>
                            ))
                        }
                    </ul>

                    {/* add review field */}
                    <div className="client-review">
                        <div className="review-form">
                            <div className="review-title">
                                <h5>{reviwtitle}</h5>
                            </div>

                            <form action="action" className='row'>
                                <div className="col-md-4 col-12">
                                    <input type="text" name='name' id='name' placeholder='Full name *' />
                                </div>
                                <div className="col-md-4 col-12">
                                    <input type="email" name='email' id='name' placeholder='Your Email *' />
                                </div>
                                <div className='col-md-4 col-12'>
                                    <div className='ratting'>
                                        <span className='me-2'>Your Rating</span>
                                        <Ratting />
                                    </div>
                                </div>
                                <div className="col-md-12 col-12" >
                                    <textarea name="message" id="message" rows="8" placeholder='Type Here Message'></textarea>
                                </div>

                                <div className="col-12">
                                    <button type='submit' className="default-button">
                                        Submit Review
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* description */}
                <div className="description">
                    <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident saepe exercitationem labore id explicabo.
                        Quas dolore obcaecati sint itaque enim alias, corporis iure odit doloribus hic vero repellendus praesentium molestias?
                        Laboriosam ab autem blanditiis repudiandae vero esse, doloremque officia sunt ea enim eos animi nobis veniam maiores.
                        Ratione ex eum nulla tempora at aspernatur magni deserunt molestiae vel ad, laboriosam eos soluta magnam eveniet,
                        dolorem iste veritatis doloribus debitis sed pariatur. Ratione quidem possimus commodi.
                    </p>

                    <div className="post-item">
                        <div className="post-thumb">
                            <img src='/src/assets/images/shop/01.jpg' alt=""/>
                        </div>
                        <div className="post-content">
                            <ul className="lab-ul">
                                <li>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur, harum.</li>
                                <li>Minus pariatur dicta assumenda commodi optio obcaecati eligendi, ullam ipsum nisi fugit tenetur beatae!</li>
                                <li>Ratione, sapiente quia suscipit consequatur perferendis natus quisquam consequuntur quasi fugiat eveniet. </li>
                                <li>Dolores voluptate adipisci animi nobis provident illo maiores corrupti nisi! Vitae, blanditiis minus. Facere aliquam dolorem ut ab architecto.</li>
                                <li>Illo repellendus id porro adipisci laboriosam earum atque nisi minus rerum. Totam iste modi eaque fugit distinctio, quasi minima fugiat laudantium? </li>
                            </ul>
                        </div>
                    </div>

                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Est aliquid corporis, 
                        veritatis dolorum sequi corrupti laboriosam expedita natus, iste qui consequatur rerum 
                        consectetur adipisci harum reiciendis recusandae esse! Asperiores, cum modi nam 
                        exercitationem fugiat rem, alias, sequi temporibus voluptates ducimus ipsum recusandae. 
                        Alias facere iste corporis officia fuga perspiciatis quod?
                    </p>
                </div>
            </div>
        </>
    )
}

export default Review
