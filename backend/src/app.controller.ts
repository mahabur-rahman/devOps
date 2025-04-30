import { Controller, Get, Res } from '@nestjs/common';
import { Response } from 'express';

@Controller()
export class AppController {
  @Get()
  getHome(@Res() res: Response) {
    res.setHeader('Content-Type', 'text/html');
    res.send(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>Kub First App</title>
        </head>
        <body>
          <h1>Hello from kub-first-app! 🚀</h1>
        </body>
      </html>
    `);
  }
}
