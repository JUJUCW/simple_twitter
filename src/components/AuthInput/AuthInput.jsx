import styles from './AuthInput.module.scss'

export default function AuthInput ({ label, type, value, placeholder, onChange }) {
  return (
    <div className={styles.container}>
      <label className={styles.label}>{label}</label>
      <input
        className={styles.input} 
        type={type || 'text'}
        value={value}
        placeholder={placeholder}
        onchange={(event) => onChange?.(event.target.value)}
      />
    </div>
  )
}