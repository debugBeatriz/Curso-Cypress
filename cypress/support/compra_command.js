/// <reference types="Cypress"/>

Cypress.Commands.add('verificaProdutos',()=>{
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
})