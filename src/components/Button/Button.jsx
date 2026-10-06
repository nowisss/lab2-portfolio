import PropTypes from 'prop-types'
import styles from './Button.module.css'

function Button({ children, onClick, type = 'button' }) {
  return (
    <button className={styles.button} type={type} onClick={onClick}>
      {children}
    </button>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func,
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
}

export default Button
