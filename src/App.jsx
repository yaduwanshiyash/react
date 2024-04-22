import  { useState } from 'react';
import Render from './Components/Render';

function MyComponent() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [gender, setGender] = useState('male');
  const [country, setCountry] = useState('USA');

  const handleNameChange = (event) => {
    setName(event.target.value);
  };

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handleGenderChange = (event) => {
    setGender(event.target.value);
  };

  const handleCountryChange = (event) => {
    setCountry(event.target.value);
  };

  console.log('Name:', name);
  console.log('Email:', email);
  console.log('Gender:', gender);
  console.log('Country:', country);

  return (
    <div className=' h-screen w-full '>
      <Render/>
      <input type="text" value={name} onChange={handleNameChange} placeholder="Name" />
      <input type="email" value={email} onChange={handleEmailChange} placeholder="Email" />
      <div>
        <label>
          Male
          <input type="radio" value="male" checked={gender === 'male'} onChange={handleGenderChange} />
        </label>
        <label>
          Female
          <input type="radio" value="female" checked={gender === 'female'} onChange={handleGenderChange} />
        </label>
      </div>
      <div>
        <select value={country} onChange={handleCountryChange}>
          <option value="USA">USA</option>
          <option value="Canada">Canada</option>
          <option value="UK">UK</option>
          <option value="Australia">Australia</option>
        </select>
      </div>

      <p className=' w-full bg-black text-white'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat totam commodi in. Quae, asperiores?</p>
    </div>
    
  );
}

export default MyComponent;
