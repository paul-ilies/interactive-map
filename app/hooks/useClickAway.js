import * as React from "react";



export default function useClickAway(cb) {
  const ref = React.useRef(null);

  const onEventHandler = React.useCallback((e) => {
    const element = ref.current;
    if (element && !element.contains(e.target)) {
      cb(e);
    }
  },[cb]);

  React.useEffect(() => {
    document.addEventListener("mousedown", onEventHandler);
    document.addEventListener("touchstart", onEventHandler);

    return () => {
      document.removeEventListener("mousedown", onEventHandler);
      document.removeEventListener("touchstart", onEventHandler);
    };
  }, [onEventHandler]);

  return ref;
}