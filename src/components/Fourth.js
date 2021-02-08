import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

function Fourth() {

    useEffect(() => {
        AOS.init({});
    }, []);

    return (
        <div className='container4' >
            <p data-aos="fade-right" data-aos-offset="100" data-aos-duration="2000" data-aos-easing="ease-in-out" data-aos-once="true">
                Hello, I'm Joseph. I am A self-taught Front-end Software Developer. Over the past three years I have been
                learning from online courses, building projects, and studying the documentations. I have been inspired by other Developers
                through their online presence and decided that this is definitely what I want to do. After putting some projects together and seeing
                how websites are built, I realized how satisfying it feels to be able to create websites, provide customization, and solve problems.


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
