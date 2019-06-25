// eslint-disable-next-line no-unused-vars
import { UserRole } from "~/models/UserType";

export class UserInputType {
  public id: number;
  public username: string;
  public sid: string;
  public userType: UserRole;
}
