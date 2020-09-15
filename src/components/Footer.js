import React from 'react'

export default function Footer() {
    return (
        <footer>
            <div className='container'>
                <div>
                    <ion-icon name="mail-outline"></ion-icon>
                    <p>joe_773@yahoo.com</p>
                </div>
                <div>
                    <a href='https://www.linkedin.com/in/joseph-powell-737b5617a/' target="_blank">
                        <ion-icon name="logo-linkedin"></ion-icon>
                        <p>Linkedin</p>
                    </a>
                </div>
                <div>
                    <a href='https://github.com/Joe-Powell' target="_blank">
                        <ion-icon name="logo-github"></ion-icon>
                        <p>Github</p>
                    </a>
                </div>

            </div>

            <p class='copyright'> Copyright © Joseph Powell 2020</p>

        </footer >
    )
}
