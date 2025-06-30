import '../../styles/Hero.css'
import Button from '../minimal/Button'

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
                <div className="hero-right"></div>
            </div>
        </div>
    )
}

export default Hero
