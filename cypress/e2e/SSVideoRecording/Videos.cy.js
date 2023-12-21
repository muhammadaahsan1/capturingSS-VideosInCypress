describe('testSuite: All tests having data driven testing', () => {
    //SS and Videos r very helpful in case you have scheduled the tests for night or...

    it.only ('test: SS of orangeHrm Site', () => {

    cy.visit("https://opensource-demo.orangehrmlive.com/");
    cy.wait(5000)
    cy.screenshot()
        //For video recording> cypress.config.js > add video:true to enable video recording
        /**
         * Videos will always be done when tests are runned using command line
         * 

    */


    })
})

    