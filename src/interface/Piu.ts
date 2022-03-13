import User from "./User";
import PiuLike from "./PiuLike";

export default interface Piu {
  id: string;
  user: User;
  likes: PiuLike[];
  text: string;
  created_at: Date;
  updated_at: Date;
}
