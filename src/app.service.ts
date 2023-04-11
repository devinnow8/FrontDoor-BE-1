import { Injectable } from "@nestjs/common";
const { Configuration, OpenAIApi } = require("openai");

@Injectable()
export class AppService {
  async handleOpenApi(data: { text: string }) {
    try {
      const configuration = new Configuration({
        apiKey: process.env.OPENAI_API_KEY,
      });
      const openai = new OpenAIApi(configuration);
      let result = JSON.stringify(data.text).replace(/[/\])}[{(]/g, "");
      const response = await openai.createCompletion({
        model: "text-davinci-003",
        prompt: result,
        temperature: 0.05,
        max_tokens: 256,
        top_p: 1,
        frequency_penalty: 0,
        presence_penalty: 0,
      });
      return response.data.choices[0].text;
    } catch (err) {
      console.log("errrr", err);
    }
  }
}
