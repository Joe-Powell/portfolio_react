import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';



function Second() {
    useEffect(() => {
        AOS.init({});
    }, []);


    return (
        <div className='container2'  >
            <div className='title' data-aos="fade-right" data-aos-offset="400" data-aos-duration="3000">
                <h1>Joe Powell</h1>
                <h2>Web Developer</h2>

                <a href='http://www.joe-powell.com/Resume2020.pdf' target="_blank">Resume</a>




                <div className='SklGrtWrap'>
                    <div className='skills'>
                        HTML5 | CSS3 <br></br>
                    JavaScript | Ajax<br></br>
                    React | Redux <br></br>
                    Node | Express<br></br>
                    Php | MySql
                </div>

                </div>
            </div>









        </div >
    )
}



export default Second

