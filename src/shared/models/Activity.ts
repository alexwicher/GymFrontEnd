import {Serializable} from "ts-jackson";

@Serializable()
export class Activity {

  constructor(
    public id: bigint,
    public activityName: string,
    public activityNameSlug: string,
    public strictTimeDefault: boolean,
    public facilityNameSlug: string
  ) {

  }

}




