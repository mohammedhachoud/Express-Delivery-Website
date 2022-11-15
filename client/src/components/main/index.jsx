import  './style.css';
import{useState, useEffect} from'react';
import axios from '../../api/axios';
import { useNavigate} from 'react-router-dom';
const Main = () => {
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
    useEffect(() => {
    
    })
  
    useEffect(() => {
  
      const user = JSON.parse(localStorage.getItem("user"))
  
      const role = user.firstName;
  
      if (role == "mohammed") {
        navigate('/admin')
      } else navigate('/')
  
  
  
    }, [role])
  
    const handleLogin = (e) => {
      e.preventDefault();
  
      axios.post('/api/users/login', {
        email,
        password
      }).then((res) => {
        if (res.status == 200) {
          localStorage.setItem("user", JSON.stringify(res.data))
          setRole(res.data.user.firstName)
          navigate('/signup')
          console.log(email, password)
        }
      })
      
      
    }
    
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
              navigate('/signup')
             
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
            <input type="submit" onClick={handleLogin} className="btn solid" />
          </form>
          
          <form onSubmit={handleSubmit}className="sign-up-form">
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
                        type="text"
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
                        type="text"
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
                        type="text"
                        placeholder='Confirm your Password'
                        name='Password' 
                        onChange={onChangePassword2}
                        required
                        value={password2}
                        />
            </div>
            <input type="submit" onClick={handleSubmit} className="btn"  />
          </form>
        
        
        </div>
      </div>

      <div className="panels-container">
        <div className="panel left-panel">
          <div className="content">
            <h3>New here ?</h3>
            <p>
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Debitis,
              ex ratione. Aliquid!
            </p>
            <button className="btn transparent" id="sign-up-btn">
              Sign up
            </button>
          </div>
          <img src="img/log.svg" className="image" alt="" />
        </div>
        <div className="panel right-panel">
          <div className="content">
            <h3>One of us ?</h3>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
              laboriosam ad deleniti.
            </p>
            <button className="btn transparent" id="sign-in-btn">
              Sign in
            </button>
          </div>
          <img src="img/register.svg" className="image" alt="" />
        </div>
      </div>
    </div>

    )
};

export default Main;