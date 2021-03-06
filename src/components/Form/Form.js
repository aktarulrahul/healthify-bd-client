import React from 'react';
import logo from '../../images/logo/logo.png';
const Form = ({
  type,
  signInUsingGoogle,
  signInUsingGithub,
  handleSubmission,
  handleEmailChange,
  handlePasswordChange,
  handleNameChange,
  error,
  toggleLogin,
  handleRestPassword,
}) => {
  return (
    <div className="lg:w-1/3 md:w-2/3 px-2 bg-green-50 rounded shadow-lg mx-auto pt-1">
      <img src={logo} className="w-full mx-auto mb-5" alt="" />
      <form onSubmit={handleSubmission}>
        {type === 'signin' ? (
          <></>
        ) : (
          <>
            <input
              required
              onBlur={handleNameChange}
              type="text"
              placeholder="Name"
              className="border border-gray-400 rounded p-2 bg-gray-100 w-full mb-3"
            />
            <br />
          </>
        )}
        <input
          required
          onBlur={handleEmailChange}
          type="text"
          placeholder="Email"
          className="border border-gray-400 rounded p-2 bg-gray-100 w-full mb-3"
        />
        <br />
        <input
          required
          onBlur={handlePasswordChange}
          type="password"
          placeholder="Password"
          className="border border-gray-400 rounded p-2 bg-gray-100 w-full mb-3"
        />
        <div className="flex justify-between items-center text-gray-500 my-2">
          <div>
            <input
              onChange={toggleLogin}
              type="checkbox"
              id="vehicle1"
              className="my-3"
            />
            <label htmlFor="account"> Already have account?</label>
          </div>
          <div>
            <button onClick={handleRestPassword}>Forgot Password?</button>
          </div>
        </div>

        <button
          type="submit"
          className="border border-green-400 rounded p-2 bg-green-600 w-full mb-3 text-white"
        >
          {type === 'signin' ? <>Signin</> : <>Registration</>}
        </button>
      </form>
      <p className="text-center text-red-500">{error}</p>
      <p className="text-center text-gray-500 mx-auto mb-3">or</p>
      <div className=" flex justify-between ">
        <button
          onClick={signInUsingGoogle}
          className="w-2/3 mr-2 border border-red-500 rounded p-1 bg-red-500 mb-3 text-white "
        >
          <i className="fab fa-google text-xl px-1 "></i> Google Sign In
        </button>
        <button
          onClick={signInUsingGithub}
          className="w-2/3 ml-2 border border-gray-600 rounded p-1 bg-gray-600 mb-3 text-white "
        >
          <i className="fab fa-github text-xl px-1 "></i> Github Sign In
        </button>
      </div>
    </div>
  );
};

export default Form;
