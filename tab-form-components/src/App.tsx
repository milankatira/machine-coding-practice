import { useState } from 'react'
import './App.css'
import { formConfig } from './constant'

function App() {

  const [currentTab, setCurrentTab] = useState(0);
  const [errors, setErrors] = useState({});
  const [formData, setformData] = useState(formConfig.reduce((acc, tab) => {
    tab.fields.forEach(field => {
      acc[field.name] = field.type == 'checkbox' ? false : ''
    })
    return acc
  }, {}))



  const tab = formConfig[currentTab];


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    setformData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }))
  }


  const handlePrev = () => {
    setCurrentTab(prev => prev - 1)
  }

  const validateForm = () => {
    const errors = {}

    tab.fields.forEach(({ name, validation, errorMsg }) => {
      const val = formData[name];
      if (validation.required && (val === '' || val === false)) errors[name] = errorMsg || 'Required';
      else if (validation.pattern && !validation.pattern.test(val))
        errors[name] = errorMsg || 'Invalid';
    });

    setErrors(errors);
    return Object.keys(errors).length === 0;

  }

  const handleNext = () => {
    if (validateForm()) {
      setCurrentTab(prev => prev + 1)
    }
  }
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (validateForm()) {
      console.log('Submitted:', formData);
      alert(JSON.stringify(formData, null, 2));
    }
  }


  return (
    <>
      <div>
        <h2>Tabbed Form Example</h2>
        <div style={{ display: 'flex', gap: '8px', marginBottom: '16px' }}>
          {formConfig.map((t, i) => (
            <button
              key={i}
              disabled={i !== currentTab && i > currentTab}
              onClick={() => setCurrentTab(i)}
              style={{
                padding: '8px',
                borderBottom: currentTab === i ? '2px solid blue' : undefined,
                cursor: i <= currentTab ? 'pointer' : 'not-allowed',
                opacity: i <= currentTab ? 1 : 0.6,
              }}
            >
              {t.label}
            </button>
          ))}
        </div>


        <form onSubmit={handleSubmit}>
          {
            tab.fields.map((field, i) => (
              <div key={i}>
                <label>{field.label}</label>
                {field.type === 'checkbox' ? (
                  <input type="checkbox" name={field.name} checked={formData[field.name]}
                    onChange={handleChange}
                  />
                ) : (
                  <input type={field.type} name={field.name} value={formData[field.name]}
                    onChange={handleChange}
                  />
                )}
                {errors[field.name] && <p style={{ color: 'red' }}>{errors[field.name]}</p>}
              </div>
            ))
          }

          <div style={{ marginTop: '16px', display: 'flex', gap: '8px' }}>
            <button type="button" onClick={handlePrev} disabled={currentTab === 0}>
              Previous
            </button>
            {currentTab < formConfig.length - 1 && (
              <button type="button" onClick={handleNext}>
                Next
              </button>
            )}
            {currentTab === formConfig.length - 1 && <button type="submit">Submit</button>}
          </div>
        </form>


      </div>
    </>
  )
}

export default App
