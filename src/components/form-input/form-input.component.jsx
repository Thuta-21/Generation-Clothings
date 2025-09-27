import {Group, Input, FormInputLabel} from './form-input.style.jsx';

const FormInput = ({label, ...otherPros}) => {
    return (
        <Group>
            <Input {...otherPros}/>
            { label && <FormInputLabel shrink={otherPros.value.length} >{label}</FormInputLabel>}
        </Group>
    )
}

export default FormInput;