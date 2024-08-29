import "./loginPage.css";
import React, { useState } from "react";
//import { useNavigate } from "react-router-dom";
//import AuthService from "../../../services/authService";
function Login() {
  const [err, setErr] = useState(false);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
 // const navigate = useNavigate();

  // const goToForgotPassword = () => {
  //   navigate("/ForgotPassword");
  // };

  // const handleLogin = (e) => {
  //   e.preventDefault();
  //   AuthService.Login(username, password)
  //     .then((response) => {
  //       if (response.roles.includes("PROJETOS")) {
  //         navigate("/DashboardProjetos");
  //       } else if (response.roles.includes("COMERCIAL")) {
  //         navigate("/DashboardComercial");
  //       } else if (response.roles.includes("FINANCEIRO")) {
  //         navigate("/Financeiro");
  //       } else {
  //         navigate("/");
  //       }
  //     })
  //     .catch((err) => {
  //       console.log(err);
  //       setErr(true);
  //       setTimeout(() => {
  //         setErr(false);
  //       }, 3000);
  //     });
  // };

  return (
    <div className="loginScreen flex justify-center items-center bg-[#183d5a]">
      <div className="block sm:flex gap-96 container w-fit p-8">
        <div className="">
          <img
            //src={logo}
            //className="logo-topo mx-auto my-2 w-[220px] sm:w-[480px] ml-2"
          />
          <h1 className="text-white text-start font-medium pt-12 text-[38px] sm:text-[64px]">
            Olá infame, bem vindo!
          </h1>
          <h2 className="text-start font-sans font-extralight text-white text-[32px] sm:text-[40px] ml-2">
            Faça o login
          </h2>
        </div>
        <div className="p-8 mt-12">
          <form
            className="flex flex-col text-black"
            //onSubmit={(e) => handleLogin(e)}
          >
            <label
              className="text-left pl-2 text-white sm:text-[#183D5A] text-[30px] font-semibold"
              htmlFor="username"
            >
              Login
            </label>
            <input
              className="border-b-2 border-gray-600 px-2 mb-5 rounded-lg sm:rounded-none focus-visible:outline-none py-1"
              type="text"
              name="username"
              onChange={(e) => setUsername(e.target.value)}
            />
            <label className="text-left pl-2 text-white text-[30px] font-semibold" >
              Senha
            </label>
            <input
              className="px-2 border-b-2 border-gray-600 rounded-lg sm:rounded-none focus-visible:outline-none py-1"
              type="password"
              name="password"
              onChange={(e) => setPassword(e.target.value)}
            />
            <a
              className="forgot-pw text-left pl-2 cursor-pointer"
              // onClick={() => goToForgotPassword()}
            >
              Esqueci minha senha
            </a>
            <input
              className="submit-btn mt-5 w-11/12 h-9 mx-auto font-bold text-[20px] text-white rounded-full"
              type="submit"
              value="Entrar"
            />
          </form>
        </div>
      </div>
     {/* {err ? <AlertWrongPassword /> : null} */}
    </div>
  );
}
export default Login;
