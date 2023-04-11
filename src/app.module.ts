import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { AppController } from "./app.controller";
import { AppService } from "./app.service";
import { AuthModule } from "./auth/auth.module";
import { HighlightHistoryModule } from "./highlight-history/highlight-history.module";
import { UsersModule } from "./users/users.module";

@Module({
  imports: [MongooseModule.forRoot(process.env.MONGODB_URI), UsersModule, HighlightHistoryModule, AuthModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
