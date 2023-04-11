import { PartialType } from "@nestjs/mapped-types";
import { CreateHighlightHistoryDto } from "./highlight-history.dto";

export class UpdateHighlightHistoryDto extends PartialType(CreateHighlightHistoryDto) {}
