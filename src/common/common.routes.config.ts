import {Application} from "express";

export abstract class CommonRoutesConfig {
  protected constructor(
    private _app: Application,
    private _name: string,
  ) {
    this.configureRoutes();
  }

  get app() {
    return this._app
  }

  get name() {
    return this._name;
  }

  abstract configureRoutes(): Application;
}