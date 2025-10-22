import { BaseButton, GoogleButton, InvertedButton, ButtonSpinner } from './button.style';

export const BUTTON_TYPE_CLASSES = {
    base: 'base',
    google: 'google-sign-in',
    inverted: 'inverted'
}

const getButton = (buttonType = BUTTON_TYPE_CLASSES.base) => 
    ({
        [BUTTON_TYPE_CLASSES.base]: BaseButton,
        [BUTTON_TYPE_CLASSES.google]: GoogleButton,
        [BUTTON_TYPE_CLASSES.inverted]: InvertedButton
    }[buttonType]);

    // () => ({ obj literal} [dyanmic call])
    // () => ({base: BaseButton,..}[base]) will return BaseButton

const Button = ({children, buttonType, isLoading, ...otherProps}) => {
    const CustomButton = getButton(buttonType);
    return <CustomButton {...otherProps}> {isLoading ? <ButtonSpinner/>: children} </CustomButton>;
};

export default Button;