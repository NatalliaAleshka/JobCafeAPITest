/// <reference types = "Cypress"/>


describe('Get Jobs Test', () => {

  it('Get all jobs', () => {
    cy.request('/').then((Response) => {
      console.log(Response),
        expect(Response.status).eq(200),
        expect(Response.statusText).eq("OK")

    })
  })

  it('Verify jobs results list', () => {
    cy.request('/').then((Response) => {
      console.log(Response.body.content),
        expect(Response.body.content).not.empty


    })
  })

  it('Job listing has all details', () => {
    cy.request('/').then((Response) => {
      console.log(Response.body.content),
        expect(Response.body.content[0]).have.property("id")
      expect(Response.body.content[0].id).not.null
      // expect(Response.body.content[0].id).equal("63b44b6b74f47208c44470d1")
    })
  })

  it('Job listing has all details', () => {
    cy.request('/').then((Response) => {
      var result = Response.body.content[1]
      console.log(result);
      expect(result).have.property("id")
      expect(result.id).equal("63b44a8174f47208c44470b3")

      expect(result).have.property("position")
      expect(result.position).equal("Project Manager IV - Enbridge")

      expect(result).have.property("link")
      expect(result.link).contain("https")

    })
  })

  it('Search by location', () => {
    cy.request('/?location=Toronto').then((Response) => {
      let resultsList = Response.body.content
      console.log(resultsList)
      expect(Response.status).equal(200)

      for (let i = 0; i < resultsList.lenghth; i++) {
        expect(resultsList[i].location).equal("Toronto, Ontario, Canada")


      }


    })
  })

})