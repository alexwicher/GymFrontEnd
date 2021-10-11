import {Serializable} from "ts-jackson";

@Serializable()
export class User {
  constructor(
    public id: bigint,
    public userName: string,
    public userNameSlug: string,
    public fullName: string,
    public DNI: string,
    public email: string,
    public sessionJWT: string,
  ) {

  }
}
