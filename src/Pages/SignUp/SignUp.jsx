import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import InputText from "../../Components/InputText/InputText";
import Swal from "sweetalert2";
import { useDispatch } from "react-redux";
import { signUp } from "../../Redux/Actions/userAction";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  const navigate = useNavigate();
  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const dispacth = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    if (e.target.password.value !== e.target.password2.value) {
      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Password tidak sama!",
      });
    } else {
      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Sign Up Berhasil!",
        confirmButtonText: "OK",
      }).then((result) => {
        if (result.isConfirmed) {
          dispacth(
            signUp({
              full_name: fullName,
              username: username,
              email: email,
              password: password,
              status: "user",
            })
          );
          navigate("/login");
        }
      });
    }
  };

  return (
    <>
      <section className="section-container mb-5">
        <div className="container container-signup mt-2">
          <div className="row border shadow">
            <div className="col-md-6 left">
              <h2 className="text-center pw-semibold mt-2" style={{ fontSize: "36px", color: "#fff" }}>
                Selamat Datang Di MyNature !
              </h2>
              <p className="text-center pw-light" style={{ fontSize: "16px", color: "#fff" }}>
                Ayo daftar dan bantu kami untuk masa depan dunia yang lebih baik !
              </p>
              <img src="https://res.cloudinary.com/dxi5woyp1/image/upload/v1669301664/MyNature/IllustForm_rwb3he.svg" alt="" className="imgRegister img-fluid mx-auto d-block" width="300" />
            </div>
            <div className="col-md-6 right mt-5">
              <h2 className="text-center pw-semibold mt-5" style={{ fontSize: "32px" }}>
                Sign Up
              </h2>
              <form className="mx-3 needs-validation" onSubmit={handleSubmit}>
                <InputText valueLabel="Full Name" valueFor="fullname" type="text" id="fullname" name="fullname" placeholder="Alexander John" value={fullName} onChange={(e) => setFullName(e.target.value)} />

                <InputText valueLabel="Username" valueFor="username" type="text" id="username" name="username" placeholder="alexander" value={username} onChange={(e) => setUsername(e.target.value)} />

                <InputText valueLabel="Email" valueFor="email" type="email" id="email" name="email" placeholder="example@mail.com" value={email} onChange={(e) => setEmail(e.target.value)} />

                <InputText
                  valueLabel="Password"
                  valueFor="password"
                  type="password"
                  id="password"
                  name="password"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                  minLength={8}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />

                <InputText
                  valueLabel="Konfirmasi Password"
                  valueFor="password2"
                  type="password"
                  id="password2"
                  name="password2"
                  placeholder="&#9679;&#9679;&#9679;&#9679;&#9679;"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                />

                <button type="submit" className="btn btn-primary btn-sign-up">
                  Sign Up
                </button>

                <p className="text-center mt-2">
                  Sudah punya akun?{" "}
                  <Link to="/login" style={{ fontWeight: "Bold", color: "#014751", textDecoration: "none" }}>
                    Sign In
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;