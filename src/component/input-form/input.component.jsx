import './input.style.scss'
const Input=({label,...otherprops})=>{
    return(
      <div className='group'>
        <input className='form-input' {...otherprops}/>
        <label className={`${otherprops.value.length >0 ? 'shrink' : ''}form-input-label`}>{label}</label>
      </div>
    )
}
export default Input                                                                                                                                                                                                