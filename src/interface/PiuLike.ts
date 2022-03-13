import User from "./User";
import Piu from "./Piu";

export default interface PiuLike {
  id: string;
  user: User;
  piu: Piu;
}
