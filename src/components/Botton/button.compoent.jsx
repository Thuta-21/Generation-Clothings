import './button.style.scss';

const BUTTON_TYPE_CLASSES = {
    google: 'google-sign-in',
    inverted: 'inverted'
}

const Button = ({children, buttonType, ...otherProps}) => {
    return (
        <button className={`button-container ${BUTTON_TYPE_CLASSES[buttonType]}`} {...otherProps}>
                                                            {/* obj ကို [] နဲ့ခေါ်တာက dynamic ဖြစ်လို့ . နဲ့က static မှာပဲသုံးတာ */}
            {children}
        </button>
    )
}

export default Button;