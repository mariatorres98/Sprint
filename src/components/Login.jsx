import React from "react";
import { Button, FloatingLabel, Form } from "react-bootstrap";
import { useForm } from "react-hook-form";
import { Link } from "react-router-dom";
import { yupResolver } from "@hookform/resolvers/yup";
import { useDispatch } from "react-redux";
import { schemaLogin } from "../services/data";
import { actionLoginAsync, loginProviderAsync, loginnProviderAsync } from "../redux/actions/userActions";
import { useNavigate} from "react-router-dom";
import './login.scss'
import logo from "../components/imagenes.food/logo.png";

const Login = () => {
  const dispatch=useDispatch()
  const handleLoginFacebbok = () =>{
    dispatch(loginnProviderAsync('facebook'))
  }
  const {register, handleSubmit, formState: { errors } } = useForm({resolver:yupResolver(schemaLogin)})
  const onSubmit = (data) => {
    
    dispatch(actionLoginAsync(data))
  }
 

  const handleLoginGoogle = () => {
    dispatch(loginProviderAsync('google'))
  }
  const navigate = useNavigate();
  const pagina1 = () => {
    navigate("/pagina1");
  };
  return (
    <div className="contenedor__login">
    <img src={logo} alt="" className="logo__login"/>
    <h1>Iniciar Sesión</h1>
    
    <Form onSubmit={handleSubmit(onSubmit)}>
      <FloatingLabel label="Email address" className="mb-3">
        <Form.Control
          type="email"
          autoComplete="off"
          placeholder="name@example.com"
          {...register("email")}
        />
      </FloatingLabel>
      <p>{errors.email?.message}</p>
      <FloatingLabel label="Password">
        <Form.Control
          type="password"
          autoComplete="off"
          placeholder="Password"
          {...register("password")}
        />
      </FloatingLabel>
      <p>{errors.password?.message}</p>

      <Button variant="warning" type="submit" className="google__inicio">
        Iniciar Sesión
      </Button>
      <img src='https://blog.hubspot.com/hubfs/image8-2.jpg' alt="Google" style={{width: 80, marginLeft: 30}} onClick={handleLoginGoogle} className='google'/>
      <img src='https://1000marcas.net/wp-content/uploads/2019/12/Facebook-logo.jpg' alt="Google" style={{width: 80, marginLeft: 30}} onClick={handleLoginFacebbok} className='google'/>
    </Form>
    <Link to="/Register" className="crear__cuenta">¿Desea crear una cuenta?</Link>
    <button onClick={pagina1} className='google__inicio'>Introduccion</button>
    
    
  </div>

  );
};
export default Login;



