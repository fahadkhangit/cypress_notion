describe('Web Automation Tests', () =>{

        it('Popups', () => {
          cy.visit('https://practice-automation.com/');
          cy.viewport('macbook-15'); // maximize
          cy.contains('Popups').click();
        
          cy.get('#alert').click(); // Click the Start button
        
          cy.on('window:alert', (alertText) => {
            expect(alertText).to.equal('Hi there, pal!');
          });
    
          cy.get('#confirm').click();
    
          cy.on('window:confirm', (text) => {
            expect(text).to.equal('OK or Cancel, which will it be?');
            return true;
          });
    
    
    
          cy.window().then((win) => {
            cy.stub(win, 'prompt').returns('this is dummy txt');
          });
          
          cy.get('#prompt').click();
          
    
        });
  
  });
  