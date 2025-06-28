// App.tsx
import { useState } from 'react';
import { Modal } from './Modal';

export default function App() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <button onClick={() => setOpen(true)}>Open Modal</button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <h2 style={{color:'black'}}>Hello from Modal!</h2>
      </Modal>
    </>
  );
}
