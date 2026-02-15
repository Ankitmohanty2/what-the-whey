import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

function ErrorBoundary({ children }) {
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const handleError = (error) => {
      console.error('What The Whey Error:', error);
      setHasError(true);
    };

    const handleUnhandledRejection = (event) => {
      console.error('What The Whey Promise Error:', event.reason);
      setHasError(true);
    };

    window.addEventListener('error', handleError);
    window.addEventListener('unhandledrejection', handleUnhandledRejection);

    return () => {
      window.removeEventListener('error', handleError);
      window.removeEventListener('unhandledrejection', handleUnhandledRejection);
    };
  }, []);

  const handleReset = () => {
    setHasError(false);
  };

  if (hasError) {
    return (
      <div
        style={{
          minHeight: '100vh',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          background: '#FFF6ED',
          fontFamily: "'DM Sans', sans-serif",
          padding: '20px',
        }}
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          style={{
            background: 'rgba(255,255,255,0.85)',
            backdropFilter: 'blur(12px)',
            borderRadius: '20px',
            padding: '40px',
            textAlign: 'center',
            maxWidth: '400px',
            border: '1px solid rgba(220,195,170,0.3)',
            boxShadow: '0 10px 40px rgba(92,61,46,0.1)',
          }}
        >
          <div
            style={{
              fontSize: '48px',
              marginBottom: '16px',
            }}
          >
            ⚠️
          </div>
          <h2
            style={{
              fontFamily: "'DM Serif Display', Georgia, serif",
              fontSize: '24px',
              color: '#5C3D2E',
              marginBottom: '12px',
            }}
          >
            Oops! Something went wrong
          </h2>
          <p
            style={{
              fontSize: '14px',
              color: '#8B6E5A',
              marginBottom: '24px',
              lineHeight: '1.6',
            }}
          >
            We're sorry, but something unexpected happened. Please try refreshing the page.
          </p>
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={handleReset}
            style={{
              background: '#E07B3C',
              color: 'white',
              border: 'none',
              borderRadius: '12px',
              padding: '12px 28px',
              fontSize: '14px',
              fontWeight: '600',
              fontFamily: "'DM Sans', sans-serif",
              cursor: 'pointer',
            }}
          >
            Try Again
          </motion.button>
        </motion.div>
      </div>
    );
  }

  return children;
}

export default ErrorBoundary;
