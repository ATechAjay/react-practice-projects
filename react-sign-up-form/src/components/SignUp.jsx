import { useState } from "react";
import firstNameValidation from "./Validation/firstNameValidation";
import emailValidation from "./Validation/emailValidation";

const SignUp = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const [signInForm, setSignInForm] = useState(false);

  function firstNameHandler(e) {
    setFirstName(e.target.value);
  }

  function lastNameHandler(e) {
    setLastName(e.target.value);
  }

  function emailHandler(e) {
    setEmail(e.target.value);
  }

  function passwordHandler(e) {
    setPassword(e.target.value);
  }

  function clickHandler() {
    setSignInForm(!signInForm);
  }
  console.log(signInForm);
  function submitHandler(e) {
    e.preventDefault();

    // Validatiing first Name
    const firstNameValidationErr = firstNameValidation(firstName);
    const emailValidationErr = emailValidation(email);

    if (firstNameValidationErr) {
      setError(firstNameValidationErr);
      return;
    } else if (emailValidationErr) {
      setError(emailValidationErr);
      return;
    } else {
      setError("");
      alert(signInForm ? "Successfully signed in" : "Form Submitted");
    }
  }

  return (
    <div className="bg-gray-500 p-5 h-auto w-[350px] text-xl rounded-md border-solid border-2 border-white">
      <form action="" onSubmit={submitHandler}>
        <h1 className="font-bold text-4xl mb-5">
          {signInForm ? "Sign In" : "Sign Up"}
        </h1>

        {
          // If sign in form is true then it will show the last name field
          signInForm ? null : (
            <>
              <div className="flex gap-2 flex-col mb-2">
                <label htmlFor="fName" className="mb-[2px]">
                  First Name
                </label>
                <input
                  className="rounded-sm p-1 text-black"
                  type="text"
                  id="fName"
                  placeholder="First Name"
                  onInput={firstNameHandler}
                  value={firstName}
                />
              </div>

              <div className="flex gap-2 flex-col mb-2">
                <label className="mb-" htmlFor="lName">
                  Last Name
                </label>
                <input
                  className="rounded-sm p-1 text-black"
                  type="text"
                  id="lName"
                  placeholder="Last Name"
                  onInput={lastNameHandler}
                  value={lastName}
                />
              </div>
            </>
          )
        }

        <div className="flex gap-2 flex-col mb-2">
          <label className="mb-" htmlFor="email">
            Email
          </label>
          <input
            className="rounded-sm p-1 text-black"
            type="email"
            id="email"
            placeholder="Email address"
            onInput={emailHandler}
            value={email}
          />
        </div>

        <div className="flex gap-2 flex-col mb-2">
          <label className="mb-" htmlFor="password">
            Password
          </label>
          <input
            className="rounded-sm p-1 text-black"
            type="password"
            id="password"
            placeholder="Password"
            onInput={passwordHandler}
            value={password}
          />
        </div>
        <p className="text-red-600 mt-2 font-semibold">{error}</p>

        <button
          className="bg-black text-white w-full mt-5 px-2 py-2 font-bold rounded-sm"
          type="submit"
        >
          {signInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="mt-2">
          {signInForm ? "New user?" : "Already a user?"}
          <span onClick={clickHandler} className="text-red-500 cursor-pointer">
            {signInForm ? " Sign up." : " Sign in."}
          </span>
        </p>
      </form>
    </div>
  );
};

export default SignUp;
