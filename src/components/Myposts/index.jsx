import React from 'react'
import "./posts.scss"
function Myposts() {
  return (
    <div>
        <section id='myposts'>
                <div className="container">
                    <div className="posts_info">
                        <h1>RECENT POSTS FROM OUR BLOG</h1>
                        <p>Lorem ipsum dolor. Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum, iste itaque, ullam quam placeat eos rerum a exercitationem accusantium explicabo dicta quas id officiis!</p>
                    </div>
                    <div className="posts">
                        <div className="post">
                            <img src="https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-1.jpg.webp" alt="" />
                            
                                <button className='travel'> Traevl</button>
                                <button className='life'> Life style</button>
                            
                            <h3>LOW COST ADVERTISING</h3>
                            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ratione nisi? Consectetur quibusdam alias voluptatum!</p>
                            <p className='date'>10 novomber,2003</p>
                        </div>
                        <div className="post">
                            <img src="https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-2.jpg.webp" alt="" />

                                <button className='travel'>Travel</button>
                                <button className='life'>Life style</button>
                           
                            <h3>LOW COST ADVERTISING</h3>
                            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ratione nisi? Consectetur quibusdam alias voluptatum!</p>
                            <p className='date'>10 novomber,2003</p>
                        </div>
                        <div className="post">
                            <img src="https://preview.colorlib.com/theme/woodrox/img/our-blog/our-blog-3.jpg.webp" alt="" />
                           
                                <button className='travel'>Travel</button>
                                <button className='life'>Life style</button>
                            <h3>LOW COST ADVERTISING</h3>
                            <p className='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ad, ratione nisi? Consectetur quibusdam alias voluptatum!</p>
                            <p className='date'>10 novomber,2003</p>
                        </div>
                    </div>
                </div>
        </section>
    </div>
  )
}

export default Myposts