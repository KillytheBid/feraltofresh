import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { clearMessages } from '../features/uiSlice';

const Toast = () => {
  const dispatch = useDispatch();
  const { success, error } = useSelector((state) => state.ui);

  useEffect(() => {
    if (success || error) {
      const timer = setTimeout(() => {
        dispatch(clearMessages());
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [success, error, dispatch]);

  return (
    <div className="fixed top-4 right-4 z-50 space-y-4">
      {success && (
        <div className="bg-green-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center animate-slideUp">
          <span className="mr-3">✓</span>
          <span>{success}</span>
        </div>
      )}
      {error && (
        <div className="bg-red-500 text-white px-6 py-4 rounded-lg shadow-lg flex items-center animate-slideUp">
          <span className="mr-3">✕</span>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
};

export default Toast;
