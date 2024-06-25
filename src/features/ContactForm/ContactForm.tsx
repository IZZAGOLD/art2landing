'use client'
import React, { useState } from 'react'
import { useForm } from '@formspree/react'
import { Input } from '@ui/Input/Input'
import { useTranslations } from 'next-intl'
import styles from './styles.module.scss'
import { IconArrowUp } from '@ui/icons/Icon.ArrowUp'
import { Checkbox } from '@ui/Checkbox/Checkbox'
import { Textarea } from '@ui/Textarea/Textarea'

export function ContactForm() {
  const [state, handleSubmit] = useForm('moqggkzl')
  const t = useTranslations()

  const [isAgreed, setIsAgreed] = useState(false)

  const [name, setName] = useState('')

  const [email, setEmail] = useState('')

  const [message, setMessage] = useState('')

  const [errors, setErrors] = useState({
    name: '',
    email: '',
  })

  if (state.succeeded) {
    return <p>Thanks for joining!</p>
  }

  return (
    <form className={styles.wrapper} onSubmit={handleSubmit}>
      <h2>{t('weWillAnswer')}</h2>
      <div className={styles.inputs}>
        <Input
          value={name}
          onChange={(e) => setName(e.target.value)}
          id='name'
          name='name'
          placeholder={t('yourName')}
        />
        <Input
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          id='email'
          name='email'
          placeholder={'Email'}
        />
        <Textarea
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
            <span className={styles.processing}>
              {t('processingPersonalData')}
            </span>
          </span>
        }
      />

      {/*<ValidationError prefix='Email' field='email' errors={state.errors} />*/}

      <button
        disabled={state.submitting}
        className={styles.button}
        type='submit'
      >
        <span className={'h4'}>{t('send')}</span>
        <IconArrowUp />
      </button>
    </form>
  )
}
