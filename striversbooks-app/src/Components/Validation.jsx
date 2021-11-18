export default function Validation(values) {
  let errors = {};
  if (!values.name) {
    errors.name = 'Name is required';
  } else if (!/[0-9a-zA-Z]{2,}/.test(values.name)) {
    errors.name = 'Your name should have more than 2 letters';
  }
  if (!values.surname) {
    errors.surname = 'Surname is required';
  } else if (!/[0-9a-zA-Z]{3,}/.test(values.surname)) {
    errors.surname = 'Surname is invalid';
  }
  if (!values.email) {
    errors.email = 'Email address is required';
  } else if (!/\S+@\S+\.\S+/.test(values.email)) {
    errors.email = 'Email address is invalid';
  }
  if (!values.password) {
    errors.password = 'Password is required';
  } else if (values.password.length < 8) {
    errors.password = 'Password must be 8 or more characters';
  }
  if (!values.passwordConfirm) {
    errors.password = 'Password is required';
  } else if (values.passwordConfirm.length < 8) {
    errors.passwordConfirm = 'Passwords needs to match';
  }
  return errors;
};