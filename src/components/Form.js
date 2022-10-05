import { useState } from 'react'
import Input from './Input'
import './Form.css'

function Form() {
  const [formUser, setFormUser] = useState({
    name: '',
    email: '',
    password: '',
    confirmPassword: '',
  })

  const inputs = [
    {
      label: 'Name',
      type: 'text',
      name: 'name',
      id: 'name',
      pattern: '^[a-zA-Z0-9]{3,}$',
      placeholder: 'Name',
      errorMsg:
        'Name should contain no special characters and should be at least of 3 characters',
      required: true,
    },
    {
      label: 'Email',
      type: 'email',
      name: 'email',
      id: 'email',
      placeholder: 'Email',
      errorMsg: 'Please provide an valid Email',
      required: true,
    },
    {
      label: 'Password',
      type: 'password',
      name: 'password',
      id: 'password',
      pattern: `^(?=.*[0-9])(?=.*[a-zA-Z])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,}$`,
      placeholder: 'Password',
      errorMsg:
        'Password should include at least one character one number and one special character and should be at least 6 characters',
      required: true,
    },
    {
      label: 'Confirm Password',
      type: 'password',
      name: 'confirmPassword',
      id: 'confirmPassword',
      placeholder: 'Password',
      pattern: formUser.password,
      errorMsg: 'Password do not match',
      required: true,
    },
  ]

  const handleOnChange = (e) => {
    setFormUser((prevFormUser) => ({
      ...prevFormUser,
      [e.target.name]: e.target.value,
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(`Form Submitted Successfully.`)
    setFormUser({
      name: '',
      email: '',
      password: '',
      confirmPassword: '',
    })
  }

  return (
    <div className="form">
      <form onSubmit={handleSubmit}>
        <h1>Register</h1>
        {inputs.map((input, index) => (
          <Input
            key={index}
            {...input}
            onChange={handleOnChange}
            value={formUser}
          />
        ))}
        <button>sing up</button>
      </form>
    </div>
  )
}

export default Form
