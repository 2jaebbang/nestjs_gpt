import { ChatGPTService } from './chatgpt.service';
export declare class ChatGPTController {
    private readonly chatGPTService;
    constructor(chatGPTService: ChatGPTService);
    generateResponse(prompt: string): import("rxjs").Observable<any>;
}
