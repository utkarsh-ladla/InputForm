import React,{ useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [inputFields, setInputFields] = useState([{value: ''}])

  const handleInputchange = (index, e) => {
    const values = [...inputFields];
    values[index].value = e.target.value;
    setInputFields(values);
  }

    // Adding input field
    const handleAddField = () => {
      setInputFields([...inputFields, { value: '' }]);
    };
  
    // Removing input field
    const handleRemoveField = (index) => {
      const values = [...inputFields];
      values.splice(index, 1);
      setInputFields(values);
    };
  
    const handleSubmit = (e) => {
      e.preventDefault();
      console.log('Input Fields:', inputFields);
    };

  return (
  <>
    <h1>Input form</h1>
    <h3>(Build a dynamic form that adds and removes input fields based on user input.)</h3>
    <form onSubmit={handleSubmit}>
      {inputFields.map((inputField, index) => (
        <div key={index} style={{ display: 'flex', alignItems:'center'}} >
          <input type="text"
          value={inputField.value}
          onChange={(e) =>  handleInputchange(index, e)} 
          placeholder={`Input field ${index + 1}`}
         />
         <button type='button' onClick={() => handleRemoveField(index)} style = {{marginLeft: '10px'}}>
          Remove
         </button>

        </div>
      ))}
      <button type='button' onClick={handleAddField} style={ {marginTop: '10px'}}>
        Add Field
      </button>
      <button type="submit"  style={{ marginTop: '10px' }}>
        Submit
      </button>
    </form>
    </>
  )
}

export default App
