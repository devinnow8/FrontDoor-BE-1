import { Controller, Get, Post, Body, Param } from "@nestjs/common";
import { HighlightHistoryService } from "./highlight-history.service";
import { CreateHighlightHistoryDto } from "./dto/highlight-history.dto";

@Controller("highlight-history")
export class HighlightHistoryController {
  constructor(private readonly HighlightHistoryService: HighlightHistoryService) {}

  //creating entry of the response with userId and text msg
  @Post()
  create(@Body() CreateHighlightHistoryDto: CreateHighlightHistoryDto) {
    return this.HighlightHistoryService.create(CreateHighlightHistoryDto);
  }

  //fetching the histories data on the basis of userId
  @Get("userId/:id")
  findByUserId(@Param("id") id: string) {
    return this.HighlightHistoryService.findByUserId(id);
  }

  @Get()
  findAll() {
    return this.HighlightHistoryService.findAll();
  }

  //fetching the histories data on the basis of id
  @Get(":id")
  findById(@Param("id") id: string) {
    return this.HighlightHistoryService.findById(id);
  }
}
