"use client";

import * as React from "react";
import { ChevronsUpDown } from "@bigcomponents/core/lucide";
import {
  Button,
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@bigcomponents/core";

export default function CollapsibleDemo() {
  const [isOpen, setIsOpen] = React.useState(false);

  return (
    <Collapsible
      open={isOpen}
      onOpenChange={setIsOpen}
      className="w-[350px] space-y-2"
    >
      <div className="flex items-center justify-between px-4 space-x-4">
        <h4 className="text-sm font-semibold">
          @peduarte starred 3 repositories
        </h4>
        <CollapsibleTrigger asChild>
          <Button variant="ghost" size="sm" className="p-0 w-9">
            <ChevronsUpDown className="w-4 h-4" />
            <span className="sr-only">Toggle</span>
          </Button>
        </CollapsibleTrigger>
      </div>
      <div className="px-4 py-3 font-mono text-sm border rounded-md">
        @radix-ui/primitives
      </div>
      <CollapsibleContent className="space-y-2">
        <div className="px-4 py-3 font-mono text-sm border rounded-md">
          @radix-ui/colors
        </div>
        <div className="px-4 py-3 font-mono text-sm border rounded-md">
          @stitches/react
        </div>
      </CollapsibleContent>
    </Collapsible>
  );
}
