// import Validator from 'validator';
import isEmpty from 'lodash/isEmpty';

export default function validateInput(data){

  let errors = {};
  console.log(data);
  // TODO: review this
  // if (!Validator.equals(data.password, data.passwordConfirmation)) {
  //   errors.passwordConfirmation = "Passwords must match";
  // }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}
