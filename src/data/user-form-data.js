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

export { inputs }
