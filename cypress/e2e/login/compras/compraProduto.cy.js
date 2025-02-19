/// <reference types="Cypress"/>

describe('Realizando compras com sucesso', () => {
    it('Fluxo da compra dos produtos', () => {
        cy.visit("https://www.saucedemo.com/v1/")
        cy.get('[data-test="username"]').type("standard_user") //usuário
        cy.get('[data-test="password"]').type("secret_sauce") //senha
        cy.get('#login-button').click()

        //ordenação de produtos de menor para maior valor:
        cy.get('.product_sort_container').select('Price (low to high)')
        //Adicionando compras ao carrinho
        cy.contains('Sauce Labs Onesie').click()
        cy.get('.btn_primary').click()
        cy.get('.inventory_details_back_button').click('topRight')

        cy.contains('Sauce Labs Bike Light').click()
        cy.get('.btn_primary').click()
        cy.get('.inventory_details_back_button').click('topRight')

        cy.contains('Sauce Labs Bolt T-Shirt').click()
        cy.get('.btn_primary').click()
        cy.get('.inventory_details_back_button').click('topRight')
        
        cy.get('.shopping_cart_badge').click()

        //checkout
        cy.get('.btn_action').click()
        cy.get('[data-test="firstName"]').type('Teste primeiro nome')
        cy.get('[data-test="lastName"]').type('Teste último nome')
        cy.get('[data-test="postalCode"]').type('47529023')
        cy.get('.btn_primary').click()

        //checar produtos
        cy.get('.cart_list > :nth-child(3)').should('contain','Sauce Labs Onesie')
        cy.get('.cart_list > :nth-child(4)').should('contain','Sauce Labs Bike Light')
        cy.get('.cart_list > :nth-child(5)').should('contain','Sauce Labs Bolt T-Shirt')

        //checar valor
        cy.get('.summary_total_label').should('have.text','Total: $36.69') //diferente do contain o havetext serve pra textos específicos e verificar de fato se tem
        cy.get('.btn_action').click()

        //checar se chegou ao fim da página
        cy.get('.complete-header').should('have.text','THANK YOU FOR YOUR ORDER')


    });


});