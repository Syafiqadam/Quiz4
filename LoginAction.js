class LoginPage {
  visitLoginPage() {
    cy.visit(
      "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login"
    );
  }

  IsiUsername(username) {
    cy.get("input[name='username']").clear().type(username);
  }

  IsiPassword(password) {
    cy.get("input[name='password']").clear().type(password);
  }

  clickLogin() {
    cy.get("button[type='submit']").click();
  }

  VerifikasiLoginBerhasil() {
    cy.url().should("include", "/dashboard");
    cy.get(".oxd-topbar-header-breadcrumb h6").should("contain", "Dashboard");
  }

  VerifikasiLoginGagal() {
    cy.get(".oxd-alert-content-text")
      .should("be.visible")
      .and("contain", "Invalid credentials");
  }

  VerivikasiResetPasswordPage() {
    cy.url().should("include", "/requestPasswordResetCode");
    cy.get(".oxd-text.oxd-text--h6.orangehrm-forgot-password-title").should(
      "include.text",
      "Reset Password"
    );
  }

  interceptLogin() {
    cy.intercept(
      "POST",
      "https://opensource-demo.orangehrmlive.com/web/api/v2/dashboard/employees/action-summary"
    ).as("actionSummary");
  }

  interceptDashboard() {
    cy.intercept(
      "POST",
      "https://opensource-demo.orangehrmlive.com/web/api/v2/dashboard/employees/action-summary"
    ).as("actionSummary");
  }

  clickForgotPasswordLink() {
    cy.get(".oxd-text.oxd-text--p.orangehrm-login-forgot-header").click();
  }

  getForgotPasswordHeader() {
    return cy.get(".oxd-text.oxd-text--h6.orangehrm-forgot-password-title");
  }
}

export default new LoginPage();
