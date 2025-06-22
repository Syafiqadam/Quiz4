class DirectoryPage {
  clickMenuDirectory() {
    cy.get("a.oxd-main-menu-item").contains("Directory").click();
  }

  interceptDirectory() {
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0"
    ).as("getDirectory");
  }

  mencariKaryawan() {
    cy.intercept(
      "GET",
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0"
    ).as("search");
    cy.get("input[placeholder='Type for hints...']").type("Peter");
    cy.contains("Peter Mac Anderson").click();

    cy.get("button[type='submit']").click();
    cy.wait("@search");

    cy.get("p.oxd-text--p.orangehrm-directory-card-header.--break-words")
      .should("be.visible")
      .and("contain.text", "Peter Mac Anderson");
  }

  resetKaryawan() {
    cy.intercept(
      "https://opensource-demo.orangehrmlive.com/web/index.php/api/v2/directory/employees?limit=14&offset=0"
    ).as("resetEmployee");
    cy.get("button[type='reset']").should("be.visible").click();
    cy.wait("@resetEmployee");
    cy.get("span[class='oxd-text oxd-text--span']")
      .should("be.visible")
      .should("contains.text", "Records Found");
  }
}

export default new DirectoryPage();
