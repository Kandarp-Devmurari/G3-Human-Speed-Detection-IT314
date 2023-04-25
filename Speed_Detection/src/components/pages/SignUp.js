import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
// import "./SignUp.css";
// import "../../App.css";

function SignUp() {
  const navigate = useNavigate();
  const [user, setUser] = useState({ email: "", password: "" });
  let value, id;

  //Form Data
  const handleInput = (e) => {
    // console.log(e.target.value);
    // console.log(e);
    value = e.target.value;
    id = e.target.id;
    setUser({ ...user, [id]: value });
    console.log(user);
  };

  //Login
  const handleLogin = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const res = await fetch("/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    const data = await res.json();
    console.log("data", data);
    if (data.status === 400 || !data) {
      window.alert("Invalid login");
      console.log("invalid login", data);
    } else {
      window.alert(data.message);
      // window.alert("Success login");
      if (data.message === "Login successful" && data.user != "--") {
        console.log("Success login", data.message, data.user);
        localStorage.setItem("user_email", data.user.email);
        // console.log(localStorage);
        const token = localStorage.getItem("user_email");
        console.log(token);
        navigate("/Upload");
      }
    }
  };

  //SignUp
  const handleSignUp = async (e) => {
    e.preventDefault();
    const { email, password } = user;
    const res = await fetch("/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
      }),
    });
    console.log("res", res);
    const data = await res.json();
    console.log("data", data);
    if (data.status === 422 || !data) {
      window.alert("Invalid Register");
      console.log("invalid register", data);
    } else {
      window.alert("Success");
      console.log("Success", data.message, data.user);
      setActiveForm("login");
    }
  };

  const [activeForm, setActiveForm] = useState("login");

  const handleToggleForm = () => {
    setActiveForm(activeForm === "login" ? "signup" : "login");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // TODO: Handle form submission
  };

  const renderLoginForm = () => (
    <div className="login-wrap active">
      <div className="title">
        <h1>Login</h1>
      </div>

      <form method="POST" className="register-form" onSubmit={handleSubmit}>
        <div className="input-area">
          <input
            type="email"
            id="email"
            onChange={handleInput}
            autoComplete="off"
            required
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-area">
          <input
            type="password"
            id="password"
            onChange={handleInput}
            required
          />
          <label htmlFor="password">Password</label>
        </div>

        <div className="forgot-pass">
          <a href="#">Forgot password?</a>
        </div>

        <div className="button-area">
          <button type="submit" className="login-btn" onClick={handleLogin}>
            Login
          </button>
        </div>
      </form>

      <div className="form-toggle-area">
        <p>
          Not a member?{" "}
          <span
            id="toggle-signup"
            style={{ cursor: "pointer" }}
            onClick={handleToggleForm}
          >
            Signup now
          </span>
        </p>
      </div>
    </div>
  );

  const renderSignupForm = () => (
    <div className="signup-wrap">
      <div className="title">
        <h1>Signup</h1>
      </div>

      <form method="POST" className="register-form" onSubmit={handleSubmit}>
        {/* <div className="input-area">
          <input type="text" id="name" autoComplete="off" required />
          <label htmlFor="name">Name</label>
        </div> */}

        <div className="input-area">
          <input
            type="email"
            id="email"
            onChange={handleInput}
            autoComplete="off"
            required
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className="input-area">
          <input
            type="password"
            id="password"
            onChange={handleInput}
            required
          />
          <label htmlFor="password">Password</label>
        </div>

        <div className="button-area">
          <button type="submit" className="signup-btn" onClick={handleSignUp}>
            Signup
          </button>
        </div>
      </form>

      <div className="form-toggle-area">
        <p>
          Have an account?{" "}
          <span id="toggle-login" onClick={handleToggleForm}>
            Login now
          </span>
        </p>
      </div>
    </div>
  );

  return (
    <>
      <video src="/videos/video-1.mp4" autoPlay loop muted />
      <div className="container">
        {activeForm === "login" ? renderLoginForm() : renderSignupForm()}
      </div>
    </>
  );
}

export default SignUp;

// function SignUp() {
//     const [user, setUser] = useState({ email: "", password: "" });

//     const handleSignUp = (e) => {
//       e.preventDefault();

//       fetch("https://example.com/signup", {
//         method: "POST",
//         body: JSON.stringify(user),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           // TODO: Handle successful signup
//         })
//         .catch((error) => {
//           console.error("Error signing up:", error);
//         });
//     };

//     const [activeForm, setActiveForm] = useState("login");

//     const handleToggleForm = () => {
//       setActiveForm(activeForm === "login" ? "signup" : "login");
//     };

//     const handleSubmit = (event) => {
//       event.preventDefault();

//       fetch("https://example.com/login", {
//         method: "POST",
//         body: JSON.stringify(user),
//         headers: {
//           "Content-Type": "application/json",
//         },
//       })
//         .then((response) => response.json())
//         .then((data) => {
//           // TODO: Handle successful login
//         })
//         .catch((error) => {
//           console.error("Error logging in:", error);
//         });
//     };

//     const renderLoginForm = () => (
//       <div className="login-wrap active">
//         <div className="title">
//           <h1>Login</h1>
//         </div>

//         <form className="register-form" onSubmit={handleSubmit}>
//           <div className="input-area">
//             <input
//               type="email"
//               id="email"
//               autoComplete="off"
//               required
//               value={user.email}
//               onChange={(e) => setUser({ ...user, email: e.target.value })}
//             />
//             <label htmlFor="email">Email</label>
//           </div>

//           <div className="input-area">
//             <input
//               type="password"
//               id="password"
//               required
//               value={user.password}
//               onChange={(e) => setUser({ ...user, password: e.target.value })}
//             />
//             <label htmlFor="password">Password</label>
//           </div>

//           <div className="forgot-pass">
//             <a href="#">Forgot password?</a>
//           </div>

//           <div className="button-area">
//             <button type="submit" className="login-btn">
//               Login
//             </button>
//           </div>
//         </form>

//         <div className="form-toggle-area">
//           <p>
//             Not a member?{" "}
//             <span
//               id="toggle-signup"
//               style={{ cursor: "pointer" }}
//               onClick={handleToggleForm}
//             >
//               Signup now
//             </span>
//           </p>
//         </div>
//       </div>
//     );

//     const renderSignupForm = () => (
//       <div className="signup-wrap">
//         <div className="title">
//           <h1>Signup</h1>
//         </div>

//         <form className="register-form" onSubmit={handleSignUp}>
//           <div className="input-area">
//             <input
//               type="text"
//               id="name"
//               autoComplete="off"
//               required
//               value={user.name}
//               onChange={(e) => setUser({ ...user, name: e.target.value })}
//             />
//             <label htmlFor="name">Name</label>
//           </div>

//   {/*  */}
