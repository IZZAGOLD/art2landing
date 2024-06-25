'use client'
import './styles.scss'
import { useEffect, useState } from 'react'
import cn from 'classnames'

type LangSwitcherProps = {
  data: Array<string>
  onClick: (option: string) => void
  defaultValue: string
}
export const LangSwitcher = ({
  data,
  defaultValue,
  onClick,
}: LangSwitcherProps) => {
  const [isVisibleList, setIsVisibleList] = useState(false)

  function toggleIsVisibleList() {
    setIsVisibleList((prev) => !prev)
  }

  function handleClickOutside(e) {
    if (!e.target.closest('.custom-select-container')) {
      setIsVisibleList(false)
    }
  }

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className={'custom-select-container'}>
      <div
        className={isVisibleList ? 'selected-text active' : 'selected-text'}
        onClick={toggleIsVisibleList}
      >
        <span className={'body2'}>{defaultValue}</span>
      </div>

      <ul className={cn('select-options', isVisibleList ? 'visible' : '')}>
        {data.map((option) => {
          return (
            <li
              className={
                defaultValue === option
                  ? 'custom-select-option active'
                  : 'custom-select-option'
              }
              key={option}
              onClick={() => {
                setIsVisibleList(false)
                onClick(option)
              }}
            >
              <span className={'body2'}>{option}</span>
            </li>
          )
        })}
      </ul>
    </div>
  )
}
