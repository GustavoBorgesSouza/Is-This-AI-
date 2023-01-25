const { wait } = require("@testing-library/user-event/dist/utils");

describe('End to end Testing', () => {
  beforeEach(() => {
    cy.visit("https://isthisai.vercel.app/");
  })

  it("Deve entrar na landing page, existir um botão com o texto Let's get started, clicar para ir ao desafio e lá ter dois botões e texto de pontos",()=>{

    cy.get(".c-info__button").should("have.text", "Let’s get started").click()
  
    wait(1000)
  
    cy.get(".c-quiz").within(() => {
      cy.get('.c-quiz__button')
      cy.get(".c-quizPoints")
  
    })

  })



})