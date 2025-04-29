describe('Practice Automation Tests', () => {
  
    beforeEach(() => {
      cy.visit('https://practice-automation.com/');
      cy.viewport('macbook-15');
    });
  
    it('should open Home Page', () => {
      // Homepage opened successfully.
      // Add. validations if needed
    });


    it('verify Title', () => {
        cy.title().should('eq', 'Learn and Practice Automation | automateNow');
      });


  
  });
  