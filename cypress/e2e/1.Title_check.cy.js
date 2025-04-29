describe('Practice Automation Tests', () => {
  
    beforeEach(() => {
      cy.visit('https://practice-automation.com/');
      cy.viewport('macbook-15');
    });
  
    it.skip('should open Home Page', () => {
      // Homepage opened successfully.
      // Add. validations if needed
    });


    it.skip('verify Title', () => {
        cy.title().should('eq', 'Learn and Practice Automation | automateNow');
      });


  
  });
  