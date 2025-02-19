let token //criar variável e atribuir
describe('Deve realizar o login e cadastrar um produto com sucesso', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.api_login('fulano@qa.com','teste').then((response) =>{
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Login realizado com sucesso')
            token = response.body.authorization
        })

    });

    it('Deve cadastrar um produto com sucesso', () => {
        cy.request({
            method: 'POST',
            url: 'https://serverest.dev/#/Produtos/post_produtos',
            header:{
                authorization: token
            },
            body:{
                "nome": "Carro Teste",
                "preco": 470,
                "descricao": "Mouse",
                "quantidade": 381

            }

        }).then((response) => {
            expect(response.status).to.equal(201)
            expect(response.body.message).to.equal('Cadastro realizado com sucesso')
        });
    });
});    