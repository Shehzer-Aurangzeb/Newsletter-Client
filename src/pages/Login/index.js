import React from "react";
import Form from "./components/Form";
import { PATHS } from "../../constants";
import { Link } from "react-router-dom";
import Divider from "../../components/Divider";

function Login() {
  return (
    <div className="h-screen w-full relative">
      <div className="w-full max-w-[450px] flex flex-col gap-y-3 absolute top-1/2 -translate-y-1/2 -translate-x-1/2 left-1/2">
        <h1 className="text-xl text-black font-bold font-nunito mb-2">
          Sign In
        </h1>
        <Form />
        <Divider />
        <Link to={PATHS.HOME} className="link w-full text-center">
          Go Home
        </Link>
      </div>
    </div>
  );
}

export default Login;
