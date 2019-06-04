module.exports = (conteudo) => {
    return `
        </p><strong>Nome:</strong> ${conteudo.nome}</p>
        </p><strong>E-mail:</strong> ${conteudo.email}</p>
        </p><strong>Telefone:</strong> ${conteudo.telefone}</p>
        </p><strong>Data:</strong> ${conteudo.data}</p>
        </p><strong>Hora:</strong> ${conteudo.hora}</p>
        </p><strong>Observação:</strong> ${conteudo.observacao}</p>
    `;
};