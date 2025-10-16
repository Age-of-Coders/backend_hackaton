import { Module } from "@nestjs/common";
import { SeedController } from "./seed.controller";
import { SeedService } from "./seed.service";
import { UsersModule } from "src/modules/users/users.module";
import { PassportModule } from "@nestjs/passport";

@Module({
  imports: [
    UsersModule,
    PassportModule.register({ defaultStrategy: 'jwt' }),
  ],
  controllers: [SeedController],
  providers: [SeedService],
})

export class SeedModule {}