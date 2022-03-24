

export default function CV() {
    return (
        <>
        <div className="window" style={{ display: 'flex', gap: 10, height: '100vh'}}>
            <div style={{marginLeft:10}}>
                <div className="header" style={{display:'flex', gap: 50, paddingTop:50}}>
                    <img src="/yo.jpg" width='150px' style={{borderRadius: 25}}/>
                    <div>
                        <h1>Jose Ángel Domínguez Espinaco</h1>
                        <h2>FULLSTACK WEB DEVELOPER</h2>
                    </div>
                </div>
                <div className="profile">
                    <h2>Profile</h2>
                    <ul>
                        <li>Fullstack developer (Java, Spring, MySQL, Javascript, CSS3, HTML5) in Everis Spain. (2019)</li>
                        <li>SAP Hybris Ecommerce FullStack Developer in Experience IT Solutions Spain. (July 2021 - current)</li>
                        <li>Free time: WebGL Developer with ThreeJS</li>
                    </ul>
                </div>
                <div className="education">
                    <h2>Education</h2>
                    <ul>
                        <li>Software Engineering, Universidad de Sevilla, Sevilla (September 2014 - June 2020)</li>
                    </ul>
                </div>
                <div className="personal-projects">
                    <h2>Personal Projects</h2>
                    <ul>
                        <li>
                            <a href="https://react-three-espinaco-espisepi.vercel.app/">Portfolio (React, ThreeJS, Gsap)</a>
                        </li>
                        <li>
                            <a href="https://next-three-cv.vercel.app/">Personal Web Page (NextJS, ThreeJS, Gsap)</a>
                        </li>
                        <li>
                            <a href="https://next-three-sepinaco.vercel.app/">New Portfolio (Still in development)</a>
                        </li>
                        <li>
                            <a href="https://github.com/espisepi/gatsby-three-stripe-tfg">Final Degree Project (Gatsby, ThreeJS, Stripe Payment, Docker for deployment in DigitalOcean)</a>
                        </li>
                        <li>
                            <a href="https://espisepi.github.io/joseangel/">Old Portfolio (ThreeJS, AFrame)</a>
                        </li>
                        <li>
                            <a href="https://github.com/espisepi">Github</a>
                        </li>
                        <li>
                            <a href="https://www.linkedin.com/in/jose-%C3%A1ngel-dom%C3%ADnguez-espinaco-bba437163/">Linkedin</a>
                        </li>
                    </ul>
                </div>
            </div>
            <div className="footer" style={{padding: 15, background:'linear-gradient(to bottom right, #0066ff 0%, #6699ff 100%)'}}>
                <div className="contact">
                    <h2>Contact</h2>
                    <p>josdomesp@gmail.com</p>
                </div>
                <div className="languages">
                    <h2>Languages</h2>
                    <p>Spanish / English</p>
                </div>
                <p></p>
            </div>
        </div>
        </>
    )
}