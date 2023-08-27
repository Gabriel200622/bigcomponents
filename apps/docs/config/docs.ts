import { MainNavItem, SidebarNavItem } from "types/nav";

interface DocsConfig {
  mainNav: MainNavItem[];
  sidebarNav: SidebarNavItem[];
}

export const docsConfig: DocsConfig = {
  mainNav: [
    {
      title: "Documentation",
      href: "/docs/introduction",
    },
    {
      title: "Components",
      href: "/docs/components/accordion",
    },
    // {
    //   title: "Themes",
    //   href: "/themes",
    // },
    // {
    //   title: "Examples",
    //   href: "/examples",
    // },
    {
      title: "GitHub",
      href: "https://github.com/Gabriel200622/bigcomponents",
      external: true,
    },
    {
      title: "Twitter",
      href: "https://github.com/Gabriel200622/bigcomponents",
      external: true,
    },
  ],
  sidebarNav: [
    {
      title: "Getting Started",
      items: [
        {
          title: "Introduction",
          href: "/docs/introduction",
          items: [],
        },
        {
          title: "Installation",
          href: "/docs/installation",
          items: [],
        },
        {
          title: "Dark mode",
          href: "/docs/dark-mode",
          items: [],
        },
        {
          title: "About",
          href: "/docs/about",
          items: [],
        },
      ],
    },
    {
      title: "Installation",
      items: [
        {
          title: "Next.js",
          href: "/docs/installation/next",
          items: [],
        },
        {
          title: "Vite",
          href: "/docs/installation/vite",
          items: [],
        },
        {
          title: "Create React App",
          href: "/docs/installation/cra",
          items: [],
        },
        {
          title: "Gatsby",
          href: "/docs/installation/gatsby",
          items: [],
        },
      ],
    },
    {
      title: "Dark Mode",
      items: [
        {
          title: "Next.js",
          href: "/docs/dark-mode/next",
          items: [],
        },
        {
          title: "Vite",
          href: "/docs/dark-mode/vite",
          items: [],
        },
        {
          title: "Custom mode toggle",
          href: "/docs/dark-mode/custom-mode-toggle",
          items: [],
        },
      ],
    },
    {
      title: "Components",
      items: [
        {
          title: "Accordion",
          href: "/docs/components/accordion",
          items: [],
        },
        {
          title: "Alert",
          href: "/docs/components/alert",
          items: [],
        },
        {
          title: "Alert Dialog",
          href: "/docs/components/alert-dialog",
          items: [],
        },
        {
          title: "Aspect Ratio",
          href: "/docs/components/aspect-ratio",
          items: [],
        },
        {
          title: "Avatar",
          href: "/docs/components/avatar",
          items: [],
        },
        {
          title: "Badge",
          href: "/docs/components/badge",
          items: [],
        },
        {
          title: "Button",
          href: "/docs/components/button",
          items: [],
        },
        {
          title: "Calendar",
          href: "/docs/components/calendar",
          items: [],
        },
        {
          title: "Card",
          href: "/docs/components/card",
          items: [],
        },
        {
          title: "Checkbox",
          href: "/docs/components/checkbox",
          items: [],
        },
        {
          title: "Collapsible",
          href: "/docs/components/collapsible",
          items: [],
        },
        {
          title: "Combobox",
          href: "/docs/components/combobox",
          items: [],
        },
        {
          title: "Command",
          href: "/docs/components/command",
          items: [],
        },
        {
          title: "Context Menu",
          href: "/docs/components/context-menu",
          items: [],
        },
        {
          title: "Dialog",
          href: "/docs/components/dialog",
          items: [],
        },
        {
          title: "Dropdown Menu",
          href: "/docs/components/dropdown-menu",
          items: [],
        },
        {
          title: "Form",
          href: "/docs/components/form",
          items: [],
        },
        {
          title: "Hover Card",
          href: "/docs/components/hover-card",
          items: [],
        },
        {
          title: "Input",
          href: "/docs/components/input",
          items: [],
        },
        {
          title: "Label",
          href: "/docs/components/label",
          items: [],
        },
        {
          title: "Menubar",
          href: "/docs/components/menubar",
          items: [],
        },
        {
          title: "Navigation Menu",
          href: "/docs/components/navigation-menu",
          items: [],
        },
        {
          title: "Popover",
          href: "/docs/components/popover",
          items: [],
        },
        {
          title: "Progress",
          href: "/docs/components/progress",
          items: [],
        },
        {
          title: "Radio Group",
          href: "/docs/components/radio-group",
          items: [],
        },
        {
          title: "Scroll Area",
          href: "/docs/components/scroll-area",
          items: [],
        },
        {
          title: "Select",
          href: "/docs/components/select",
          items: [],
        },
        {
          title: "Separator",
          href: "/docs/components/separator",
          items: [],
        },
        {
          title: "Sheet",
          href: "/docs/components/sheet",
          items: [],
        },
        {
          title: "Skeleton",
          href: "/docs/components/skeleton",
          items: [],
        },
        {
          title: "Slider",
          href: "/docs/components/slider",
          items: [],
        },
        {
          title: "Switch",
          href: "/docs/components/switch",
          items: [],
        },
        {
          title: "Tabs",
          href: "/docs/components/tabs",
          items: [],
        },
        {
          title: "Textarea",
          href: "/docs/components/textarea",
          items: [],
        },
        {
          title: "Toast",
          href: "/docs/components/toast",
          items: [],
        },
        {
          title: "Tooltip",
          href: "/docs/components/tooltip",
          items: [],
        },
        {
          title: "Portal",
          href: "/docs/components/portal",
          items: [],
        },
      ],
    },
    {
      title: "Hooks",
      items: [
        {
          title: "use-debounced-state",
          href: "/docs/hooks/use-debounced-state",
          items: [],
        },
        {
          title: "use-debounced-value",
          href: "/docs/hooks/use-debounced-value",
          items: [],
        },
        {
          title: "use-disclosure",
          href: "/docs/hooks/use-disclosure",
          items: [],
        },
        {
          title: "use-idle",
          href: "/docs/hooks/use-idle",
          items: [],
        },
        {
          title: "use-input-state",
          href: "/docs/hooks/use-input-state",
          items: [],
        },
        {
          title: "use-interval",
          href: "/docs/hooks/use-interval",
          items: [],
        },
        {
          title: "use-list-state",
          href: "/docs/hooks/use-list-state",
          items: [],
        },
        {
          title: "use-local-storage",
          href: "/docs/hooks/use-local-storage",
          items: [],
        },
        {
          title: "use-toggle",
          href: "/docs/hooks/use-toggle",
          items: [],
        },
        {
          title: "use-click-outside",
          href: "/docs/hooks/use-click-outside",
          items: [],
        },
        {
          title: "use-color-scheme",
          href: "/docs/hooks/use-color-scheme",
          items: [],
        },
        {
          title: "use-element-size",
          href: "/docs/hooks/use-element-size",
          items: [],
        },
        {
          title: "use-focus-trap",
          href: "/docs/hooks/use-focus-trap",
          items: [],
        },
        {
          title: "use-fullscreen",
          href: "/docs/hooks/use-fullscreen",
          items: [],
        },
        {
          title: "use-hotkeys",
          href: "/docs/hooks/use-hotkeys",
          items: [],
        },
        {
          title: "use-hover",
          href: "/docs/hooks/use-hover",
          items: [],
        },
        {
          title: "use-intersection",
          href: "/docs/hooks/use-intersection",
          items: [],
        },
        {
          title: "use-media-query",
          href: "/docs/hooks/use-media-query",
          items: [],
        },
        {
          title: "use-reduced-motion",
          href: "/docs/hooks/use-reduced-motion",
          items: [],
        },
        {
          title: "use-resize-observer",
          href: "/docs/hooks/use-resize-observer",
          items: [],
        },
        {
          title: "use-scroll-into-view",
          href: "/docs/hooks/use-scroll-into-view",
          items: [],
        },
        {
          title: "use-clipboard",
          href: "/docs/hooks/use-clipboard",
          items: [],
        },
        {
          title: "use-document-title",
          href: "/docs/hooks/use-document-title",
          items: [],
        },
        {
          title: "use-document-visibility",
          href: "/docs/hooks/use-document-visibility",
          items: [],
        },
        {
          title: "use-headroom",
          href: "/docs/hooks/use-headroom",
          items: [],
        },
        {
          title: "use-merged-ref",
          href: "/docs/hooks/use-merged-ref",
          items: [],
        },
        {
          title: "use-network",
          href: "/docs/hooks/use-network",
          items: [],
        },
        {
          title: "use-os",
          href: "/docs/hooks/use-os",
          items: [],
        },
        {
          title: "use-window-event",
          href: "/docs/hooks/use-window-event",
          items: [],
        },
        {
          title: "use-window-scroll",
          href: "/docs/hooks/use-window-scroll",
          items: [],
        },
        {
          title: "use-isomorphic-effect",
          href: "/docs/hooks/use-isomorphic-effect",
          items: [],
        },
      ],
    },
  ],
};
