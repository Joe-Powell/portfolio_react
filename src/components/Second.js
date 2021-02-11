import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';





function Second() {
    useEffect(() => {
        AOS.init({});
    }, []);


    return (
        <div className='container2'  >

            <div className='title' data-aos="fade-right" data-aos-offset="100" data-aos-duration="3000">

                <h1>Joseph Powell</h1>
                <h2>Software Engineer</h2><br></br>


                <a href='http://www.joe-powell.com/Resume2020.pdf' target="_blank" rel="noopener noreferrer">Resume</a>




                <div className='SklGrtWrap'>
                    <div className='skills'>
                        HTML5 | CSS3 <br></br>
                    JavaScript | Ajax<br></br>
                    React | Redux <br></br>
                    Node | Express<br></br>
                    Php | MySql
                </div>

                </div>

                <div class='technologies' >
                    <i class="fab fa-html5"></i>
                    <i class="fab fa-css3-alt"></i>
                    <i class="fab fa-js-square"></i>
                    <i class="fab fa-react"></i>
                    <i class="fab fa-node"></i>
                    <i class="fab fa-git-square"></i>
                    <i class="fab fa-php"></i>

                </div>





            </div>


            {/* <div className='greeting'>
                <span className='landing'>{setInterval(getDays, 1000)}</span>
            </div> */}









        </div >
    )
}



export default Second

