/// <reference types = "Cypress"/>

describe("DynamicTableAutomation", function(){
  //Testcase will open the url of the website as mentioned and automate the process
    it("WebsiteAutomation", function(){
      // usrdata is the json-array variable which holds the user data 
        const usrdata = [
            {
                "name" : "Bob", 
                "age" : 20, 
                "gender": "male"
            }, 
            {
                "name": "George", 
                "age" : 42, 
                "gender": "male"
            }, 
            {
                "name":"Sara", 
                "age" : 42, 
                "gender": "female"
            }, 
            {
                "name": "Conor", 
                "age" : 40, 
                "gender": "male"
            }, 
            {
                "name":"Jennifer", 
                "age" : 42, 
                "gender": "female"
            }
        ]
        cy.visit("https://testpages.herokuapp.com/styled/tag/dynamic-table.html") // website url
        cy.wait(1000) // wait time in ms to load the website 
        cy.get('summary').click()
        cy.get('#jsondata').clear() 
        //cy.get('#jsondata').clear().wait(5000).type(`[{"name" : "Bob", "age" : 20, "gender": "male"}, {"name": "George", "age" : 42, "gender": "male"}, {"name":
        //"Sara", "age" : 42, "gender": "female"}, {"name": "Conor", "age" : 40, "gender": "male"}, {"name":
        //"Jennifer", "age" : 42, "gender": "female"}]`)
        //cy.get('#jsondata').clear().wait(1000).type(JSON.stringify(usrdata))
        //cy.get('#refreshtable').click()
    })
})