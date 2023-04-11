import { Module } from "@nestjs/common";
import { MongooseModule } from "@nestjs/mongoose";

import { HighlightHistoryService } from "./highlight-history.service";
import { HighlightHistoryController } from "./highlight-history.controller";
import { HighlightHistory, HighlightHistorySchema } from "./schemas/highlight-history.schema";

@Module({
  imports: [MongooseModule.forFeature([{ name: HighlightHistory.name, schema: HighlightHistorySchema }])],
  controllers: [HighlightHistoryController],
  providers: [HighlightHistoryService],
  exports: [HighlightHistoryService],
})
export class HighlightHistoryModule {}
