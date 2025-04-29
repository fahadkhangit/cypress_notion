describe('GFM_Web Automation Tests', () => {
  
    beforeEach(() => {
      cy.visit('https://english1.mubasher.info/login');
      cy.viewport('macbook-15'); // maximize like Selenium's window maximize
    });
  
    it.skip('should open Home Page', () => {
      // Homepage opened successfully.
      // Add validations if needed
    });
  
    it.skip('should verify Title', () => {
      cy.title().should('eq', 'Community Mubasher');
    });
  
    it.skip('should perform Login Test', () => {
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
  