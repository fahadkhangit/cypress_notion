describe('GFM_Web Automation Tests', () =>{

  
    it('Form Fields', () => {

        cy.visit('https://practice-automation.com/');
        cy.viewport('macbook-15'); // maximize

      cy.contains('Form Fields').click();
      cy.get('#name-input').type('testt@gmail.com');
      cy.get('input[type="password"]').type('123456');
  
        cy.get('#drink3')
        .scrollIntoView()
        .click();

        cy.get('#color5')
        .scrollIntoView()
        .click();

        cy.get('#email')
        .scrollIntoView()
        .type('testt@gmail.com');

        cy.get('#message')
        .scrollIntoView()
        .type('dummy messagee123');

        cy.get('#submit-btn')
        .scrollIntoView()
        .click();

      cy.wait(3000); // Just to observe the result
    });
  
  });
  