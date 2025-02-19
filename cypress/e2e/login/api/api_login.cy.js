/// <reference types="Cypress"/>


describe('API - Teste funcional de Login', () => {
    it('Deve realizar o login com sucesso', () => {
        cy.api_login('fulano@qa.com','teste').then((response) =>{
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Login realizado com sucesso')
        })
    
    });

    it('Deve validar senha incorreta', () => {
        cy.api_login('fulano@qa.com','teste').then((response) => {
            expect(response.status).to.equal(200)
            expect(response.body.message).to.equal('Email ou senha inválida')
        })
    });

});    

      //cy.request({
      //    method: 'POST',
        //    url: 'https://serverest.dev/#/',
        //    body: {
        //       "email": "fulano@qa.com",
        //       "password": "SenhaIncorreta"
        //    },
        //    failOnStatusCode: false
        //}).then((response)=>{
        //    expect(response.status).to.equal(200)
        //    expect(response.body.message).to.equal('E-mail ou senha inválidos')
        //})
