import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import InputText from "../../Components/InputText/InputText";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import { signIn } from "../../Redux/Actions/userAction";
import "./SignIn.css";
import axios from "axios";

const SignIn = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  // const [status, setStatus] = useState("");

  // useEffect(() => {
  //   dispacth(signIn(username, password))
  // }, [])

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (email && password) {
      try {
        const response = await axios.post("https://be12-production.up.railway.app/signin", { email, password });
        // localStorage.setItem('user', JSON.stringify(findUser))
        Swal.fire({
          icon: "success",
          title: "Login Success",
          showConfirmButton: false,
          timer: 1500,
        });
        console.log(response.data);
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("status", response.data.status);
        navigate("/");
      } catch (error) {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Email atau Password Salah!",
        });
      }
    }
  };

  // if(findUser) {
  //   localStorage.setItem('user', JSON.stringify(findUser))
  //   Swal.fire({
  //     icon: 'success',
  //     title: 'Login Success',
  //     showConfirmButton: false,
  //     timer: 1500
  //   })
  //   navigate('/about')
  // } else {
  //   Swal.fire({
  //     icon: 'error',
  //     title: 'Oops...',
  //     text: 'Email atau Password Salah!',
  //   })
  // }

  return (
    <>
      <section className="section-signin" style={{ borderRadius: "5px" }}>
        <div className="container container-signin">
          <div className="row border shadow">
            <div className="col-md-6 left-signin order-sm-first order-last">
              <div className="container">
                <h2 className="text-center pw-semibold mt-4" style={{ fontSize: "32px" }}>
                  Sign In
                </h2>
                <form className="mx-3" onSubmit={handleSubmit}>
                  <InputText valueLabel="Email" valueFor="email" type="email" id="email" name="email" placeholder="example@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                  <InputText valueLabel="Password" valueFor="password" type="password" id="password" name="password" placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;" value={password} onChange={(e) => setPassword(e.target.value)} />
                  <button type="submit" className="btn btn-primary btn-sign-in mt-5">
                    Sign In
                  </button>
                  <p className="text-center mt-2">
                    Belum punya akun?{" "}
                    <Link to="/register" style={{ fontWeight: "Bold", color: "#014751", textDecoration: "none" }}>
                      Sign Up
                    </Link>
                  </p>
                </form>
              </div>
            </div>
            <div className="col-md-6 right-signin">
              <div className="container justify-content-center">
                <h2 className="text-center pw-bold mt-5" style={{ fontSize: "36px", color: "#fff" }}>
                  Selamat Datang Di MyNature !
                </h2>
                <p className="text-center pw-light" style={{ fontSize: "16px", color: "#fff" }}>
                  Ayo dukung kami untuk masa depan dunia yang lebih baik{" "}
                </p>
                <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1669301664/MyNature/IllustForm_rwb3he.svg" alt="" className="img-fluid mx-auto d-block" width="300" />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignIn;