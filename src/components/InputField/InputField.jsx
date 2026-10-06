import { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import styles from './InputField.module.css'

function InputField({ value, onChange, placeholder, ...props }) {
  const [inputValue, setInputValue] = useState(value ?? '')

  useEffect(() => {
    setInputValue(value ?? '')
  }, [value])

  const handleChange = (event) => {
    const nextValue = event.target.value
    setInputValue(nextValue)
    onChange?.(nextValue)
  }

  return (
    <input
      {...props}
      className={styles.input}
      type="text"
      value={inputValue}
      onChange={handleChange}
      placeholder={placeholder}
    />
  )
}

InputField.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
  placeholder: PropTypes.string,
}

export default InputField
