import { Tools } from "../system/Tools";
import { Game } from "./Game";

export const Config = {
  loader: Tools.massiveRequire(
    require["context"]("../../sprites", true, /\.(mp3|png|jpe?g)$/)
  ),
  startScene: Game,
  scenes: {
    "Game" : Game
  }
};
