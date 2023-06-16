import styles from './EditInput.module.scss'
import clsx from "clsx";

export default function EditInput ({ label, type, value, placeholder, onChange, notification, wordsLimit }) {
  const inputClassName = clsx(styles.input, { [styles.active]: (value || '').length > wordsLimit})
  const noteClassName = clsx(styles.notification, { [styles.active]: (value || '').length > wordsLimit })
  const countClassName = clsx(styles.count, { [styles.active]: (value || '').length > 0 })
  return (
    <>
      <div className={styles.container}>
        <label className={styles.label}>{label}</label>
        <textarea
          className={inputClassName}
          type={type || 'text'}
          value={value ?? ''}
          placeholder={placeholder}
          onChange={(event) => onChange?.(event.target.value)}
        />
      </div>
      <div className={styles.noteBox}>
        <div className={noteClassName}>
          {notification}
        </div>
        <span className={countClassName}>{value.length}/{wordsLimit}</span>
      </div>
    </>
  )
}