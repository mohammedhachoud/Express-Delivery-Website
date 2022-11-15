import{useState, useRef, useEffect} from'react';
import {Link } from 'react-router-dom';
import "./style.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import axios from '../../api/axios';
import Userboard from'../userboard/index';
import PersonOutlineIcon from "@mui/icons-material/PersonOutline";
import { useNavigate} from 'react-router-dom';
import photo from "./img/log.svg"
import { Icon } from '@mui/material';
const Login = () => {
    let navigate = useNavigate();
    
    const form = useRef();
    const checkBtn = useRef();
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");
    const [role, setRole] = useState("");
    console.log(email, password);
    /*const[data, setData] = useState({
        email:"",
        password:""
    });
    console.log(data);*/

//const {error , setError} = useState("");
/*componentWillReceiveProps = (nextProps) => {
    if (nextProps.auth.isAuthenticated) {
      this.props.history.push("/dashboard"); // push user to dashboard when they login
    }
if (nextProps.errors) {
      this.setState({
        errors: nextProps.errors
      });
    }
  }*/

/*const handleChange =({currentTarget: input}) =>{
    setData({...DataTransfer, [input.name]: input.value});
};*/
const onChangeUsername = (e) => {
    const email = e.target.value;
    setemail(email);
  };
  const onChangePassword = (e) => {
    const password = e.target.value;
    setPassword(password);
  };


  useEffect(() => {
    const user = JSON.parse(localStorage.getItem('user'))
    console.log(user)
    if (user) {
     if (user.user.email == 'admin@gmail.com') {
        navigate('/adminboard')
      } else navigate(Userboard)
    } else navigate('/login')
   
  }, [])

  

  /*useEffect(() => {

    if (role == "admin@gmail.com") {
      navigate('/adminboard')
    } else navigate('/adminboard')



  }, [role])*/

  const handleLogin = (e) => {
    e.preventDefault();

    axios.post('/api/users/login', {
      email,
      password
    }).then((res) => {

      if (res.status == 200) {
        localStorage.setItem("user", JSON.stringify(res.data))
        localStorage.setItem("user", JSON.stringify(res.data))
        if(email =="admin@gmail.com"){
          navigate('/adminboard')
        }else{
          setRole(res.data.user.email)
          navigate('/userboard')
        }
       
      }
    })
    
    
  }
/*const handleLogin = (e) => {
    e.preventDefault();
    setMessage("");
    setLoading(true);
    form.current.validateAll();
    if (checkBtn.current.context._errors.length === 0) {
      AuthService.login(username, password).then(
        () => {
          navigate("/profile");
          window.location.reload();
        },
        (error) => {
          const resMessage =
            (error.response &&
              error.response.data &&
              error.response.data.message) ||
            error.message ||
            error.toString();
          setLoading(false);
          setMessage(resMessage);
        }
      );
    } else {
      setLoading(false);
    }
  };*/
/*const handleSubmit = async (e) => {
    e.preventDefault();
    try {
        const url ="http://localhost:8080/api/auth";
        const {data:res} = await axios.post(url, data);
        localStorage.setItem("token", res.data);
        window.location = "/"

    } catch (error) {
        if(error.response &&
            error.response.status >= 400
            && error.response.status <= 500            
            ){
               setError(error.response.data.message) 
            }}
            /*const userData = {
                email: this.state.email,
                password: this.state.password
              };
            this.props.loginUser(userData); 
            // since we handle the redirect within our component, we don't need to pass in this.props.history as a parameter
}*/
    return(
      <div className="container">
      <div className="forms-container">
        <div className="signin-signup">
        <form onSubmit={handleLogin} className="sign-in-form">
            <h2 className="title">Sign in</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input 
              
                        type="email"
                        placeholder='Email'
                        name='email' 
                        onChange={onChangeUsername}
                        required
                        value={email}
                        />
                
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input 
                        type="password"
                        placeholder='Password'
                        name='password' 
                        onChange={onChangePassword}
                        required
                        value={password}
                        />
            </div>
            <input type="submit" onClick={handleLogin} className="btn solid" name='Sign in' value='Sign in'/>
          </form>
            </div>
        <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Go and register yourself to be one of us <br />
              <Link to="/signup">
              <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
            </Link>
            </p>
            
          </div>
          <img src={photo} className="image" alt="" />
        </div>
        </div>
            </div>
        </div>
    )
};

/*Login.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(
    mapStateToProps,
    { loginUser }
)(Login);*/
//  {error && <div className={styles.error_msg}>{error}</div>}
export default Login;