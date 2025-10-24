import { APP_ENV } from "@/constants/envs";

class UiHelper {
  shuffle(array: (string | number | HTMLElement)[]): void {
    let currentIndex = array.length;

    // While there remain elements to shuffle...
    while (currentIndex != 0) {
      // Pick a remaining element...
      const randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;

      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex],
        array[currentIndex],
      ];
    }
  }

  pageScrollTop(): number {
    return window.pageYOffset || document.documentElement.scrollTop || 0;
  }

  debounce<T extends (...args: never[]) => never>(
    func: T,
    delay: number
  ): (...args: Parameters<T>) => void {
    let timeoutId: NodeJS.Timeout | null;

    return function (...args: Parameters<T>): void {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      // eslint-disable-next-line @typescript-eslint/no-this-alias
      const context = this;

      if (timeoutId) {
        clearTimeout(timeoutId);
      }

      timeoutId = setTimeout(() => {
        func.apply(context, args);
      }, delay);
    };
  }

  isProduction(): boolean {
    return APP_ENV === "production";
  }

  isDevelopment(): boolean {
    return APP_ENV === "development";
  }
}

export const uiHelper = new UiHelper();
