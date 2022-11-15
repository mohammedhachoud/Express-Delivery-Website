import {Link ,  useNavigate} from 'react-router-dom'
import  './style4.css';
import * as React from 'react';
import{useState, useEffect} from'react';
import axios from '../../api/axios';
import { ArrowDropDown } from '@material-ui/icons';
const Add = () => {
    let navigate = useNavigate();
    
    const [telephone, settelephone] = useState("");
    const [wilaya1, setwilaya1] = useState("Adrar");
    const [wilaya, setwilaya] = useState("");
    const [commune, setcommune] = useState("");
    const [poids, setpoids] = useState("");
    const [type_denvoie, settype_denvoie] = useState("");
    const [x, setX] = useState(null);

    const [n, setN] = useState(null); // n - the cost value per 1 mile/km
    const [total, setTotal] = useState(null);
  
    
    const onChangetelephone = (e) => {
        const telephone = e.target.value;
        settelephone(telephone);
      };
      const onChangewilaya1 = (e) => {
        const wilaya1 = e.target.value;
        setwilaya1(e.target.value);
      };
      const onChangewilaya = (e) => {
        const wilaya = e.target.value;
        setwilaya(wilaya);
      };
      const onChangecommune = (e) => {
        const commune = e.target.value;
        setcommune(commune);
      };
      const onChangepoids = (e) => {
        const poids= e.target.value;
        setpoids(poids);
      };
      const onChangetype_denvoie = (e) => {
        const type_denvoie= e.target.value;
        settype_denvoie(type_denvoie);
      };
      function calculateTotal() {
        if (wilaya== "alger"){
          setN(1100)
          if(poids <= 10){
            setX(0)
            setTotal(n + n*x)
          }else if (poids > 10){
            setX(0,2)
            setTotal(n+500)
          }
        }
        if (wilaya== "tlemcen"){
          setN(600)
          if(poids <= 10){
            setX(0)
            setTotal(n + n*x)
          }else if (poids > 10){
            setX(0,2)
            setTotal(n+200)
          }
        }
        if (wilaya== "ain temouchent"){
          setN(500)
          if(poids <= 10){
            setX(0)
            setTotal(n + n*x)
          }else if (poids > 10){
            setX(0,2)
            setTotal(n+300)
          }
        }
        if (wilaya== "tizi ouzo"){
          setN(1200)
          if(poids <= 10){
            setX(0)
            setTotal(n + n*x)
          }else if (poids > 10){
            setX(0,2)
            setTotal(n+500)
          }
        }
        if (wilaya== "blida"){
          setN(1000)
          if(poids <= 10){
            setX(0)
            setTotal(n + n*x)
          }else if (poids > 10){
            setX(0,2)
            setTotal(n+400)
          }
        }
        if (wilaya== "constantine"){
          setN(1300)
          if(poids <= 10){
            setX(0)
            setTotal(n + n*x)
          }else if (poids > 10){
            setX(0,2)
            setTotal(n+700)
          }
        }
        if (wilaya== "ain defla"){
          setN(900)
          if(poids <= 10){
            setX(0)
            setTotal(n + n*x)
          }else if (poids > 10){
            setX(0,2)
            setTotal(n+300)
          }
        }
        if (wilaya== "chlef"){
          setN(800)
          if(poids <= 10){
            setX(0)
            setTotal(n + n*x)
          }else if (poids > 10){
            setX(0,2)
            setTotal(n+300)
          }
        }
        if (wilaya== "mostaganem"){
          setN(700)
          if(poids <= 10){
            setX(0)
            setTotal(n + n*x)
          }else if (poids > 10){
            setX(0,2)
            setTotal(n+300)
          }
        }
        return calculateTotal;
      }
      const email =  JSON.parse(localStorage.getItem('user')).user.email
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email,
          telephone,
          wilaya1,
          wilaya,
          commune,
          poids,
          type_denvoie,
          total
);
        axios.post('/api/colis', {
            user_email:email,
            telephone,
            wilaya1,
            wilaya,
            commune,
            poids,
            type_denvoie,
            total

          }).then((res) => {
            if (res.status == 200) {
              navigate('/userboard')
             
              console.log(res.message);
            }
          }) 
    }
    return(
        <div className="container2">
        <div className="forms-container2">
          <div className="signin-signup2">
          <form onSubmit={handleSubmit}className="sign-in-form2">
            <h2 className="title">Add your Parcel</h2>
            <div className="input-field">
              <i className="fas fa-user"></i>
              <input 
                        type="text"
                        placeholder='Phone Number'
                        name='Phone Number' 
                        onChange={onChangetelephone}
                        required
                        value={telephone}
                        />
            </div>
            <div style={{width: '380px'}} >
            <label>
        <select onChange={onChangewilaya1} value={wilaya1} label="Age" className='input-field' placeholder='' max-width='380px'>
          <option value="default" hidden>Choose your Wilaya of Residence</option>
          <option  className='input-field' value="adrar">1- Adrar</option>
          <option  className='input-field' value="chlef">2- Chlef</option>
          <option  className='input-field' value="laghouat">3- Laghouet</option>
          <option  className='input-field' value="Oum el bouaghi">4- Oum El Bouaghi</option>
          <option  className='input-field' value="batna">5- Batna</option>
          <option  className='input-field' value="bejaia">6- Bejaia</option>
          <option  className='input-field' value="biskra">7- Biskra</option>
          <option  className='input-field' value="bechar">8- Bechar</option>
          <option  className='input-field' value="blida">9- Blida</option>
          <option  className='input-field' value="bouira">10- Bouira</option>
          <option  className='input-field' value="tamanrasset">11- Tamanrasset</option>
          <option  className='input-field' value="tebessa">12- Tebessa</option>
          <option  className='input-field' value="tlemcen">13- Tlemcen</option>
          <option  className='input-field' value="tiaret">14- Tiaret</option>
          <option  className='input-field' value="tizi ouzo">15- Tizi Ouzo</option>
          <option  className='input-field' value="alger">16- Alger</option>
          <option  className='input-field' value="djelfa">17- Djelfa</option>
          <option  className='input-field' value="jijel">18- Jijel</option>
          <option  className='input-field' value="setif">19- Sétif</option>
          <option  className='input-field' value="saida">20- Saida</option>
          <option  className='input-field' value="skikda">21- Skikda</option>
          <option  className='input-field' value="sidi bel abbes">22- Sidi Bel Abbes</option>
          <option  className='input-field' value="annaba">23- Annaba</option>
          <option  className='input-field' value="guelma">24- Guelma</option>
          <option  className='input-field' value="constantine">25- Constantine</option>
          <option  className='input-field' value="medea">26- Medea</option>
          <option  className='input-field' value="mostaganem">27- Mostaganem</option>
          <option  className='input-field' value="msila">28- M'sila</option>
          <option  className='input-field' value="mascara">29- Mascara</option>
          <option  className='input-field' value="ouragla">30- Ouragla</option>
          <option  className='input-field' value="oran">31- Oran</option>
          <option  className='input-field' value="bayadh">32- El Bayadh</option>
          <option  className='input-field' value="illizi">33- Illizi</option>
          <option  className='input-field' value="bordj bou arreridj">34-Bordj Bou Arreridj</option>
          <option  className='input-field' value="boumerdes">35- Boumerdés</option>
          <option  className='input-field' value="tarf">36- El Tarf</option>
          <option  className='input-field' value="tindouf">37- Tindouf</option>
          <option  className='input-field' value="tissemsilt">38- Tissemsilt</option>
          <option  className='input-field' value="el oued">39- El Oued</option>
          <option  className='input-field' value="khenchla">40- Khenchla</option>
          <option  className='input-field' value="souk ahras">41- Souk ahras</option>
          <option  className='input-field' value="tipaza">42- Tipaza</option>
          <option  className='input-field' value="mila">43- Mila</option>
          <option  className='input-field' value="ain defla">44- Ain Defla</option>
          <option  className='input-field' value="naama">45- Naàma</option>
          <option  className='input-field' value="ain temouchent">46- Ain Temouchent</option>
          <option  className='input-field' value="gherdaia">47- Gherdaia</option>
          <option  className='input-field' value="relizane">48- Relizane</option>
          <option  className='input-field' value="timimoun">49- Timimoun</option>
          <option  className='input-field' value="bordj baddji mokhtar">50- Bordj Baddji Mokhtar</option>
          <option  className='input-field' value="ouled djellal">51- Ouled Djellal</option>
          <option  className='input-field' value="beni abbes">52- Beni Abbes</option>
          <option  className='input-field' value="in salah">53- In Salah</option>
          <option  className='input-field' value="in guezzam">54- In Guezzam</option>
          <option  className='input-field' value="touggourt">55- Touggourt</option>
          <option  className='input-field' value="djanet">56- Djanet</option>
          <option  className='input-field' value="el mghair">57- El Mghair</option>
          <option  className='input-field' value="el meniaa">58- El Meniaa</option>
        </select>
      </label>
            </div>
            <div style={{width: '380px'}} >
            <label>
        <select onChange={onChangewilaya} value={wilaya} label="Age" className='input-field' placeholder='' max-width='380px'>
          <option value="default" hidden className='adr'>Choose your Destination Wilaya</option>
          <option  className='input-field' value="adrar">1- Adrar</option>
          <option  className='input-field' value="chlef">2- Chlef</option>
          <option  className='input-field' value="laghouat">3- Laghouet</option>
          <option  className='input-field' value="Oum el bouaghi">4- Oum El Bouaghi</option>
          <option  className='input-field' value="batna">5- Batna</option>
          <option  className='input-field' value="bejaia">6- Bejaia</option>
          <option  className='input-field' value="biskra">7- Biskra</option>
          <option  className='input-field' value="bechar">8- Bechar</option>
          <option  className='input-field' value="blida">9- Blida</option>
          <option  className='input-field' value="bouira">10- Bouira</option>
          <option  className='input-field' value="tamanrasset">11- Tamanrasset</option>
          <option  className='input-field' value="tebessa">12- Tebessa</option>
          <option  className='input-field' value="tlemcen">13- Tlemcen</option>
          <option  className='input-field' value="tiaret">14- Tiaret</option>
          <option  className='input-field' value="tizi ouzo">15- Tizi Ouzo</option>
          <option  className='input-field' value="alger">16- Alger</option>
          <option  className='input-field' value="djelfa">17- Djelfa</option>
          <option  className='input-field' value="jijel">18- Jijel</option>
          <option  className='input-field' value="setif">19- Sétif</option>
          <option  className='input-field' value="saida">20- Saida</option>
          <option  className='input-field' value="skikda">21- Skikda</option>
          <option  className='input-field' value="sidi bel abbes">22- Sidi Bel Abbes</option>
          <option  className='input-field' value="annaba">23- Annaba</option>
          <option  className='input-field' value="guelma">24- Guelma</option>
          <option  className='input-field' value="constantine">25- Constantine</option>
          <option  className='input-field' value="medea">26- Medea</option>
          <option  className='input-field' value="mostaganem">27- Mostaganem</option>
          <option  className='input-field' value="msila">28- M'sila</option>
          <option  className='input-field' value="mascara">29- Mascara</option>
          <option  className='input-field' value="ouragla">30- Ouragla</option>
          <option  className='input-field' value="oran">31- Oran</option>
          <option  className='input-field' value="bayadh">32- El Bayadh</option>
          <option  className='input-field' value="illizi">33- Illizi</option>
          <option  className='input-field' value="bordj bou arreridj">34-Bordj Bou Arreridj</option>
          <option  className='input-field' value="boumerdes">35- Boumerdés</option>
          <option  className='input-field' value="tarf">36- El Tarf</option>
          <option  className='input-field' value="tindouf">37- Tindouf</option>
          <option  className='input-field' value="tissemsilt">38- Tissemsilt</option>
          <option  className='input-field' value="el oued">39- El Oued</option>
          <option  className='input-field' value="khenchla">40- Khenchla</option>
          <option  className='input-field' value="souk ahras">41- Souk ahras</option>
          <option  className='input-field' value="tipaza">42- Tipaza</option>
          <option  className='input-field' value="mila">43- Mila</option>
          <option  className='input-field' value="ain defla">44- Ain Defla</option>
          <option  className='input-field' value="naama">45- Naàma</option>
          <option  className='input-field' value="ain temouchent">46- Ain Temouchent</option>
          <option  className='input-field' value="gherdaia">47- Gherdaia</option>
          <option  className='input-field' value="relizane">48- Relizane</option>
          <option  className='input-field' value="timimoun">49- Timimoun</option>
          <option  className='input-field' value="bordj baddji mokhtar">50- Bordj Baddji Mokhtar</option>
          <option  className='input-field' value="ouled djellal">51- Ouled Djellal</option>
          <option  className='input-field' value="beni abbes">52- Beni Abbes</option>
          <option  className='input-field' value="in salah">53- In Salah</option>
          <option  className='input-field' value="in guezzam">54- In Guezzam</option>
          <option  className='input-field' value="touggourt">55- Touggourt</option>
          <option  className='input-field' value="djanet">56- Djanet</option>
          <option  className='input-field' value="el mghair">57- El Mghair</option>
          <option  className='input-field' value="el meniaa">58- El Meniaa</option>
        </select>
      </label>
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input 
                        type="text"
                        placeholder='Town'
                        name='Destination Town' 
                        onChange={onChangecommune}
                        required
                        value={commune}
                        />
            </div>
            <div className="input-field">
              <i className="fas fa-lock"></i>
              <input 
                        type="text"
                        placeholder='Weight'
                        name='Weight' 
                        onChange={onChangepoids}
                        required
                        value={poids}
                        />
            </div>
            <div style={{width: '380px'}} >
            <label>
        <select onChange={onChangetype_denvoie} value={type_denvoie} label="Age" className='input-field' placeholder='' max-width='380px'>
          <option value="default" hidden>Choose the type of delivery</option>
          <option  className='input-field' value="delivvvery">1- Delivery</option>
          <option  className='input-field' value="exchange">2- Exchange</option>
          <option  className='input-field' value="recovery">3- Recovery</option>
        </select>
      </label>
            </div>
            
          <h2 className='title'>{total} DA</h2> 
          <input type="submit" onClick={calculateTotal} className="btn" value="Calculate" />
            <input type="submit" onClick={handleSubmit} className="btn" value="Add" />
          </form>
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

export default Add;