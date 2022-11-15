import {Link ,  useNavigate} from 'react-router-dom'
import  './style.css';
import{useState, useEffect} from'react';
import axios from '../../api/axios';
import photo from './img/register.svg'
const Signup = () => {
    let navigate = useNavigate();
    
    const [firstName, setfirstname] = useState("");
    const [lastName, setlastname] = useState("");
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [password2, setPassword2] = useState("");
    const [role, setRole] = useState("");
    
    
    const onChangeUsername = (e) => {
        const email = e.target.value;
        setemail(email);
      };
      const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
      };
      const onChangePassword2 = (e) => {
        const password2 = e.target.value;
        setPassword2(password2);
      };
      const onChangeFirstname = (e) => {
        const firstName= e.target.value;
        setfirstname(firstName);
      };
      const onChangeLastname = (e) => {
        const lastName = e.target.value;
        setlastname(lastName);
      };
    
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(firstName,lastName, email, password);
        axios.post('/api/users/register', {
            firstName,
            lastName,
            email,
            password,
            password2

          }).then((res) => {
            if (res.status == 200) {
              navigate('/login')
             
              console.log(res.message);
            }else if (res.status == 400) {
                console.log( res.status(400).json({ email: "Email already exists" }));
            }
          }) 
    }
    return(
        <div className="container">
        <div className="forms-container">
          <div className="signin-signup">
          <form onSubmit={handleSubmit}className="sign-in-form">
            <h2 className="title">Sign up</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input 
                        type="text"
                        placeholder='First Name'
                        name='firstName' 
                        onChange={onChangeFirstname}
                        required
                        value={firstName}
                        />
            </div>
            <div className="input-field">
              <i className="fas fa-envelope"></i>
              <input 
                        type="text"
                        placeholder='Last Name'
                        name='LastName' 
                        onChange={onChangeLastname}
                        required
                        value={lastName}
                        />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input 
                        type="email"
                        placeholder='Email'
                        name='Email' 
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
                        name='Password' 
                        onChange={onChangePassword}
                        required
                        value={password}
                        />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input 
                        type="password"
                        placeholder='Confirm your Password'
                        name='Password' 
                        onChange={onChangePassword2}
                        required
                        value={password2}
                        />
            </div>
            <input type="submit" onClick={handleSubmit} className="btn" value="Sign up" />
          </form>
          </div>
          <div className="panels-container">
          <div className="panel left-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Go and Sign in to make your first delivery
            </p>
            <Link to="/login">
           
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
            </Link>
          </div>
          <img src={photo} className="image" alt="" />
        </div>
            </div>
        
       
      </div>
                </div>
           
    )
};
/*Signup.propTypes = {
    registerUser : PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};
const mapStateToProps = State =>({
    auth: State.auth,
    errors: State.errors
});

export default connect(
    mapStateToProps,
    {registerUser}
)(withRouter(Signup));*/

export default Signup;