import {Group, Input, FormInputLabel} from './form-input.style.jsx';

const FormInput = ({label, ...otherPros}) => {
    return (
        <Group>
            <Input {...otherPros}/>
            { label && <FormInputLabel shrink={otherPros.value.length} >{label}</FormInputLabel>}
            {/* shrink က html native arrtribute မို့လို့ $ခံထားတာ။ styled-component ဆီ props ပေးတော့မယ်ဆိုရင် $ ခံတာအကောင်းဆုံး  */}
        </Group>
    )
}

export default FormInput;