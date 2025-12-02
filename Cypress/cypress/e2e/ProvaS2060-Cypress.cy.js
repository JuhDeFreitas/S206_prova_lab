describe('template spec', () => {
  it('passes', () => {
    cy.visit("https://www.demoblaze.com/index.html");
  })
});

it('Deve carreegar a homepage corretamente', function() {
      cy.visit("https://www.demoblaze.com/index.html");
      cy.contains("PRODUCT STORE").should("be.visible");
      cy.get("#tbodyid .card").should("have.length.greaterThan", 0);
      
      
      
      
});

it('Deve navegar para a categirio Phones corretamente', function() {
  cy.visit("https://www.demoblaze.com/index.html");
  cy.contains("Phones").click();
  cy.get("#tbodyid .card-title").should("be.visible");
});

it('Deve abrir um produto e ver os detalhes', function() {
  cy.visit("https://www.demoblaze.com/index.html");
  cy.contains("Laptops").click();
  cy.contains("Sony vaio i5").click();
  cy.get(".name").should("contain", "Sony vaio i5");
  cy.get("#more-information").should("be.visible");
});

it('Deve adicionar um item ao carrinho', function() {
  cy.visit("https://www.demoblaze.com/index.html");
  cy.contains("Laptops").click();
  cy.contains("Sony vaio i5").click();
  cy.contains("Add to cart").click();
  
  // Aceitar alerta
  cy.on("window:alert", (msg) => {
    expect(msg).to.include("Product added");
  });
});

it('Não permitir finalizar as compras sem os dados ', function() {
  cy.visit("https://www.demoblaze.com/index.html");
  
  cy.contains("Cart").click();
  cy.contains("Place Order").click();
  cy.contains("Purchase").click();
  
  cy.get(".modal-content").should("be.visible");
});

it('Não permitir login com usuário inexistente', function() {
    cy.visit("https://www.demoblaze.com/index.html");
       
    // Clica no botão de login da NAVBAR (único visível)
    cy.get("#login2").click();
       
    // Aguarda o modal abrir
    cy.get("#logInModal").should("be.visible");
       
    cy.get("#loginusername").type("usuario_inexistente");
    cy.get("#loginpassword").type("senha_errada");
      
    // botao de login
    cy.get("#logInModal .btn-primary").click();
       
    cy.on("window:alert", (msg) => {
         expect(msg).to.include("User does not exist");
    });
});