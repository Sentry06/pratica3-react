function CardUsuario({ usuario }) {
    return(
        <div className="card mt-4 shadow">
            <div className="card-body">
                <h4 className="card-title">Usuário Cadastrado</h4>

                <p>
                    <strong>Nome:</strong> {usuario.nome}
                </p>

                <p>
                    <strong>Email:</strong> {usuario.email}
                </p>

                <p>
                    <strong>Telefone:</strong> {usuario.telefone}
                </p>
            </div>
        </div>
    )
}

export default CardUsuario