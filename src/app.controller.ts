import { UsersService } from "src/users/users.service";
import { Controller, Post, Body, HttpCode } from "@nestjs/common";
import { AppService } from "./app.service";
import { HighlightHistoryService } from "./highlight-history/highlight-history.service";
@Controller()
export class AppController {
  constructor(private readonly appService: AppService, private usersService: UsersService, private HighlightHistoryService: HighlightHistoryService) {}

  @Post("/openai")
  @HttpCode(200)
  async handleOpenApi(@Body() data: { text: string; id: string }) {
    try {
      // fetching the result from open-api
      const result = await this.appService.handleOpenApi(data);
      if (data.id) {
        const user = await this.usersService.findById(data.id);
        if (user) {
          await this.HighlightHistoryService.create({
            userId: user._id,
            userText: data.text,
            textResponse: result,
          });
        }
        console.log(user, "useruser");
      }
      return { text: result, statusCode: 200 };
    } catch (error) {
      console.log("error", error);
    }
  }
}
