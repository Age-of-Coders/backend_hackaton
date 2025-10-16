import { Injectable } from "@nestjs/common";
import * as bcrypt from "bcrypt";
import { BcryptAdapter } from "../interfaces/bcrypt.adapter";

@Injectable()
export class Bcrypt implements BcryptAdapter {
  private readonly saltRounds = 10;

  async hash(value: string): Promise<string> {
    return await bcrypt.hash(value, this.saltRounds); 
  }

  async compare(value: string, hashed: string): Promise<boolean> {
    return await bcrypt.compare(value, hashed);
  }
}