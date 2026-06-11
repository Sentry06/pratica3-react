import { useState } from 'react'
import CardUsuario from './components/CardUsuario'

function App() {

  const [nome, setNome] = useState('')
  const [email, setEmail] = useState('')
  const [telefone, setTelefone] = useState('')
  const [senha, setSenha] = useState('')
  const [confirmarSenha, setConfirmarSenha] = useState('')

  const [usuario, setUsuario] = useState(null)

  const cadastrar = (e) => {

    e.preventDefault()

    if (
      !nome ||
      !email ||
      !telefone ||
      !senha ||
      !confirmarSenha
    ) {
      alert('Preencha todos os campos')
      return
    }

    if (senha !== confirmarSenha) {
      alert('As senhas não coincidem')
      return
    }

    setUsuario({
      nome,
      email,
      telefone
    })

    alert('Cadastro realizado com sucesso!')

    setNome('')
    setEmail('')
    setTelefone('')
    setSenha('')
    setConfirmarSenha('')
  }

  return (
    <div className="container mt-5">

      <div className="row justify-content-center">

        <div className="col-md-6">

          <div className="card shadow">

            <div className="card-header">
              <h2>Cadastro de Usuário</h2>
            </div>

            <div className="card-body">

              <form onSubmit={cadastrar}>

                <div className="mb-3">
                  <label className="form-label">
                    Nome Completo
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={nome}
                    onChange={(e) =>
                      setNome(e.target.value)
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    E-mail
                  </label>

                  <input
                    type="email"
                    className="form-control"
                    value={email}
                    onChange={(e) =>
                      setEmail(e.target.value)
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Telefone
                  </label>

                  <input
                    type="text"
                    className="form-control"
                    value={telefone}
                    onChange={(e) =>
                      setTelefone(e.target.value)
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Senha
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    value={senha}
                    onChange={(e) =>
                      setSenha(e.target.value)
                    }
                  />
                </div>

                <div className="mb-3">
                  <label className="form-label">
                    Confirmar Senha
                  </label>

                  <input
                    type="password"
                    className="form-control"
                    value={confirmarSenha}
                    onChange={(e) =>
                      setConfirmarSenha(e.target.value)
                    }
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn-primary w-100"
                >
                  Cadastrar
                </button>

              </form>

            </div>

          </div>

          {usuario && (
            <CardUsuario usuario={usuario} />
          )}

        </div>

      </div>

    </div>
  )
}

export default App