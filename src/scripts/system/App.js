import * as PIXI from "pixi.js";
import { Loader } from "pixi.js";
import { SceneManager } from "./SceneManager";

class Application {
  run(config) {
    this.config = config;
    this.app = new PIXI.Application({
      resizeTo: window,
    });
    document.body.appendChild(app.view);
    this.loader = new Loader(this.app.loader, this.config);
    this.loader.preload().then(() => this.start());
    this.scenes = new SceneManager();
    this.app.stage.addChild(this.scenes.container);
  }

  start() {
    console.log("Haha started");
    this.scene = new this.config["startScene"]();
    this.app.stage.addChild(this.scene.container);
    this.scenes.start("Game");
  }

  res(key) {
    return this.loader.resources[key].texture;
  }

  sprite(key){
    return new PIXI.Sprite(this.res(key));
  }
}

export const App = new Application();
