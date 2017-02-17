export const validateTarget = (target) => {
  let errorMessage;
  if (target.lat === 0) {
    errorMessage = "You must select a location for the target.";
  }
  if (target.lng === 0) {
    errorMessage = "You must select a location for the target.";
  }
  if (target.radius === 0) {
    errorMessage = "You must specify a radius.";
  }
  if (target.topic_id === 0) {
    errorMessage = "You must select a target topic.";
  }
  return errorMessage;
};

export const validateUserProfile = (settings) => {
  let errorMessage;
  if (settings.email === 0) {
      errorMessage = "You must enter an email.";
  }
  if (settings.currentPassword === 0) {
    errorMessage = "You must enter your current password.";
  }
  if (settings.newPassword === 0) {
    errorMessage = "You must enter a new Password.";
  }
  if (settings.confirmPassword === 0) {
    errorMessage = "You must confirm the new Password.";
  }
  if (settings.newPassword !== settings.confirmPassword) {
    errorMessage = "Password confirmation failed";
  }
  return errorMessage;
};
