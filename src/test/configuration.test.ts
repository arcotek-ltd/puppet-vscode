// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import { ConnectionConfiguration } from './../configuration';

// Defines a Mocha test suite to group tests of similar kind together
suite("Extension Tests", () => {

  // Defines a Mocha unit test
  test("Something 1", () => {

    let config = vscode.workspace.getConfiguration('puppet');

    let c = {};
    c['languageserver']['address'] = '127.0.0.1';

    var configSettings = new ConnectionConfiguration(config);

    assert.equal('127.0.0.1', configSettings.host);
  });
});
