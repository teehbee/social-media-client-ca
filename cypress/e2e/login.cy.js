describe(`Login Test`, () => {
  it(`should log in with valid credentials`, () => {
    cy.visit(`https://teehbee.github.io/social-media-client-ca/`);
    cy.wait(2000);
    cy.get(
      "#registerForm > div.modal-footer > button.btn-outline-success",
    ).click();
    cy.wait(2000);
    cy.get(`#loginEmail`).type(`torber51739@stud.noroff.no`);
    cy.get(`#loginPassword`).type(`testtest`);
    cy.wait(1000);
    cy.get(`button.btn-success`).contains("Login").click();
    cy.wait(2000);
    cy.get(`body`).should(`have.class`, `logged-in`);
  });
});
