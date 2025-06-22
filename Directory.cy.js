import LoginPage from "../../support/PageTA/LoginAction";
import DirectoryPage from "../../support/PageTA/DirectoryPage";

describe("Test Directory Page Dengan POM Dan Intercept", () => {
  beforeEach(() => {
    LoginPage.visitLoginPage();
    LoginPage.IsiUsername("Admin");
    LoginPage.IsiPassword("admin123");
    LoginPage.clickLogin();
    LoginPage.VerifikasiLoginBerhasil(); // optional
    cy.get(".oxd-main-menu-item").contains("Directory").click();
    cy.url().should("include", "/directory/viewDirectory");
  });

  it("11. Melakukan Intercept Dan Memverifikasi Pemuatan Halaman Directory", () => {
    DirectoryPage.interceptDirectory();
    DirectoryPage.clickMenuDirectory();

    cy.wait("@getDirectory").its("response.statusCode").should("eq", 200);
    // directoryPage.validatePage(); // hanya jika fungsi ini memang ada
  });

  it("12. Pencarian Dan Reset", () => {
    DirectoryPage.mencariKaryawan();
    DirectoryPage.resetKaryawan();
  });
});
