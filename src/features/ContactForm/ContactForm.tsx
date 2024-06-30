'use client'
import React, { FormEvent, useEffect, useState } from 'react'
import { useForm } from '@formspree/react'
import { Input } from '@ui/Input/Input'
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import { IconArrowUp } from '@ui/icons/Icon.ArrowUp'
import { Checkbox } from '@ui/Checkbox/Checkbox'
import { Textarea } from '@ui/Textarea/Textarea'
import { Link } from '@lib/internalization/index.nextIntl'
import { ModalSuccessfullySubmitted } from '@ui/ModalSuccessfullySubmitted/ModalSuccessfullySumbitted'
import cn from 'classnames'

export const emailRegex =
  /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/

export function ContactForm() {
  const [state, handleSubmit] = useForm('mldreero')
  const t = useTranslations()

  const [isVisibleModal, setIsVisibleModal] = useState(false)

  const [isAgreed, setIsAgreed] = useState(false)

  const [name, setName] = useState('')

  const [email, setEmail] = useState('')

  const [message, setMessage] = useState('')

  const [errors, setErrors] = useState({
    name: '',
    email: '',
    message: '',
    somethingWentWrong: '',
  })

  useEffect(() => {
    if (!state.succeeded) return
    setIsVisibleModal(true)
    setErrors({
      name: '',
      email: '',
      message: '',
      somethingWentWrong: '',
    })
    setName('')
    setIsAgreed(false)
    setEmail('')
    setMessage('')
  }, [state.succeeded])

  useEffect(() => {
    if (!state.errors) return
    setErrors((prev) => ({
      ...prev,
      somethingWentWrong: t('somethingWentWrong'),
    }))
  }, [state.errors, t])

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (
      name.length > 3 &&
      name.length < 50 &&
      message.length > 3 &&
      message.length < 1000 &&
      isAgreed &&
      emailRegex.test(email)
    ) {
      handleSubmit(e).catch(() => {})
      return
    }

    const errors = {} as Record<string, string>

    if (name.length < 3 || name.length > 50) {
      errors.name = t('from3to50characters')
    }
    if (!emailRegex.test(email)) {
      errors.email = t('incorrectEmail')
      setErrors((prev) => ({ ...prev, email: t('incorrectEmail') }))
    }
    if (message.length < 3 || message.length > 1000) {
      errors.message = t('from3to1000characters')
    }
    setErrors((prev) => ({ ...prev, ...errors }))
  }

  return (
    <form className={styles.wrapper} onSubmit={onSubmit}>
      <h2>{t('weWillAnswer')}</h2>
      <div className={styles.inputs}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id='name'
          name='name'
          errorText={errors.name}
          placeholder={t('yourName')}
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id='email'
          name='email'
          errorText={errors.email}
          placeholder={'Email'}
        />
        <Textarea
          errorText={errors.message}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder={t('yourMessage')}
        />
      </div>
      <Checkbox
        checked={isAgreed}
        onClick={() => setIsAgreed((prev) => !prev)}
        label={
          <span className={'body2'}>
            {t('iAgreeTo')}{' '}
            <Link
              href={'/documents#personal-data'}
              className={styles.processing}
            >
              {t('processingPersonalData')}
            </Link>
          </span>
        }
      />

      {errors.somethingWentWrong && (
        <span className={cn(styles.errorText, 'body3')}>
          {errors.somethingWentWrong}
        </span>
      )}

      <button
        disabled={state.submitting}
        className={styles.button}
        type='submit'
      >
        <span className={'h4'}>{t('send')}</span>
        <IconArrowUp />
      </button>

      <ModalSuccessfullySubmitted
        setIsOpen={setIsVisibleModal}
        isOpen={isVisibleModal}
      />
    </form>
  )
}
