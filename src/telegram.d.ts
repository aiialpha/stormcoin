// telegram.d.ts
declare global {
    interface Window {
      Telegram: TelegramWebApp;
    }
  }
  
  interface TelegramWebApp {
    WebApp: {
      expand(): void;
      close(): void;
      BackButton: {
        hide(): void;
      };
    };
  }
  
  export {};
  