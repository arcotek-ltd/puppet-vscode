import * as vscode from 'vscode';
import * as messages from '../../src/messages';
import { IConnectionManager } from '../../src/connection';
import { ILogger } from '../../src/logging';
import { PDKNewModuleCommand } from './pdk/pdkNewModuleCommand';
import { PDKNewClassCommand } from './pdk/pdkNewClassCommand';
import { PDKNewTaskCommand } from './pdk/pdkNewTaskCommand';
import { PDKValidateCommand } from './pdk/pdkValidateCommand';
import { PDKTestUnitCommand } from './pdk/pdkTestCommand';

export function setupPDKCommands(langID: string, connManager: IConnectionManager, ctx: vscode.ExtensionContext, logger: ILogger, terminal: vscode.Terminal) {
  let newModuleCommand = new PDKNewModuleCommand(logger, terminal);
  ctx.subscriptions.push(newModuleCommand);
  ctx.subscriptions.push(vscode.commands.registerCommand(messages.PDKCommandStrings.PdkNewModuleCommandId, () => {
    newModuleCommand.run();
  }));

  let newClassCommand = new PDKNewClassCommand(logger, terminal);
  ctx.subscriptions.push(newClassCommand);
  ctx.subscriptions.push(vscode.commands.registerCommand(messages.PDKCommandStrings.PdkNewClassCommandId, () => {
    newClassCommand.run();
  }));
  
  let newTaskCommand = new PDKNewTaskCommand(logger, terminal);
  ctx.subscriptions.push(newClassCommand);
  ctx.subscriptions.push(vscode.commands.registerCommand(messages.PDKCommandStrings.PdkNewTaskCommandId, () => {
    newTaskCommand.run();
  }));

  let validateCommand = new PDKValidateCommand(logger, terminal);
  ctx.subscriptions.push(validateCommand);
  ctx.subscriptions.push(vscode.commands.registerCommand(messages.PDKCommandStrings.PdkValidateCommandId, () => {
    validateCommand.run();
  }));

  let testUnitCommand = new PDKTestUnitCommand(logger, terminal);
  ctx.subscriptions.push(testUnitCommand);
  ctx.subscriptions.push(vscode.commands.registerCommand(messages.PDKCommandStrings.PdkTestUnitCommandId, () => {
    testUnitCommand.run();
  }));
}
