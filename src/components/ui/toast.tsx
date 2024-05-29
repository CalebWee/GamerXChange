// components/Toast.tsx
import React from 'react';
import { ToastContainer, toast, ToastContentProps, ToastOptions } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const toastStyles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center' as React.CSSProperties['textAlign'],
    borderRadius: '8px',
    padding: '16px',
    fontSize: '16px',
    fontWeight: 'bold',
  },
  success: {
    backgroundColor: '#38a169', // Green
    color: 'white',
  },
  error: {
    backgroundColor: '#e53e3e', // Red
    color: 'white',
  },
  info: {
    backgroundColor: '#3182ce', // Blue
    color: 'white',
  },
  warning: {
    backgroundColor: '#dd6b20', // Yellow
    color: 'white',
  },
  default: {
    backgroundColor: '#2d3748', // Gray
    color: 'white',
  },
};

const Toast = () => {
  return (
    <ToastContainer
      position="bottom-center"  // Changed position to top-center
      autoClose={5000}
      hideProgressBar  // Hide the progress bar
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      toastClassName="custom-toast"
      closeButton={<span style={{ color: 'white' }}>×</span>} // Custom close button
    />
  );
};

// Utility function to show a toast
export const showToast = (
  message: string | number | bigint | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | Iterable<React.ReactNode> | React.ReactPortal | Promise<React.AwaitedReactNode> | ((props: ToastContentProps<unknown>) => React.ReactNode) | null | undefined,
  type = 'default'
) => {
  let style: React.CSSProperties = { ...toastStyles.container, ...toastStyles.default };
  let icon: React.ReactNode = null;
  switch (type) {
    case 'success':
      style = { ...toastStyles.container, ...toastStyles.success };
      break;
    case 'error':
      style = { ...toastStyles.container, ...toastStyles.error };
      break;
    case 'info':
      style = { ...toastStyles.container, ...toastStyles.info };
      break;
    case 'warning':
      style = { ...toastStyles.container, ...toastStyles.warning };
      break;
    default:
      style = { ...toastStyles.container, ...toastStyles.default };
      break;
  }

  toast(message, {
    className: '',
    bodyClassName: '',
    progressClassName: '',
    style,
  });
};

export default Toast;
