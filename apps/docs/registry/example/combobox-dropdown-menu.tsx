"use client";

import * as React from "react";
import {
  Calendar,
  MoreHorizontal,
  Tags,
  Trash,
  User,
} from "@bigcomponents/core/lucide";
import {
  Button,
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuGroup,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuShortcut,
  DropdownMenuSub,
  DropdownMenuSubContent,
  DropdownMenuSubTrigger,
  DropdownMenuTrigger,
} from "@bigcomponents/core";

const labels = [
  "feature",
  "bug",
  "enhancement",
  "documentation",
  "design",
  "question",
  "maintenance",
];

export default function ComboboxDropdownMenu() {
  const [label, setLabel] = React.useState("feature");
  const [open, setOpen] = React.useState(false);

  return (
    <div className="flex flex-col items-start justify-between w-full px-4 py-3 border rounded-md sm:flex-row sm:items-center">
      <p className="text-sm font-medium leading-none">
        <span className="px-2 py-1 mr-2 text-xs rounded-lg bg-primary text-primary-foreground">
          {label}
        </span>
        <span className="text-muted-foreground">Create a new project</span>
      </p>
      <DropdownMenu open={open} onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="sm">
            <MoreHorizontal />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-[200px]">
          <DropdownMenuLabel>Actions</DropdownMenuLabel>
          <DropdownMenuGroup>
            <DropdownMenuItem>
              <User className="w-4 h-4 mr-2" />
              Assign to...
            </DropdownMenuItem>
            <DropdownMenuItem>
              <Calendar className="w-4 h-4 mr-2" />
              Set due date...
            </DropdownMenuItem>
            <DropdownMenuSeparator />
            <DropdownMenuSub>
              <DropdownMenuSubTrigger>
                <Tags className="w-4 h-4 mr-2" />
                Apply label
              </DropdownMenuSubTrigger>
              <DropdownMenuSubContent className="p-0">
                <Command>
                  <CommandInput
                    placeholder="Filter label..."
                    autoFocus={true}
                  />
                  <CommandList>
                    <CommandEmpty>No label found.</CommandEmpty>
                    <CommandGroup>
                      {labels.map((label) => (
                        <CommandItem
                          key={label}
                          onSelect={(value) => {
                            setLabel(value);
                            setOpen(false);
                          }}
                        >
                          {label}
                        </CommandItem>
                      ))}
                    </CommandGroup>
                  </CommandList>
                </Command>
              </DropdownMenuSubContent>
            </DropdownMenuSub>
            <DropdownMenuSeparator />
            <DropdownMenuItem className="text-red-600">
              <Trash className="w-4 h-4 mr-2" />
              Delete
              <DropdownMenuShortcut>⌘⌫</DropdownMenuShortcut>
            </DropdownMenuItem>
          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
