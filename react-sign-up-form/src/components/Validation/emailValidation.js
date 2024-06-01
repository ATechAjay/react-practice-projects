const emailValidation = (email) => {
  let error = "";

  if (!email) error = "Email is required.";
  else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(email))
    error = "Invalid email address.";

  return error;
};

export default emailValidation;
