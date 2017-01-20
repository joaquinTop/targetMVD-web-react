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
