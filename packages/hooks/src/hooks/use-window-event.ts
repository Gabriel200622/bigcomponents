import { useEffect } from "react";

type WindowEvent = keyof WindowEventMap;

export function useWindowEvent<K extends WindowEvent>(
  type: K,
  listener: (this: Window, ev: WindowEventMap[K]) => void,
  options?: boolean | AddEventListenerOptions,
) {
  useEffect(() => {
    window.addEventListener(type, listener, options);
    return () => window.removeEventListener(type, listener, options);
  }, [type, listener, options]);
}
