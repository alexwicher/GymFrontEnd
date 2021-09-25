import {JsonProperty, Serializable} from "ts-jackson";

@Serializable()
export class Facility {

  @JsonProperty()
  id: bigint;
  @JsonProperty()
  facilityName: string;
  @JsonProperty()
  email: string;
  @JsonProperty()
  phone: string;
  @JsonProperty({ required: false })
  facilityNameSlug: string;

  constructor(id: bigint, facilityName: string, email: string, phone: string, facilityNameSlug: string) {
    this.id = id;
    this.facilityName = facilityName;
    this.facilityNameSlug = facilityNameSlug;
    this.phone = phone;
    this.email = email;
  }

}




