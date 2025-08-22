import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { XCircle, X } from 'lucide-react'
import AnimatedCheck from './AnimatedCheck'

const Notification = ({ 
  isVisible, 
  type = 'success', 
  title, 
  message, 
  onClose 
}) => {
  const getIcon = () => {
    switch (type) {
      case 'success':
        return <AnimatedCheck size={48} strokeWidth={2.5} color="currentColor" />
      case 'error':
        return <XCircle size={48} />
      default:
        return <AnimatedCheck size={48} strokeWidth={2.5} color="currentColor" />
    }
  }

  const getStyles = () => {
    switch (type) {
      case 'success':
        return {
          background: 'var(--red-gradient)',
          borderColor: 'var(--red-primary)',
          iconColor: 'var(--white-pure)'
        }
      case 'error':
        return {
          background: 'rgba(220, 53, 69, 0.1)',
          borderColor: '#dc3545',
          iconColor: '#dc3545'
        }
      default:
        return {
          background: 'var(--silver-gradient)',
          borderColor: 'var(--silver-metallic)',
          iconColor: 'var(--black-deep)'
        }
    }
  }

  const styles = getStyles()

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          className="notification-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className="notification"
            initial={{ opacity: 0, scale: 0.9, y: 30 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 30 }}
            transition={{ 
              duration: 0.3, 
              type: "spring", 
              stiffness: 400,
              damping: 35
            }}
            style={{
              background: styles.background,
              borderColor: styles.borderColor
            }}
          >
            <button 
              className="notification-close"
              onClick={onClose}
              aria-label="Cerrar notificación"
            >
              <X size={20} />
            </button>
            
            <div className="notification-content">
              <div className="notification-icon-center" style={{ color: styles.iconColor }}>
                {getIcon()}
              </div>
              {title && <h4 className="notification-title">{title}</h4>}
              {message && <p className="notification-message">{message}</p>}
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  )
}

export default Notification
