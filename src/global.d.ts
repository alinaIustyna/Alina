import "p5/global";

declare global {
  interface Window {
    setup: () => void;
    draw: () => void;
  }
}
