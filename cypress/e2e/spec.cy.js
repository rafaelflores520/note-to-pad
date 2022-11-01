describe('Create a Note', () => {
  it('Visitis the Notes Page', () => {
    cy.visit('localhost:3000/note-to-pad')
    
    //Getss 'New' Button
    cy.contains('New').click()

    //Enters Note Title
    cy.get(".Note-title").type("New Note")
    //Enter Note Body
    cy.get(".Note-body").type("This is a Test Note :)")
    //Checks for the created note
    cy.get("li").contains("New Note")
  })
})
