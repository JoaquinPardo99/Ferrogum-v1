import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { Mail, Phone, MapPin, Send, CheckCircle } from 'lucide-react'
import { useTranslation } from '../hooks/useTranslation'
import Notification from './Notification'
import AnimatedCheck from './AnimatedCheck'

const Contact = ({ isLoaded = true }) => {
  const { t } = useTranslation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  })
  const [errors, setErrors] = useState({})
  const [showNotification, setShowNotification] = useState(false)

  // Configuración de animación basada en el estado de carga
  const animationConfig = isLoaded ? {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true }
  } : {
    initial: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0 },
    viewport: { once: true }
  }

  const cardAnimationConfig = isLoaded ? {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6 },
    viewport: { once: true },
    whileHover: { 
      y: -5,
      transition: { duration: 0.3 }
    }
  } : {
    initial: { opacity: 1, y: 0 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0 },
    viewport: { once: true },
    whileHover: { 
      y: 0,
      transition: { duration: 0 }
    }
  }

  // Validación de nombre: solo letras y espacios
  const validateName = (name) => {
    const nameRegex = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ\s]+$/
    if (!name.trim()) {
      return 'El nombre es requerido'
    }
    if (!nameRegex.test(name)) {
      return 'El nombre solo puede contener letras y espacios'
    }
    if (name.trim().length < 2) {
      return 'El nombre debe tener al menos 2 caracteres'
    }
    return ''
  }

  // Validación de email
  const validateEmail = (email) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!email.trim()) {
      return 'El email es requerido'
    }
    if (!emailRegex.test(email)) {
      return 'Por favor ingresa un email válido'
    }
    return ''
  }

  // Validación de teléfono: solo números, espacios, +, - y ()
  const validatePhone = (phone) => {
    if (!phone.trim()) {
      return 'El teléfono es requerido' // Teléfono es requerido
    }
    const phoneRegex = /^[\d\s\+\-\(\)]+$/
    if (!phoneRegex.test(phone)) {
      return 'El teléfono solo puede contener números, espacios, +, - y paréntesis'
    }
    if (phone.replace(/\D/g, '').length < 7) {
      return 'El teléfono debe tener al menos 7 dígitos'
    }
    return ''
  }

  // Validación de mensaje
  const validateMessage = (message) => {
    if (!message.trim()) {
      return 'El mensaje es requerido'
    }
    if (message.trim().length < 10) {
      return 'El mensaje debe tener al menos 10 caracteres'
    }
    return ''
  }

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData({
      ...formData,
      [name]: value
    })
    
    // Validación en tiempo real
    let error = ''
    switch (name) {
      case 'name':
        error = validateName(value)
        break
      case 'email':
        error = validateEmail(value)
        break
      case 'phone':
        error = validatePhone(value)
        break
      case 'message':
        error = validateMessage(value)
        break
      default:
        break
    }
    
    setErrors({
      ...errors,
      [name]: error
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Validar todos los campos
    const nameError = validateName(formData.name)
    const emailError = validateEmail(formData.email)
    const phoneError = validatePhone(formData.phone)
    const messageError = validateMessage(formData.message)
    
    const newErrors = {
      name: nameError,
      email: emailError,
      phone: phoneError,
      message: messageError
    }
    
    setErrors(newErrors)
    
    // Verificar si hay errores
    const hasErrors = Object.values(newErrors).some(error => error !== '')
    
    if (hasErrors) {
      return
    }
    
    // Si no hay errores, proceder con el envío a WhatsApp
    const whatsappNumber = '51936928155' // Número sin + ni espacios
    const whatsappMessage = `¡Hola! Te escribo desde la web de FERROGUM.

*Nombre:* ${formData.name}
*Email:* ${formData.email}
*Teléfono:* ${formData.phone}

*Mensaje:*
${formData.message}`

    const whatsappURL = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`
    
    // Abrir WhatsApp en nueva ventana
    window.open(whatsappURL, '_blank')
    
    // Mostrar notificación de éxito
    setShowNotification(true)
    
    // Resetear formulario
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: ''
    })
    setErrors({})
  }



  return (
    <section id="contacto" className="contact section">
      <div className="container">
        <motion.div 
          className="section-header text-center"
          {...animationConfig}
        >
          <h2 className="section-title">
            {t('contact.title')} <span className="text-red">{t('contact.titleHighlight')}</span>
          </h2>
          <p className="section-subtitle">
            {t('contact.subtitle')}
          </p>
        </motion.div>

        <div className="contact-content">

          <motion.div 
            className="contact-form"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit} className="form">
              <div className="form-header">
                <h3>{t('contact.form.title')}</h3>
                <p>{t('contact.form.subtitle')}</p>
              </div>

              <div className="form-group">
                <label htmlFor="name">{t('contact.form.name')} {t('contact.form.required')}</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={errors.name ? 'error' : ''}
                  placeholder={t('contact.form.namePlaceholder')}
                />
                {errors.name && <span className="error-message">{errors.name}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="email">{t('contact.form.email')} {t('contact.form.required')}</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={errors.email ? 'error' : ''}
                  placeholder={t('contact.form.emailPlaceholder')}
                />
                {errors.email && <span className="error-message">{errors.email}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="phone">{t('contact.form.phone')} {t('contact.form.required')}</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  className={errors.phone ? 'error' : ''}
                  placeholder={t('contact.form.phonePlaceholder')}
                />
                {errors.phone && <span className="error-message">{errors.phone}</span>}
              </div>

              <div className="form-group">
                <label htmlFor="message">{t('contact.form.message')} {t('contact.form.required')}</label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  className={errors.message ? 'error' : ''}
                  rows="4"
                  placeholder={t('contact.form.messagePlaceholder')}
                ></textarea>
                {errors.message && <span className="error-message">{errors.message}</span>}
              </div>

              <div className="form-submit">
                <button 
                  type="submit" 
                  className="btn btn-primary btn-large"
                  disabled={false} // isSubmitting is removed
                >
                  {t('contact.form.submit')}
                </button>
              </div>
            </form>
          </motion.div>
        </div>

        <motion.div 
          className="contact-cta"
          {...cardAnimationConfig}
        >
          <div className="cta-card">
            <h3>{t('contact.cta.title')}</h3>
            <p>{t('contact.cta.description')}</p>
            <a href="mailto:ferrogum.peru@gmail.com" className="btn btn-primary btn-large">
              {t('contact.cta.button')}
            </a>
          </div>
        </motion.div>
      </div>
      
      <Notification
        isVisible={showNotification}
        type="success"
        title="¡Redirigiendo a WhatsApp!"
        message="Tu mensaje se ha preparado y se abrirá WhatsApp para enviarlo."
        onClose={() => setShowNotification(false)}
      />
    </section>
  )
}

export default Contact
