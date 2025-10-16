import { Module } from "@nestjs/common";
import { SeedController } from "./seed.controller";
import { SeedService } from "./seed.service";
import { UsersModule } from "src/modules/users/users.module";
import { PassportModule } from "@nestjs/passport";
import { DiabetesModule } from "../diabetes/diabetes.module";
import { TypeOrmModule } from "@nestjs/typeorm";
import { User } from "src/modules/users/entities/user.entity";
import { Diabetes } from "../diabetes/entities/diabetes.entity";

@Module({
  imports: [
    TypeOrmModule.forFeature([User, Diabetes]),
    UsersModule,
    DiabetesModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [SeedController],
  providers: [SeedService],
})

export class SeedModule {}