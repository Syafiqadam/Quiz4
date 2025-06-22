import ForgotPassword from "../../support/PageTA/ForgotPassword";

describe("Fitur Forgot Password", () => {
  beforeEach(() => {
    ForgotPassword.visitForgotPassword();
  });

  it("8. Berhasil Melakukan Reset Password", () => {
    ForgotPassword.IsiUsername("Admin");
    ForgotPassword.clickResetPassword();
    ForgotPassword.VerifikasiResetPasswordBerhasil();
    cy.wait(1000);
  });

  it("9. Gagal Melakukan Reset Password", () => {
    ForgotPassword.IsiUsername(" ");
    ForgotPassword.clickResetPassword();
    ForgotPassword.VerifikasiResetPasswordGagal();
    cy.wait(1000);
  });

  it("10. Melakukan Click Cancel", () => {
    ForgotPassword.clickCancel();
    cy.wait(1000);
  });
});
