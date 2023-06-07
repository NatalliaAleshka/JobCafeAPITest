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

  it('Job listing has all details id', () => {
    cy.request('/').then((Response) => {
      console.log(Response.body.content),
        expect(Response.body.content[7]).have.property("id")
      expect(Response.body.content[7].id).not.null
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

  it('Search by city location', () => {
    cy.request('/?location=Toronto').then((Response) => {
      let resultsList = Response.body.content
      console.log(resultsList)
      expect(Response.status).equal(200)

      for (let i = 0; i < resultsList.lenghth; i++) {
        expect(resultsList[i].location).equal("Toronto, Ontario, Canada")

      }

    })
  })

  it('Search by country location_Canada', () => {
    cy.request('/?location=Canada').then((Response) => {
      let resultsList = Response.body.content
      console.log(resultsList)
      expect(Response.status).equal(200)

      for (let i = 0; i < resultsList.lenghth; i++) {
        expect(resultsList[i].location).equal("Canada")

      }

    })
  })

  it('Search by country location_USA', () => {
    cy.request('/?location=USA').then((Response) => {
      let resultsList = Response.body.content
      console.log(resultsList)
      expect(Response.status).equal(200)

      for (let i = 0; i < resultsList.lenghth; i++) {
        expect(resultsList[i].location).equal("USA")

      }

    })
  })

  it('Search by country location_Israel', () => {
    cy.request('/?location=Israel').then((Response) => {
      let resultsList = Response.body.content
      console.log(resultsList)
      expect(Response.status).equal(200)

      for (let i = 0; i < resultsList.lenghth; i++) {
        expect(resultsList[i].location).equal("Israel")

      }

    })
  })

  it('Search by provance location', () => {
    cy.request('/?location=British Columbia').then((Response) => {
      let resultsList = Response.body.content
      console.log(resultsList)
      expect(Response.status).equal(200)

      for (let i = 0; i < resultsList.lenghth; i++) {
        expect(resultsList[i].location).equal("British Columbia")

      }

    })
  })

  it('Search by description', () => {
    cy.request('/?description=salary').then((Response) => {
      let resultsList = Response.body.content
      console.log(resultsList)
      expect(Response.status).equal(200)

      for (let i = 0; i < resultsList.lenghth; i++) {
        expect(resultsList[i].description).equal("salary")

      }

    })
  })

  it('Search by job position', () => {
    cy.request('/?position= Branch Manager').then((Response) => {
      let resultsList = Response.body.content
      console.log(resultsList)
      expect(Response.status).equal(200)

      for (let i = 0; i < resultsList.lenghth; i++) {
        expect(resultsList[i].position).equal("Branch Manager")

      }

    })
  })

  it('Non-existent location', () => {
    cy.request('/?location= NonExistentLocation').then((Response) => {
      let resultsList = Response.body.content
      console.log(resultsList)
      expect(Response.status).equal(200)

      for (let i = 0; i < resultsList.length; i++) {
        expect(Response.body.content).to.be.an('array').that.is.empty;

      }

    })
  })

  it('Invalid job position', () => {
    cy.request('/?location= InvalidPosition').then((Response) => {
      let resultsList = Response.body.content
      console.log(resultsList)
      expect(Response.status).equal(200)

      for (let i = 0; i < resultsList.length; i++) {
        expect(Response.body.content).to.be.an('array').that.is.empty;

      }

    })
  })

  it('Invalid date', () => {
    cy.request('/?location= InvalidDate').then((Response) => {
      let resultsList = Response.body.content
      console.log(resultsList)
      expect(Response.status).to.not.equal(200);


    })
  })

 

})

