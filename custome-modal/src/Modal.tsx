// Modal.tsx
import React, { useEffect } from 'react';

export const Modal = ({ open, onClose, children }: { open: boolean, onClose: () => void, children: React.ReactNode }) => {
  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', handleEsc);
    return () => document.removeEventListener('keydown', handleEsc);
  }, []);

  if (!open) return null;

  return (
    <div style={{
      position: 'fixed', top: 0, left: 0, right: 0, bottom: 0,
      backgroundColor: 'rgba(0,0,0,0.5)', display: 'flex',
      alignItems: 'center', justifyContent: 'center',
    }}
      onClick={onClose}
    >
      <div onClick={(e) => e.stopPropagation()}
        style={{ background: 'white', padding: 20, borderRadius: 8 }}
      >
        {children}
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};
