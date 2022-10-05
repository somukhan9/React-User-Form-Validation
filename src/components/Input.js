import { useState } from 'react'
import './Input.css'

function Input(props) {
  const [focusedAndLeave, setFocusAndLeave] = useState(false)

  const { label, id, onChange, value, errorMsg, ...inputProps } = props
  const valueKey = Object.keys(value).filter((item) => item === id)

  const handleFocusAndLeave = () => {
    setFocusAndLeave(true)
  }

  return (
    <div className="input-group">
      <label htmlFor={id}>{label}</label>
      <input
        {...inputProps}
        value={value[valueKey.join('')]}
        onChange={onChange}
        onBlur={handleFocusAndLeave}
        focused={focusedAndLeave.toString()}
        onFocus={() => id === 'confirmPassword' && setFocusAndLeave(true)}
      />
      <span className="error">{errorMsg}</span>
    </div>
  )
}

export default Input
