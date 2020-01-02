const assert = require('assert')

describe('employees.html', () => {
    // it('firstname, lastname, and title is displayed', () => {
    //     browser.url('C:/Users/rohan/source/repos/glovo-test/ui-test-assessment/employees.html')
    // })


    // it('lists employee under their manager', () => {
    //     browser.url('C:/Users/rohan/source/repos/glovo-test/ui-test-assessment/employees.html')
    // })

    // it('employees are revealed when user expands manager', () => {
    //     browser.url('C:/Users/rohan/source/repos/glovo-test/ui-test-assessment/employees.html')
    // })

    // it('updates to show the number of employees that is set in rows', () => {
    //     browser.url('C:/Users/rohan/source/repos/glovo-test/ui-test-assessment/employees.html')
    // })

    // it('paginates correctly', () => {
    //     browser.url('C:/Users/rohan/source/repos/glovo-test/ui-test-assessment/employees.html')
    // })

    it('selected data is displayed when user selects view selected data', () => {
        browser.url('C:/Users/rohan/source/repos/glovo-test/ui-test-assessment/employees.html');
        // select Andrew and Laura
        const treeGridRows = $("#tabletreeGrid").$$("tr");
        treeGridRows[0].$(".jqx-tree-grid-checkbox").click();
        treeGridRows[treeGridRows.length-1].$(".jqx-tree-grid-checkbox").click();
        // click view selected data
        const viewSelectedDataButton = $("#btn");
        viewSelectedDataButton.click();
        // check that correct data is displayed
        const listBox = $("#listBoxSelected");
        const listItems = listBox.$$(".jqx-listitem-state-normal");
        assert.equal(listItems.length, 2, "there should be 2 items in the list");
        assert.equal(listItems[0].getText(), "Andrew is from Tacoma");
        assert.equal(listItems[1].getText(), "Laura is from Seattle");
    })

})
