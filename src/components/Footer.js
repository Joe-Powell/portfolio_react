import React from 'react'
import { getDays } from '../getDays';


export default function Footer() {
    return (
        <footer>
            <div className='container'>
                <div className='email '>
                    <ion-icon name="mail-outline"></ion-icon>
                    <p>joe_773@yahoo.com</p>

                </div>
                <div className='linkedin '>
                    <a href='https://www.linkedin.com/in/joseph-powell-737b5617a/' target="_blank">
                        <ion-icon name="logo-linkedin"></ion-icon>
                        <p>Linkedin</p>
                    </a>
                </div>
                <div class='githubdiv '>
                    <a href='https://github.com/Joe-Powell' target="_blank">
                        <ion-icon name="logo-github"></ion-icon>
                        <p>Github </p>
                    </a>
                    <p class='copyright'> Copyright © Joseph Powell 2020</p>
                </div>

                <div className='greeting'>
                    <span className='landing'>{setInterval(getDays, 1000)}</span>
                </div>

            </div>


        </footer >
    )
}
