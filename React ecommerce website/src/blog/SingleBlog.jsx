import React, { useState } from 'react'
import blogList from '../utilis/blogdata'
import { useParams } from 'react-router-dom';
import PageHeader from '../components/PageHeader';
import Tag from '../shop/Tag';
import PopularPost from '../shop/PopularPost';

const socialList = [
    {
        link: "#",
        iconName: "icofont-facebook",
        className: "facebook",
    },
    {
        link: "#",
        iconName: "icofont-twitter",
        className: "twitter",
    },
    {
        link: "#",
        iconName: "icofont-linkedin",
        className: "linkedin",
    },
    {
        link: "#",
        iconName: "icofont-instagram",
        className: "instagram",
    },
    {
        link: "#",
        iconName: "icofont-pinterest",
        className: "pinterest",
    },
];


const SingleBlog = () => {
    const [blog, setBlog] = useState(blogList);
    const { id } = useParams()
    // console.log(id)

    const result = blog.filter((b) => b.id === Number(id))
    // console.log(result)
    // console.log(result[0])

    return (
        <div>
            <PageHeader title={"Single Blog Page"} curPage={"Blog / Blog Details"} />

            <div className="blog-section blog-single padding-tb section-bg">
                <div className="container">
                    <div className="row justify-content-center">

                        {/* Left Side */}
                        <div className="col-lg-8 col-12">
                            <article>
                                <div className="section-wrapper">
                                    <div className="row row-cols-1 justify-content-center g-4">
                                        <div className="col">
                                            <div className="post-item style-2">
                                                <div className="post-inner">
                                                    {
                                                        result.map((item) => (
                                                            <div key={item.id}>
                                                                <div className="post-thumb">
                                                                    <img src={item.imgUrl} alt="" className='w-100' />
                                                                </div>

                                                                <div className="post-content">
                                                                    <h3>{item.title}</h3>
                                                                    <div className="meta-post">
                                                                        <ul className="lab-ul">
                                                                            {
                                                                                item.metaList.map((val, index) => (
                                                                                    <li key={index}><i className={val.iconName}></i>{val.text}</li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>

                                                                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.
                                                                        Nam asperiores officia enim fugiat suscipit nisi fugit minus autem possimus
                                                                        perferendis? Qui, provident delectus! Dicta cupiditate delectus ipsam error
                                                                        saepe doloremque repellat officia aut in molestiae dolorum, non quam! Ipsam
                                                                        atque, aut exercitationem eius laborum ipsa facilis tenetur, rem minima
                                                                        quisquam voluptate voluptates aliquid itaque consequuntur placeat nostrum
                                                                        necessitatibus quas distinctio excepturi, laboriosam ut esse mollitia id.
                                                                        Quos voluptatum sequi tempore qui ab quaerat ut, aliquam dolor ipsam at minus
                                                                        repudiandae recusandae sint unde, soluta amet molestiae reprehenderit eligendi
                                                                        voluptatibus nisi iste vel! Cumque non hic autem consectetur quisquam, distinctio
                                                                        voluptatum, magni quia maxime? Dolorem earum, explicabo iusto ullam possimus
                                                                        nostrum reiciendis expedita vel natus fugiat magni eius nesciunt laudantium atque
                                                                        iure ea quos, voluptatem autem modi ab eos placeat rem.
                                                                    </p>

                                                                    <blockquote>
                                                                        <p>Voluptatem voluptate, ut eos laudantium unde corrupti modi dicta libero et fuga in tempora
                                                                            non culpa dolorem ducimus fuga at ipsam, eveniet sunt eum? Accusantium omnis facilis obcaecati totam
                                                                            nesciunt!
                                                                        </p>
                                                                        <cite>
                                                                            <a href="#">...Melissa Hunter</a>
                                                                        </cite>
                                                                    </blockquote>

                                                                    <p>Engage with stakeholders more effectively. The FRC should consult with a wider range of stakeholders,
                                                                        including investors, companies, and academics, when developing its standards and policies.
                                                                        This would help to ensure that the FRC's work is relevant and responsive to the needs of
                                                                        those who are affected by it.
                                                                    </p>

                                                                    <img src="/src/assets/images/blog/single/01.jpg" alt="" />

                                                                    <p>
                                                                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex maxime, officiis ipsum eius consequuntur rerum
                                                                        dicta alias perspiciatis doloribus assumenda nisi possimus illo itaque quas quam modi dolorum! Quos adipisci
                                                                        magnam possimus debitis quaerat dolores minima corporis facilis dolor reiciendis!
                                                                    </p>

                                                                    <div className="video-thumb">
                                                                        <img src="/src/assets/images/blog/single/02.jpg" alt="" />
                                                                        <a href="https://youtu.be/LdthvcGmBTc?si=OSl1MYX2tFxH6RLF" className='video-button popup' target='_blank'>
                                                                            <i className="icofont-ui-play"></i>
                                                                        </a>
                                                                    </div>

                                                                    <p>
                                                                        Hi guys! I hope you're doing well.
                                                                        I've got myself enrolled in Social Service Worker program at Sheridan college.
                                                                        It was my first day, felt different but I am glad I am going through this new journey.
                                                                        I hope you'd enjoying watching this new phase of my life.
                                                                        Thank you for watching,
                                                                        Love Shreya.
                                                                    </p>

                                                                    <div className="tags-section">
                                                                        <ul className="tags lab-ul">
                                                                            <li>
                                                                                <a href="#">Agency</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Business</a>
                                                                            </li>
                                                                            <li>
                                                                                <a href="#">Personal</a>
                                                                            </li>
                                                                        </ul>

                                                                        <ul className="lab-ul social-icons">
                                                                            {
                                                                                socialList.map((val, index) => (
                                                                                    <li key={index}>
                                                                                        <a href="#" className={val.className}>
                                                                                            <i className={val.iconName}></i>
                                                                                        </a>
                                                                                    </li>
                                                                                ))
                                                                            }
                                                                        </ul>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        ))
                                                    }
                                                </div>
                                            </div>
                                        </div>

                                        <div className="navigations-part">
                                            <div className="left">
                                                <a href="#" className='prev'>
                                                    <i className="icofont-double-left"></i>
                                                    Previous Blog
                                                </a>

                                                <a href="#" className="title">
                                                    Evisculate Parallel Processes Techica Sound
                                                    Models Authoriative
                                                </a>
                                            </div>

                                            <div className="right">
                                                <a href="#" className='prev'>
                                                    Next Blog
                                                    <i className="icofont-double-right"></i>
                                                </a>

                                                <a href="#" className="title">
                                                    Ovisculate Parallel Processes Techica Sound
                                                    Models Authoriative
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </article>
                        </div>



                        {/* Right Side */}
                        <div className="col-lg-4 col-12">
                            <aside>
                                <Tag />
                                <PopularPost />
                            </aside>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default SingleBlog
