import React from 'react'

function Fifth() {
    return (

        <div className='container5'>
            <h1 >Projects</h1>
            <div className='containProjects'>

                <div className='parent1 parent' data-aos="fade-right" data-aos-offset="400" data-aos-duration="2000" data-aos-once="true">
                    <div className='overlay'>
                        <h4>This is a weather app getting data from an API. Type in your city and get the current temperature. Technologies used include Javascript, fetch.js, html, and css. </h4>
                        <div class='codeButtons'>
                            <h2><a href='https://github.com/Joe-Powell/WeatherApp' target='_blank'>See Code</a></h2>
                            <h2><a href='http://joe-powell.com/WeatherApp/' target='_blank'>Live Project</a></h2>
                        </div>
                    </div>
                </div>

                <div className='parent2 parent' data-aos="fade-left" data-aos-offset="400" data-aos-duration="2000" data-aos-once="true">

                    <div className='overlay'>
                        <h4>This is a social media site where you login, upload a photo, create a post, edit, or delete. Technologies used are PHP, javascript, HTML, CSS, MySql, and more.</h4>
                        <div class='codeButtons'>
                            <h2><a href='https://github.com/Joe-Powell/Login_Project_With_Posts' target='_blank'>See Code</a></h2>
                            <h2><a href='http://myblogs.live/loginSocialMediaPosts' target='_blank'>Live Project</a></h2>
                        </div>
                    </div>
                </div>

                <div className='parent3 parent ' data-aos="fade-right" data-aos-offset="400" data-aos-duration="2000" data-aos-once="true">
                    <div className='overlay'>
                        <h4>In his project you can add items to cart, remove them, get the total price and to calculate the quantity. Technologies are Javascript, local storage,
                            HTML, and CSS. </h4>
                        <div class='codeButtons'>
                            <h2><a href='https://github.com/Joe-Powell/shopping-cart-2020' target='_blank'>See Code</a></h2>
                            <h2><a href='http://joe-powell.com/shoppingCartSupplements/' target='_blank'>Live Project</a></h2>
                        </div>
                    </div>
                </div>

                <div className='parent4 parent' data-aos="fade-left" data-aos-offset="400" data-aos-duration="2000" data-aos-once="true">
                    <div className='overlay'>
                        <h4>This is a crud application where you login, create a post, edit, or delete it. Technologies used include Node.js Express.js, Fetch.js, MongoDB, and more.  </h4>
                        <div class='codeButtons'>
                            <h2><a href='https://github.com/Joe-Powell/nodeExpressMongoFetch' target='_blank'>See Code</a></h2>
                            <h2><a href='https://murmuring-badlands-94908.herokuapp.com/' target='_blank'>Live Project</a></h2>
                        </div>
                    </div>
                </div>
            </div>





        </div>

    )
}

export default Fifth
