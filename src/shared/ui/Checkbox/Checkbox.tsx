import styles from './styles.module.scss'
import { ChangeEventHandler, InputHTMLAttributes, ReactNode } from 'react'
import cn from 'classnames'

interface CheckboxProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string | ReactNode
  onChange?: ChangeEventHandler<HTMLInputElement>
  checked?: boolean
}

export const Checkbox = ({
  label,
  onChange,
  checked = true,
  ...props
}: CheckboxProps) => {
  return (
    <label className={styles.wrapper}>
      <input
        className={styles.input}
        onChange={onChange}
        type='checkbox'
        {...props}
      />
      <span
        className={cn(styles.checkbox, checked ? styles.active : '')}
        aria-hidden='true'
      />
      {typeof label === 'string' ? (
        <span className={'body2'}>{label}</span>
      ) : (
        label
      )}
    </label>
  )
}
