describe('Web Automation Tests', () =>{

  
        it('JavaScript Delays', () => {

          cy.visit('https://practice-automation.com/');
          cy.viewport('macbook-15'); // maximize
          cy.contains('JavaScript Delays').click();
        
          cy.get('#start').click(); // Click the Start button
        
          cy.contains('Liftoff!', { timeout: 15000 }) // Wait for "Liftoff!" text to appear
            .should('be.visible');
        
          cy.get('#delay').click(); // Now click the Delay button
        });
  
  });
  