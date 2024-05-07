import Layout from '../../components/layout/Layout';
import Hero from '../../components/hero/Hero';
import LoginComp from '../../components/login/LoginComp';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faUser} from "@fortawesome/free-solid-svg-icons";

const Login = () => {

  return (
    <>
    <Hero />
      <Layout>
        <div className="flex items-center justify-center">
          <h1 className="text-4xl font-bold text-center italic text-green-600 m-2">Login</h1>
          <FontAwesomeIcon icon={faUser} className="text-green-600 text-2xl" />
        </div>
        <LoginComp />
      </Layout>
    </>
  );
};

export default Login;
