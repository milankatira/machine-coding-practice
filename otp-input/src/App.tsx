import './App.css'
import OTPInput from './components/otp-input';

export default function App() {
  return (
    <div className="App">
      <h1>OTP INPUT</h1>
      <OTPInput maxLength={6} onComplete={(val) => console.log(val)} />
    </div>
  );
}

