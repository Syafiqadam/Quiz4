class ForgotPassword {
  visitForgotPassword() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/requestPasswordResetCode"
    );
  }

  IsiUsername(username) {
    cy.get("input[placeholder='Username']").clear().type(username);
  }

  clickResetPassword() {
    cy.get("button[type='submit']").click();
  }

  VerifikasiResetPasswordBerhasil() {
    cy.url().should("include", "/sendPasswordReset");
    cy.get(".oxd-text.oxd-text--h6.orangehrm-forgot-password-title").should(
      "include.text",
      "Reset Password link sent successfully"
    );
  }

  VerifikasiResetPasswordGagal() {
    cy.get(
      ".oxd-text.oxd-text--span.oxd-input-field-error-message.oxd-input-group__message"
    )
      .should("be.visible")
      .and("contain", "Required");
  }

  clickCancel() {
    cy.get("button[type='button']").click();
  }
}

export default new ForgotPassword();
