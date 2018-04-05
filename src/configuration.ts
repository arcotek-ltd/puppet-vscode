'use strict';

import * as vscode from 'vscode';

import { IConnectionConfiguration, ConnectionType } from './interfaces';

export class ConnectionConfiguration implements IConnectionConfiguration {
  public type: ConnectionType = ConnectionType.Unknown;
  public host: string;
  public port: number;
  public timeout: number;
  public enableFileCache: boolean;
  public debugFilePath: string;
  public puppetAgentDir: string;

  constructor(config:vscode.WorkspaceConfiguration) {

    this.host            = config['languageserver']['address'];
    this.port            = config['languageserver']['port'];
    this.timeout         = config['languageserver']['timeout'];
    this.enableFileCache = config['languageserver']['filecache']['enable'];
    this.debugFilePath   = config['languageserver']['debugFilePath'];

    this.puppetAgentDir = config['puppetAgentDir'];
  }
}
