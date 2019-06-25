// eslint-disable-next-line no-unused-vars
import { UserLevels } from "~/models/UserLevels";

export default interface MenuItem {
  title: string;
  icon: string;
  link: string;
  userLevel: UserLevels;
}
