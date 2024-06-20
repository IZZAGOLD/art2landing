import styles from './styles.module.scss'
import cn from 'classnames'
import {
  ChangeEventHandler,
  forwardRef,
  InputHTMLAttributes,
  useState,
} from 'react'

type InputStyles = {
  containerStyle: string
  inputStyle: string
}

export interface InputProps
  extends Omit<
    InputHTMLAttributes<HTMLInputElement>,
    'value' | 'onChange' | 'style'
  > {
  style?: InputStyles
  value?: string
  onChange?: ChangeEventHandler<HTMLInputElement>
  errorText?: string
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ onChange, style, errorText, value, ...props }, ref) => {
    const [isFocused, setIsFocused] = useState<boolean>(false)

    return (
      <div className={cn(styles.inputContainer, style?.containerStyle || '')}>
        <div
          className={cn(
            styles.input,
            props.disabled ? styles.disabled : '',
            isFocused ? styles.focus : '',
            errorText ? styles.error : ''
          )}
        >
          <input
            {...props}
            onFocus={(e) => {
              props.onFocus?.(e)
              setIsFocused(true)
            }}
            onBlur={(e) => {
              props.onBlur?.(e)
              setIsFocused(false)
            }}
            onChange={onChange}
            value={value}
            ref={ref}
            className={cn(style?.inputStyle || '')}
          />
        </div>
        {!!errorText && (
          <span className={cn(styles.errorText, 'body3')}>{errorText}</span>
        )}
      </div>
    )
  }
)

Input.displayName = 'Input'
