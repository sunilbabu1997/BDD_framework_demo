export function clearAndType(selector, text) {
  cy.get(selector).clear().type(text);
}

export function selectDropdownOption(selector, optionText) {
  cy.get(selector).click();
  cy.get(`${selector} .oxd-select-text`).contains(optionText).click();
}

export function checkCheckbox(selector, shouldCheck = true) {
  if (shouldCheck) {
    cy.get(selector).check();
  } else {
    cy.get(selector).uncheck();
  }
}

export function uploadFile(selector, filePath) {
  cy.get(selector).selectFile(filePath, { force: true });
}
