import { Injectable } from '@nestjs/common';
import { AxiosResponse } from 'axios';
import { Observable } from 'rxjs';
import { HttpService } from '@nestjs/axios';

@Injectable()
export class ChatGPTService {
  private readonly apiKey: string;
  private readonly apiUrl: string;

  constructor(private readonly httpService: HttpService) {
    this.apiKey = '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';
    this.apiUrl = 'https://api.openai.com/v1/completions';
  }

  generateResponse(prompt: string): Observable<AxiosResponse> {
    const data = {
      model: 'text-davinci-003',
      prompt: prompt,
      max_tokens: 15,
      n: 1,
      stop: null,
      temperature: 1,
    };

    const headers = {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${this.apiKey}`,
    };

    return this.httpService.post(this.apiUrl, data, { headers: headers });
  }
}
