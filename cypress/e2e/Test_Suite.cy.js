describe('Practice Automation Tests', () => {
  
    beforeEach(() => {
      cy.visit('https://practice-automation.com/');
      cy.viewport('macbook-15'); // maximize like Selenium's window maximize
    });
  
    it.skip('should open Home Page', () => {
      // Homepage opened successfully.
      // Add. validations if needed
    });


    it.skip('verify Title', () => {
        cy.title().should('eq', 'Learn and Practice Automation | automateNow');
      });

  
    it.skip('JavaScript Delays', () => {
        cy.contains('JavaScript Delays').click();
        cy.get('#start').click;

        cy.wait(15000);
        cy.get('#delay', { timeout: 30000 }).click(); // waits up to 30 seconds
        

    });


    it.skip('clicks Start, waits for Liftoff text, then clicks Delay button', () => {
        cy.contains('JavaScript Delays').click();
      
        cy.get('#start').click(); // Click the Start button
      
        cy.contains('Liftoff!', { timeout: 15000 }) // Wait for "Liftoff!" text to appear
          .should('be.visible');
      
        cy.get('#delay').click(); // Now click the Delay button
      });
      

    it.skip('Form Fields', () => {
      cy.contains('Form Fields').click();
      cy.get('#name-input').type('asf@gmail.com');
      cy.get('input[type="password"]').type('123456');
      
      cy.get('#drink3')
      .scrollIntoView()
      .click();

      cy.get('#color5')
      .scrollIntoView()
      .click();

      cy.get('#automation')
      .scrollIntoView()
      .select('No');

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


    it('Popups', () => {
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
  