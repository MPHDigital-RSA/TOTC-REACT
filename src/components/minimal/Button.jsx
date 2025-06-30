
import '../../styles/Button.css'

function Button({ buttonText, buttonIcon, isButtonIcon, style, buttonUrl }) {
    return (
        <a href={buttonUrl}>
            <button style={style}>
                {buttonText}

                {isButtonIcon &&
                    <span>
                        {buttonIcon}
                    </span>
                }
            </button>
        </a>
    )
}

export default Button
