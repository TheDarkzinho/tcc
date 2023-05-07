import {useState} from 'react';
import logo from './assets/logo.png'
import person from './assets/person.png'
import olho1 from './assets/olho1.png'
import olho2 from './assets/olho2.png'
import './styles.css'



function App() {
  const[email, setEmail] = useState('')
  const[password, setPassoword] = useState('')
  const senha = document.getElementById("idpassword")
  const icone = document.getElementById("olho")
  // console.log(senha.type);//
  function verSenha() {

   let inputTypePassword = senha.type == "password"
   
   if (inputTypePassword){
    showSenha()
    console.log(senha.type)
   } else{
    hideSenha()
   }

  }

  function showSenha(){
      senha.setAttribute("type","text")
      icone.setAttribute("src", olho1)
  }

  function hideSenha(){
      senha.setAttribute("type","password")
      icone.setAttribute("src", olho2)
  }


  return (
   <div className="container">
      <div className="container-login">
        <div className="wrap-login">
          <form className="login-form">
            {/* <span className="login-form-title"> </span> COLOCAR TITULO EM CIMA DO LOGO*/}

            <span className="login-form-title">
              <img src={logo} alt="logo da tela de login" /> {/* LOGO */}
            </span>
            
            <div className="wrap-input">
              <input 
              className= {email !== "" ? 'has-val input' : 'input'}
              type="email"      /*BAGUIETI QUE FAZ O EMAIL FICAR EM CIMA DA PALAVRA*/
              value={email} 
              onChange={e => setEmail(e.target.value)}/>
              <span className="focus-input" data-placeholder="Usuário"></span>

                          <div className="icon">
                            <img src={person}/>   {/*icone do carinha do email*/}
                          </div>
            </div>

            <div className="wrap-input">
              <input 
              className={password !== "" ? 'has-val input' : 'input'}
              id="idpassword"
              type="password"
              value={password} /*IGUAL AO DO EMAIL*/
              onChange={e => setPassoword(e.target.value)} />
              <span className="focus-input" data-placeholder="Senha"></span>
        
                <div className="icon">
                  <img src={olho2} id="olho" onClick={verSenha} />  {/*icone do carinha do email*/}
                </div>
            
            </div>

            <div className="container-login-form-btn">
              <button className="login-form-btn">LOGIN</button>
            </div>

            <div className="text-center">
              <span className="txt1">Esqueceu a senha?</span>
              <a className="txt2" href="">Recuperar senha</a>
            </div>

          </form>
        </div>        
      </div>
  </div>

    
  );
}

export default App;