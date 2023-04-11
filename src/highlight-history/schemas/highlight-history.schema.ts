import { Document } from "mongoose";
import { Prop, Schema, SchemaFactory } from "@nestjs/mongoose";

export type HighlightHistoryDocument = HighlightHistory & Document;

@Schema()
export class HighlightHistory {
  @Prop({ required: true })
  userText: string;

  @Prop({ required: true })
  textResponse: string;

  @Prop({ required: true })
  userId: string;
}

export const HighlightHistorySchema = SchemaFactory.createForClass(HighlightHistory);
