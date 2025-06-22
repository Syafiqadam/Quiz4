import loginPage from "../../support/PageTA/LoginAction";

describe("Fitur Login - OrangeHRM", () => {
  beforeEach(() => {
    loginPage.visitLoginPage();
  });

  it("1. Login berhasil dengan kredensial valid", () => {
    loginPage.interceptLogin();
    loginPage.interceptDashboard();
    loginPage.IsiUsername("Admin");
    loginPage.IsiPassword("admin123");
    loginPage.clickLogin();
    loginPage.VerifikasiLoginBerhasil();
    cy.wait(1000);
  });

  it("2. Login gagal dengan password salah", () => {
    loginPage.interceptLogin();
    loginPage.interceptDashboard();
    loginPage.IsiUsername("Admin");
    loginPage.IsiPassword("salah123");
    loginPage.clickLogin();
    loginPage.VerifikasiLoginGagal();
    cy.wait(1000);
  });

  it("3. Login gagal dengan username salah", () => {
    loginPage.interceptLogin();
    loginPage.interceptDashboard();
    loginPage.IsiUsername("salahUser");
    loginPage.IsiPassword("admin123");
    loginPage.clickLogin();
    loginPage.VerifikasiLoginGagal();
    cy.wait(1000);
  });

  it("4. Login gagal dengan username kosong", () => {
    loginPage.interceptLogin();
    loginPage.interceptDashboard();
    loginPage.IsiUsername(" ");
    loginPage.IsiPassword("admin123");
    loginPage.clickLogin();
    cy.get(".oxd-input-field-error-message").should("contain", "Required");
    cy.wait(1000);
  });

  it("5. Login gagal dengan password kosong", () => {
    loginPage.interceptLogin();
    loginPage.interceptDashboard();
    loginPage.IsiUsername("Admin");
    loginPage.IsiPassword(" ");
    loginPage.clickLogin();
    cy.get(".oxd-input-field-error-message").should("contain", "Required");
    cy.wait(1000);
  });

  it("6. Login gagal dengan username dan password kosong", () => {
    loginPage.interceptLogin();
    loginPage.interceptDashboard();
    loginPage.clickLogin();
    cy.get(".oxd-input-field-error-message").should("contain", "Required");
    cy.wait(1000);
  });

  it("7. Navigasi ke halaman Forgot Password", () => {
    loginPage.clickForgotPasswordLink();
    loginPage.VerivikasiResetPasswordPage();
    cy.wait(1000);
  });
});
