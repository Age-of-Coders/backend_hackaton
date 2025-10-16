import { SeedDiabetes } from "./seed-diabetes";
import { SeedProfiles } from "./seed-profiles";
import { SeedUser } from "./seed-user";

export interface SeedData {
  users: SeedUser[];
  diabetes: SeedDiabetes[];
  profiles: SeedProfiles[]; 
}