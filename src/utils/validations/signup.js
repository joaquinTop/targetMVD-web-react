// import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){

  let errors = {};
  // TODO: review this
  if (!(data.password == data.passwordConfirmation)) {
    errors.passwordConfirmation = "Passwords must match";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
