let formNotification = `
    </p><strong>Nome:</strong> ${corpo.nome}</p>
    </p><strong>E-mail:</strong> ${corpo.email}</p>
    </p><strong>Telefone:</strong> ${corpo.telefone}</p>
    </p><strong>Data:</strong> ${corpo.data}</p>
    </p><strong>Hora:</strong> ${corpo.hora}</p>
    </p><strong>Observação:</strong> ${corpo.observacao}</p>
`;

module.exports = {
    get templates() {
        return {
            get formNotification() {
                return formNotification;
            }
        }
    }
};