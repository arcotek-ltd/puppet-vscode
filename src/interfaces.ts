'use strict';

// Only add simple interfaces here. No import's allowed

export enum ConnectionStatus {
  NotStarted,
  Starting,
  Running,
  Stopping,
  Failed
}

export enum ConnectionType {
  Unknown,
  Local,
  Remote
}

export interface IConnectionConfiguration {
  type: ConnectionType;
  host: string;
  port: number;
  timeout: number;
  enableFileCache: boolean;
  debugFilePath: string;
  puppetAgentDir: string;
  languageServerPath:string;
  rubydir:string;
  rubylib:string;
  environmentPath:string;
  sslCertFile:string;
  sslCertDir:string;
  pdkDir:string;
  languageServerCommandLine:Array<string>;
}
