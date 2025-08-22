import { useState } from 'react'

import { createUserWithEmailAndPassword } from 'firebase/auth'
import { Link, useNavigate } from 'react-router-dom'
import { auth } from '../../firebaseConnection'

export default function Register(){
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const navigate = useNavigate();

  async function handleRegister(e){
  e.preventDefault();

  if(email !== '' && password !== ''){
    await createUserWithEmailAndPassword(auth, email, password)
    .then(() => {
      // ALTERAÇÃO 1: Redireciona o usuário para a página de login ('/')
      navigate('/', { replace: true });
      alert("Usuário cadastrado com sucesso! Faça o login para continuar."); // Opcional: Dê um feedback ao usuário.
    })
    .catch((error) => {
      // Melhoria: Exibir o erro no console para facilitar a depuração
      console.log("ERRO AO FAZER O CADASTRO: ", error);
    })
  }else{
    alert("Preencha todos os campos!")
  }
}


  return(
    <div className="home-container">
      <h1>Cadastre-se</h1>
      <span>Vamos criar sua conta!</span>

      <form className="form" onSubmit={handleRegister}>
        <input
          type="text"
          placeholder="Digite seu email..."
          value={email}
          onChange={(e) => setEmail(e.target.value) }
        />

        <input
          type="password"
          placeholder="******"
          value={password}
          onChange={(e) => setPassword(e.target.value) }
        />

        <button type="submit" >Cadastrar</button>
      </form>

      <Link className="button-link" to="/">
        Já possui uma conta? Faça login!
      </Link>

    </div>
  )
}