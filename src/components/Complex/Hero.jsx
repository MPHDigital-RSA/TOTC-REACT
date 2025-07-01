import '../../styles/Hero.css'
import Button from '../minimal/Button'
import bigImage from '../../assets/hero-big-image.png'
import heroCardOne from '../../assets/hero-card-1.svg'
import heroCardTwo from '../../assets/hero-card-2.svg'
import heroCardThree from '../../assets/hero-card-3.svg'
import heroCardFour from '../../assets/hero-card-4.svg'

const bigButtonStyles = {
    border: "none",
    color: "white",
    backgroundColor: "rgba(255,255,255,.3)",
    padding: "15px 32px",
    borderRadius: "40px",
    cursor: "pointer"
}

function Hero() {
    return (
        <div className='hero'>

            <div className='container'>
                <div className="hero-left">
                    <h1><span>Studying</span> Online is now much easier</h1>
                    <p>TOTC is an interesting platform that will teach you in more an interactive way</p>
                    <Button buttonIcon={""} buttonUrl={"#"} buttonText={"Join for free"} isButtonIcon={false} style={bigButtonStyles} />
                </div>
                <div className="hero-right">
                    <img src={bigImage} alt="photo of a girl smiling" className='hero-main-img' />
                    <img src={heroCardOne} alt="card phoro smiling" className='hero-card-1' />
                    <img src={heroCardTwo} alt="card phoro smiling" className='hero-card-2' />
                    <img src={heroCardThree} alt="card phoro smiling" className='hero-card-3' />
                    <img src={heroCardFour} alt="card phoro smiling" className='hero-card-4' />
                </div>
            </div>
        </div>
    )
}

export default Hero
