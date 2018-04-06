// The module 'assert' provides assertion methods from node
import * as assert from 'assert';

// You can import and use all API from the 'vscode' module
// as well as import your extension to test it
import * as vscode from 'vscode';
import { ConnectionConfiguration } from './../configuration';

suite("Configuration Tests", () => {

  test("Should parse host address", () => {

    let config = vscode.workspace.getConfiguration('puppet');

    var configSettings = new ConnectionConfiguration(config);

    assert.equal('127.0.0.1', configSettings.host);
    assert.equal('8081', configSettings.port);
  });

});
