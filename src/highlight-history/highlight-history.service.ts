import { Model } from "mongoose";
import { Injectable } from "@nestjs/common";
import { InjectModel } from "@nestjs/mongoose";

import { CreateHighlightHistoryDto } from "./dto/highlight-history.dto";
import { HighlightHistory, HighlightHistoryDocument } from "./schemas/highlight-history.schema";

@Injectable()
export class HighlightHistoryService {
  constructor(
    @InjectModel(HighlightHistory.name)
    private historyModel: Model<HighlightHistoryDocument>
  ) {}

  async create(createHighlightHistoryDto: CreateHighlightHistoryDto): Promise<HighlightHistoryDocument> {
    const createdHistory = new this.historyModel(createHighlightHistoryDto);
    return createdHistory.save();
  }

  async findByUserId(userId: string): Promise<HighlightHistoryDocument[]> {
    return this.historyModel.find({ userId }).exec();
  }

  async findAll(): Promise<HighlightHistoryDocument[]> {
    return this.historyModel.find().exec();
  }

  async findById(id: string): Promise<HighlightHistoryDocument> {
    return this.historyModel.findById(id);
  }
}
