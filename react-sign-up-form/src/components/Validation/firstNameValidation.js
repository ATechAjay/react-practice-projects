const firstNameValidation = (firstName) => {
  let errors = "";

  if (!firstName) errors = "First name is required.";
  else if (!/^[a-zA-Z]+$/.test(firstName))
    errors = "First name should only contain letters.";
  else if (firstName.length <= 2)
    errors = "First name should be at least 3 characters long.";

  return errors;
};

export default firstNameValidation;
