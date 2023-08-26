/* eslint-disable react/no-unused-prop-types */
import React, { ReactPortal, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useIsomorphicEffect } from "@bigcomponents/hooks";
import { cn } from "@/lib/utils";

interface PortalProps extends React.ComponentPropsWithoutRef<"div"> {
  /** Portal children, for example, modal or popover */
  children: React.ReactNode;

  /** Element where portal should be rendered, by default new div element is created and appended to document.body */
  target?: HTMLElement | string;

  /** Root element className */
  className?: string;

  /** Root element ref */
  innerRef?: React.MutableRefObject<HTMLDivElement>;
}

function Portal({
  children,
  target,
  className,
  innerRef,
  ...others
}: PortalProps): ReactPortal | null {
  const [mounted, setMounted] = useState(false);
  const ref = useRef<Element | null>(null);

  useIsomorphicEffect(() => {
    setMounted(true);
    ref.current = !target
      ? document.createElement("div")
      : typeof target === "string"
      ? document.querySelector(target)
      : target;

    if (!target) {
      document.body.appendChild(ref.current as Node);
    }

    return () => {
      !target && document.body.removeChild(ref.current as Node);
    };
  }, [target]);

  if (!mounted) {
    return null;
  }

  return createPortal(
    <div className={cn(className)} {...others} ref={innerRef}>
      {children}
    </div>,
    ref.current as Element | DocumentFragment,
  );
}

Portal.displayName = "@bigcomponents/core/Portal";

interface OptionalPortalProps extends PortalProps {
  /** Determines if children should be rendered in Portal */
  withinPortal?: boolean;
}

function OptionalPortal({
  withinPortal = true,
  children,
  ...others
}: OptionalPortalProps) {
  if (withinPortal) {
    return <Portal {...others}>{children}</Portal>;
  }

  return <>{children}</>;
}

OptionalPortal.displayName = "@bigcomponents/core/OptionalPortal";

export { Portal, OptionalPortal };
export type { PortalProps, OptionalPortalProps };
