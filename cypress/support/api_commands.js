Cypress.Commands.add('api_login', (user, password)=>{
    cy.request({
        method: 'POST',
        url: 'https://serverest.dev/#/',
        body:{
            "email": user,
            "password": password
        }
    }).then((response)=>{
        return response
    })

})
