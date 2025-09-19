import './form-input.style.scss';

const FormInput = ({label, ...otherPros}) => {
    return (
        <div className="group">
            <input className='form-input' {...otherPros}/>
            { label && <label className={`${otherPros.value.length ? 'shrink': ''} form-input-label`} >{label}</label>}
        </div>
    )
}

export default FormInput;