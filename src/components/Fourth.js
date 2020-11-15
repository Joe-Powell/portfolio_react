import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Fourth() {

    useEffect(() => {
        AOS.init({});
    }, []);

    return (
        <div className='container4' >
            <p data-aos="fade-right" data-aos-offset="100" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-once="true"> I am a well rounded Web Developer
            that develops responsive, customized, and scaleable websites.
            I'm looking for a front-end position within the industry where I
            can continue to grow and learn, however I do have knowledge
            with the back-end using Node.js and Php as well.
        </p>


            <div class='technologies' >
                <i class="fab fa-html5"></i>
                <i class="fab fa-css3-alt"></i>
                <i class="fab fa-js-square"></i>
                <i class="fab fa-react"></i>

                <i class="fab fa-node"></i>
                <i class="fab fa-git-square"></i>
                <i class="fab fa-php"></i>




            </div>

        </div >
    )


}

export default Fourth
