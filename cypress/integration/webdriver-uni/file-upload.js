const landingPageUrl = "http://webdriveruniversity.com";

describe("Verify file upload", () => {
    it('Upload a file', function () {
        const fileName = "Screenshot.png";
        cy.visit(landingPageUrl);
        cy.get("#file-upload").invoke("removeAttr", "target").click({force: true})
        cy.fixture(fileName, "base64")
            .then(fileContent => {
                cy.get('#myFile').attachFile({
                        fileContent,
                        fileName,
                        mimeType: "image/png",
                        encoding: 'utf-8',
                        lastModified: new Date().getTime()
                    },
                    {
                        uploadType: "input"
                    });
            }).then(() => {
            cy.get('#submit-button').click()
        })
    });

    it.only('Upload no file', function () {
        cy.visit(landingPageUrl);
        cy.get("#file-upload").invoke("removeAttr", "target").click({force: true})
        cy.get('#submit-button').click()
    });
})
