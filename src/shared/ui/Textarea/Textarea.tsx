import { TextareaHTMLAttributes, useEffect, useRef, useState } from 'react'
import './styles.scss'
import cn from 'classnames'

interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  errorText?: string
  classNamesContainer?: string
}

export const Textarea = ({
  value,
  onChange,
  title,
  errorText,
  classNamesContainer,
  ...props
}: TextAreaProps) => {
  const textAreaRef = useRef<HTMLTextAreaElement>(null)
  const [isFocused, setIsFocused] = useState<boolean>(false)

  useEffect(() => {
    if (!textAreaRef.current) return
    textAreaRef.current.style.height = 'inherit'
    const scrollHeight = textAreaRef.current.scrollHeight
    textAreaRef.current.style.height = `${scrollHeight}px`
  }, [value])

  function toggleIsFocused() {
    setIsFocused((prev) => !prev)
  }

  return (
    <div className={'main-text-area-wrapper'}>
      <div
        className={cn(
          classNamesContainer ?? '',
          'text-area-wrapper',
          isFocused ? 'focus' : '',
          errorText ? 'error' : ''
        )}
      >
        <textarea
          onFocus={(e) => {
            props.onFocus?.(e)
            toggleIsFocused()
          }}
          onBlur={(e) => {
            props.onBlur?.(e)
            toggleIsFocused()
          }}
          className={'area'}
          ref={textAreaRef}
          rows={1}
          style={{
            overflowY: 'auto',
            maxHeight: 'calc(20px * 7)', // 1.2em is the approximate height of one line, adjust as needed
          }}
          value={value}
          onChange={onChange}
          {...props}
        />
      </div>
      {!!errorText && (
        <span className={cn('error-text', 'body3')}>{errorText}</span>
      )}
    </div>
  )
}
