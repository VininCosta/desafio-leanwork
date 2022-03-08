import React, { Component} from 'react';
import ReactDOM from 'react-dom';


const onSubmit = (e) => {
  e.preventDefault();
  const data = {
  nome : e.target.elements.nome.value,
  email : e.target.elements.email.value,
  cpf : e.target.elements.cpf.value,
  tel : e.target.elements.tel.value
}
console.log(data);
}

export class Form extends Component {
  render() {
    return (
      <div className='form'>
          <h3>Lean Cadastro</h3> <br></br><br></br>
          <form onSubmit={onSubmit}>
    <div>
        <label htmlFor="nome">Nome Completo</label> <br></br>
        <input className='nome'  type="text" id="nome" />
    </div> <br></br>
    <div>
        <label htmlFor="email">E-mail</label> <br></br>
        <input className='email'  type="email" id="email" />
    </div> <br></br>
    <div>
        <label htmlFor="cpf">CPF</label> <br></br>
        <input  id="msg"></input>
    </div> <br></br>
    <div>
        <label htmlFor="tel">Telefone</label> <br></br>
        <input  id="msg"></input>
    </div>
</form>
          <div>
          <button type="submit" className='btn'>Cadastrar</button>
          <button className='btn-login'>Login<svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg></button>
          </div>
          </div>
    )
  }
}


export default Form