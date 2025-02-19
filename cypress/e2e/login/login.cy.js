/// <reference types="Cypress"/>

//descrever isso 
    describe('Testes Funcional de Login', () => {
        it.only('Deve realizar o login com sucesso', () => {
            cy.visit("https://www.saucedemo.com/v1/")
            cy.get('[data-test="username"]').type("standard_user1") //usuário
            cy.get('[data-test="password"]').type("secret_sauce") //senha
            cy.get('#login-button').click()
    });
        it('Validando Login Incorreto', () => {
            cy.visit("https://www.saucedemo.com/v1/")
            cy.login_teste('incorreto','secret_sauce')
            //cy.get('[data-test="username"]').type("standard_user4") //usuário
            //cy.get('[data-test="password"]').type("secret_sauce") //senha
            cy.get('#login-button').click() //clicar no botão
            cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
        });

        it('Validar senha incorreta', () => {
            cy.visit("https://www.saucedemo.com/v1/")
            cy.login_teste('standard_user1','incorreta')
            //cy.get('[data-test="username"]').type("standard_user") //usuário
            //cy.get('[data-test="password"]').type("secret_sauce3") //senha
            cy.get('#login-button').click() //clicar no botão
            cy.get('[data-test="error"]').should('contain','Epic sadface: Username and password do not match any user in this service')
        });

});
