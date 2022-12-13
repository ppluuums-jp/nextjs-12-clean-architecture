import { Gender } from "../values/gender";

export class User {
  readonly uuid: string;
  readonly name: string;
  readonly gender: Gender;
  readonly createdAt: Date;
  readonly updatedAt: Date;

  constructor(params: {
    uuid: string;
    name: string;
    gender: Gender;
    createdAt: Date;
    updatedAt: Date;
  }) {
    this.uuid = params.uuid;
    this.name = params.name;
    this.gender = params.gender;
    this.createdAt = params.createdAt;
    this.updatedAt = params.updatedAt;
  }
}
