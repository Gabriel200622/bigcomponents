// @ts-nocheck
import * as React from "react";

export const Index: Record<string, any> = {
  default: {
    "accordion-demo": {
      name: "accordion-demo",
      type: "components:example",
      registryDependencies: ["accordion"],
      component: React.lazy(() => import("@/registry/example/accordion-demo")),
      files: ["registry/example/accordion-demo.tsx"],
    },
    "alert-demo": {
      name: "alert-demo",
      type: "components:example",
      registryDependencies: ["alert"],
      component: React.lazy(() => import("@/registry/example/alert-demo")),
      files: ["registry/example/alert-demo.tsx"],
    },
    "alert-destructive": {
      name: "alert-destructive",
      type: "components:example",
      registryDependencies: ["alert"],
      component: React.lazy(
        () => import("@/registry/example/alert-destructive")
      ),
      files: ["registry/example/alert-destructive.tsx"],
    },
    "alert-dialog-demo": {
      name: "alert-dialog-demo",
      type: "components:example",
      registryDependencies: ["alert-dialog", "button"],
      component: React.lazy(
        () => import("@/registry/example/alert-dialog-demo")
      ),
      files: ["registry/example/alert-dialog-demo.tsx"],
    },
    "aspect-ratio-demo": {
      name: "aspect-ratio-demo",
      type: "components:example",
      registryDependencies: ["aspect-ratio"],
      component: React.lazy(
        () => import("@/registry/example/aspect-ratio-demo")
      ),
      files: ["registry/example/aspect-ratio-demo.tsx"],
    },
    "avatar-demo": {
      name: "avatar-demo",
      type: "components:example",
      registryDependencies: ["avatar"],
      component: React.lazy(() => import("@/registry/example/avatar-demo")),
      files: ["registry/example/avatar-demo.tsx"],
    },
    "badge-demo": {
      name: "badge-demo",
      type: "components:example",
      registryDependencies: ["badge"],
      component: React.lazy(() => import("@/registry/example/badge-demo")),
      files: ["registry/example/badge-demo.tsx"],
    },
    "badge-secondary": {
      name: "badge-secondary",
      type: "components:example",
      registryDependencies: ["badge"],
      component: React.lazy(() => import("@/registry/example/badge-secondary")),
      files: ["registry/example/badge-secondary.tsx"],
    },
    "badge-outline": {
      name: "badge-outline",
      type: "components:example",
      registryDependencies: ["badge"],
      component: React.lazy(() => import("@/registry/example/badge-outline")),
      files: ["registry/example/badge-outline.tsx"],
    },
    "badge-destructive": {
      name: "badge-destructive",
      type: "components:example",
      registryDependencies: ["badge"],
      component: React.lazy(
        () => import("@/registry/example/badge-destructive")
      ),
      files: ["registry/example/badge-destructive.tsx"],
    },
    "button-demo": {
      name: "button-demo",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/example/button-demo")),
      files: ["registry/example/button-demo.tsx"],
    },
    "button-secondary": {
      name: "button-secondary",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/example/button-secondary")
      ),
      files: ["registry/example/button-secondary.tsx"],
    },
    "button-destructive": {
      name: "button-destructive",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/example/button-destructive")
      ),
      files: ["registry/example/button-destructive.tsx"],
    },
    "button-outline": {
      name: "button-outline",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/example/button-outline")),
      files: ["registry/example/button-outline.tsx"],
    },
    "button-ghost": {
      name: "button-ghost",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/example/button-ghost")),
      files: ["registry/example/button-ghost.tsx"],
    },
    "button-link": {
      name: "button-link",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/example/button-link")),
      files: ["registry/example/button-link.tsx"],
    },
    "button-with-icon": {
      name: "button-with-icon",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(
        () => import("@/registry/example/button-with-icon")
      ),
      files: ["registry/example/button-with-icon.tsx"],
    },
    "button-loading": {
      name: "button-loading",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry//example/button-loading")),
      files: ["registry/example/button-loading.tsx"],
    },
    "button-icon": {
      name: "button-icon",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/example/button-icon")),
      files: ["registry/example/button-icon.tsx"],
    },
    "button-as-child": {
      name: "button-as-child",
      type: "components:example",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/example/button-as-child")),
      files: ["registry/example/button-as-child.tsx"],
    },
    "calendar-demo": {
      name: "calendar-demo",
      type: "components:example",
      registryDependencies: ["calendar"],
      component: React.lazy(() => import("@/registry/example/calendar-demo")),
      files: ["registry/example/calendar-demo.tsx"],
    },
    "card-with-form": {
      name: "card-with-form",
      type: "components:example",
      registryDependencies: ["button", "card", "input", "label", "select"],
      component: React.lazy(() => import("@/registry/example/card-with-form")),
      files: ["registry/example/card-with-form.tsx"],
    },
    "card-demo": {
      name: "card-demo",
      type: "components:example",
      registryDependencies: ["card", "button", "switch"],
      component: React.lazy(() => import("@/registry/example/card-demo")),
      files: ["registry/example/card-demo.tsx"],
    },
    "checkbox-demo": {
      name: "checkbox-demo",
      type: "components:example",
      registryDependencies: ["checkbox"],
      component: React.lazy(() => import("@/registry/example/checkbox-demo")),
      files: ["registry/example/checkbox-demo.tsx"],
    },
    "checkbox-with-text": {
      name: "checkbox-with-text",
      type: "components:example",
      registryDependencies: ["checkbox"],
      component: React.lazy(
        () => import("@/registry/example/checkbox-with-text")
      ),
      files: ["registry/example/checkbox-with-text.tsx"],
    },
    "checkbox-disabled": {
      name: "checkbox-disabled",
      type: "components:example",
      registryDependencies: ["checkbox"],
      component: React.lazy(
        () => import("@/registry/example/checkbox-disabled")
      ),
      files: ["registry/example/checkbox-disabled.tsx"],
    },
    "checkbox-form-multiple": {
      name: "checkbox-form-multiple",
      type: "components:example",
      registryDependencies: ["checkbox", "form"],
      component: React.lazy(
        () => import("@/registry/example/checkbox-form-multiple")
      ),
      files: ["registry/example/checkbox-form-multiple.tsx"],
    },
    "checkbox-form-single": {
      name: "checkbox-form-single",
      type: "components:example",
      registryDependencies: ["checkbox", "form"],
      component: React.lazy(
        () => import("@/registry/example/checkbox-form-single")
      ),
      files: ["registry/example/checkbox-form-single.tsx"],
    },
    "collapsible-demo": {
      name: "collapsible-demo",
      type: "components:example",
      registryDependencies: ["collapsible"],
      component: React.lazy(
        () => import("@/registry/example/collapsible-demo")
      ),
      files: ["registry/example/collapsible-demo.tsx"],
    },
    "combobox-demo": {
      name: "combobox-demo",
      type: "components:example",
      registryDependencies: ["command"],
      component: React.lazy(() => import("@/registry/example/combobox-demo")),
      files: ["registry/example/combobox-demo.tsx"],
    },
    "combobox-popover": {
      name: "combobox-popover",
      type: "components:example",
      registryDependencies: ["combobox", "popover"],
      component: React.lazy(
        () => import("@/registry/example/combobox-popover")
      ),
      files: ["registry/example/combobox-popover.tsx"],
    },
    "combobox-dropdown-menu": {
      name: "combobox-dropdown-menu",
      type: "components:example",
      registryDependencies: ["command", "dropdown-menu", "button"],
      component: React.lazy(
        () => import("@/registry/example/combobox-dropdown-menu")
      ),
      files: ["registry/example/combobox-dropdown-menu.tsx"],
    },
    "combobox-form": {
      name: "combobox-form",
      type: "components:example",
      registryDependencies: ["command", "form"],
      component: React.lazy(() => import("@/registry/example/combobox-form")),
      files: ["registry/example/combobox-form.tsx"],
    },
    "command-demo": {
      name: "command-demo",
      type: "components:example",
      registryDependencies: ["command"],
      component: React.lazy(() => import("@/registry/example/command-demo")),
      files: ["registry/example/command-demo.tsx"],
    },
    "command-dialog": {
      name: "command-dialog",
      type: "components:example",
      registryDependencies: ["command", "dialog"],
      component: React.lazy(() => import("@/registry/example/command-dialog")),
      files: ["registry/example/command-dialog.tsx"],
    },
    "context-menu-demo": {
      name: "context-menu-demo",
      type: "components:example",
      registryDependencies: ["context-menu"],
      component: React.lazy(
        () => import("@/registry/example/context-menu-demo")
      ),
      files: ["registry/example/context-menu-demo.tsx"],
    },
    "dialog-demo": {
      name: "dialog-demo",
      type: "components:example",
      registryDependencies: ["dialog"],
      component: React.lazy(() => import("@/registry/example/dialog-demo")),
      files: ["registry/example/dialog-demo.tsx"],
    },
    "dropdown-menu-demo": {
      name: "dropdown-menu-demo",
      type: "components:example",
      registryDependencies: ["dropdown-menu"],
      component: React.lazy(
        () => import("@/registry/example/dropdown-menu-demo")
      ),
      files: ["registry/example/dropdown-menu-demo.tsx"],
    },
    "dropdown-menu-checkboxes": {
      name: "dropdown-menu-checkboxes",
      type: "components:example",
      registryDependencies: ["dropdown-menu", "checkbox"],
      component: React.lazy(
        () => import("@/registry/example/dropdown-menu-checkboxes")
      ),
      files: ["registry/example/dropdown-menu-checkboxes.tsx"],
    },
    "dropdown-menu-radio-group": {
      name: "dropdown-menu-radio-group",
      type: "components:example",
      registryDependencies: ["dropdown-menu", "radio-group"],
      component: React.lazy(
        () => import("@/registry/example/dropdown-menu-radio-group")
      ),
      files: ["registry/example/dropdown-menu-radio-group.tsx"],
    },
    "input-form": {
      name: "input-form",
      type: "components:example",
      registryDependencies: ["input", "button", "form"],
      component: React.lazy(() => import("@/registry/example/input-form")),
      files: ["registry/example/input-form.tsx"],
    },
    "hover-card-demo": {
      name: "hover-card-demo",
      type: "components:example",
      registryDependencies: ["hover-card"],
      component: React.lazy(() => import("@/registry/example/hover-card-demo")),
      files: ["registry/example/hover-card-demo.tsx"],
    },
    "input-demo": {
      name: "input-demo",
      type: "components:example",
      registryDependencies: ["input"],
      component: React.lazy(() => import("@/registry/example/input-demo")),
      files: ["registry/example/input-demo.tsx"],
    },
    "input-file": {
      name: "input-file",
      type: "components:example",
      registryDependencies: ["input"],
      component: React.lazy(() => import("@/registry/example/input-file")),
      files: ["registry/example/input-file.tsx"],
    },
    "input-disabled": {
      name: "input-disabled",
      type: "components:example",
      registryDependencies: ["input"],
      component: React.lazy(() => import("@/registry/example/input-disabled")),
      files: ["registry/example/input-disabled.tsx"],
    },
    "input-with-label": {
      name: "input-with-label",
      type: "components:example",
      registryDependencies: ["input", "button", "label"],
      component: React.lazy(
        () => import("@/registry/example/input-with-label")
      ),
      files: ["registry/example/input-with-label.tsx"],
    },
    "input-with-button": {
      name: "input-with-button",
      type: "components:example",
      registryDependencies: ["input", "button"],
      component: React.lazy(
        () => import("@/registry/example/input-with-button")
      ),
      files: ["registry/example/input-with-button.tsx"],
    },
    "label-demo": {
      name: "label-demo",
      type: "components:example",
      registryDependencies: ["label"],
      component: React.lazy(() => import("@/registry/example/label-demo")),
      files: ["registry/example/label-demo.tsx"],
    },
    "menubar-demo": {
      name: "menubar-demo",
      type: "components:example",
      registryDependencies: ["menubar"],
      component: React.lazy(() => import("@/registry/example/menubar-demo")),
      files: ["registry/example/menubar-demo.tsx"],
    },
    "navigation-menu-demo": {
      name: "navigation-menu-demo",
      type: "components:example",
      registryDependencies: ["navigation-menu"],
      component: React.lazy(
        () => import("@/registry/example/navigation-menu-demo")
      ),
      files: ["registry/example/navigation-menu-demo.tsx"],
    },
    "popover-demo": {
      name: "popover-demo",
      type: "components:example",
      registryDependencies: ["popover"],
      component: React.lazy(() => import("@/registry/example/popover-demo")),
      files: ["registry/example/popover-demo.tsx"],
    },
    "progress-demo": {
      name: "progress-demo",
      type: "components:example",
      registryDependencies: ["progress"],
      component: React.lazy(() => import("@/registry/example/progress-demo")),
      files: ["registry/example/progress-demo.tsx"],
    },
    "radio-group-demo": {
      name: "radio-group-demo",
      type: "components:example",
      registryDependencies: ["radio-group"],
      component: React.lazy(
        () => import("@/registry/example/radio-group-demo")
      ),
      files: ["registry/example/radio-group-demo.tsx"],
    },
    "radio-group-form": {
      name: "radio-group-form",
      type: "components:example",
      registryDependencies: ["radio-group", "form"],
      component: React.lazy(
        () => import("@/registry/example/radio-group-form")
      ),
      files: ["registry/example/radio-group-form.tsx"],
    },
    "scroll-area-demo": {
      name: "scroll-area-demo",
      type: "components:example",
      registryDependencies: ["scroll-area"],
      component: React.lazy(
        () => import("@/registry/example/scroll-area-demo")
      ),
      files: ["registry/example/scroll-area-demo.tsx"],
    },
    "select-demo": {
      name: "select-demo",
      type: "components:example",
      registryDependencies: ["select"],
      component: React.lazy(() => import("@/registry/example/select-demo")),
      files: ["registry/example/select-demo.tsx"],
    },
    "select-form": {
      name: "select-form",
      type: "components:example",
      registryDependencies: ["select"],
      component: React.lazy(() => import("@/registry/example/select-form")),
      files: ["registry/example/select-form.tsx"],
    },
    "separator-demo": {
      name: "separator-demo",
      type: "components:example",
      registryDependencies: ["separator"],
      component: React.lazy(() => import("@/registry/example/separator-demo")),
      files: ["registry/example/separator-demo.tsx"],
    },
    "sheet-demo": {
      name: "sheet-demo",
      type: "components:example",
      registryDependencies: ["sheet"],
      component: React.lazy(() => import("@/registry/example/sheet-demo")),
      files: ["registry/example/sheet-demo.tsx"],
    },
    "sheet-side": {
      name: "sheet-side",
      type: "components:example",
      registryDependencies: ["sheet"],
      component: React.lazy(() => import("@/registry/example/sheet-side")),
      files: ["registry/example/sheet-side.tsx"],
    },
    "skeleton-demo": {
      name: "skeleton-demo",
      type: "components:example",
      registryDependencies: ["skeleton"],
      component: React.lazy(() => import("@/registry/example/skeleton-demo")),
      files: ["registry/example/skeleton-demo.tsx"],
    },
    "slider-demo": {
      name: "slider-demo",
      type: "components:example",
      registryDependencies: ["slider"],
      component: React.lazy(() => import("@/registry/example/slider-demo")),
      files: ["registry/example/slider-demo.tsx"],
    },
    "switch-demo": {
      name: "switch-demo",
      type: "components:example",
      registryDependencies: ["switch"],
      component: React.lazy(() => import("@/registry/example/switch-demo")),
      files: ["registry/example/switch-demo.tsx"],
    },
    "switch-form": {
      name: "switch-form",
      type: "components:example",
      registryDependencies: ["switch", "form"],
      component: React.lazy(() => import("@/registry/example/switch-form")),
      files: ["registry/example/switch-form.tsx"],
    },
    "tabs-demo": {
      name: "tabs-demo",
      type: "components:example",
      registryDependencies: ["tabs"],
      component: React.lazy(() => import("@/registry/example/tabs-demo")),
      files: ["registry/example/tabs-demo.tsx"],
    },
    "textarea-demo": {
      name: "textarea-demo",
      type: "components:example",
      registryDependencies: ["textarea"],
      component: React.lazy(() => import("@/registry/example/textarea-demo")),
      files: ["registry/example/textarea-demo.tsx"],
    },
    "textarea-disabled": {
      name: "textarea-disabled",
      type: "components:example",
      registryDependencies: ["textarea"],
      component: React.lazy(
        () => import("@/registry/example/textarea-disabled")
      ),
      files: ["registry/example/textarea-disabled.tsx"],
    },
    "textarea-form": {
      name: "textarea-form",
      type: "components:example",
      registryDependencies: ["textarea", "form"],
      component: React.lazy(() => import("@/registry/example/textarea-form")),
      files: ["registry/example/textarea-form.tsx"],
    },
    "textarea-with-button": {
      name: "textarea-with-button",
      type: "components:example",
      registryDependencies: ["textarea", "button"],
      component: React.lazy(
        () => import("@/registry/example/textarea-with-button")
      ),
      files: ["registry/example/textarea-with-button.tsx"],
    },
    "textarea-with-label": {
      name: "textarea-with-label",
      type: "components:example",
      registryDependencies: ["textarea", "label"],
      component: React.lazy(
        () => import("@/registry/example/textarea-with-label")
      ),
      files: ["registry/example/textarea-with-label.tsx"],
    },
    "textarea-with-text": {
      name: "textarea-with-text",
      type: "components:example",
      registryDependencies: ["textarea", "label"],
      component: React.lazy(
        () => import("@/registry/example/textarea-with-text")
      ),
      files: ["registry/example/textarea-with-text.tsx"],
    },
    "toast-demo": {
      name: "toast-demo",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(() => import("@/registry/example/toast-demo")),
      files: ["registry/example/toast-demo.tsx"],
    },

    "toast-destructive": {
      name: "toast-destructive",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(
        () => import("@/registry/example/toast-destructive")
      ),
      files: ["registry/example/toast-destructive.tsx"],
    },
    "toast-simple": {
      name: "toast-simple",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(() => import("@/registry/example/toast-simple")),
      files: ["registry/example/toast-simple.tsx"],
    },
    "toast-with-action": {
      name: "toast-with-action",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(
        () => import("@/registry/example/toast-with-action")
      ),
      files: ["registry/example/toast-with-action.tsx"],
    },
    "toast-with-title": {
      name: "toast-with-title",
      type: "components:example",
      registryDependencies: ["toast"],
      component: React.lazy(
        () => import("@/registry/example/toast-with-title")
      ),
      files: ["registry/example/toast-with-title.tsx"],
    },
    "tooltip-demo": {
      name: "tooltip-demo",
      type: "components:example",
      registryDependencies: ["tooltip"],
      component: React.lazy(() => import("@/registry/example/tooltip-demo")),
      files: ["registry/example/tooltip-demo.tsx"],
    },
    "use-debounced-state-demo": {
      name: "use-debounced-state",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-debounced-state-demo")
      ),
      files: ["registry/example/use-debounced-state-demo.tsx"],
    },
    "use-debounced-state-leading": {
      name: "use-debounced-state-leading",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-debounced-state-leading")
      ),
      files: ["registry/example/use-debounced-state-leading.tsx"],
    },
    "use-debounced-value-demo": {
      name: "use-debounced-value",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-debounced-value-demo")
      ),
      files: ["registry/example/use-debounced-value-demo.tsx"],
    },
    "use-debounced-value-leading": {
      name: "use-debounced-value-leading",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-debounced-value-leading")
      ),
      files: ["registry/example/use-debounced-value-leading.tsx"],
    },
    "use-debounced-value-cancel": {
      name: "use-debounced-value-cancel",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-debounced-value-cancel")
      ),
      files: ["registry/example/use-debounced-value-cancel.tsx"],
    },
    "use-idle-demo": {
      name: "use-idle",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(() => import("@/registry/example/use-idle-demo")),
      files: ["registry/example/use-idle-demo.tsx"],
    },
    "use-interval-demo": {
      name: "use-interval",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-interval-demo")
      ),
      files: ["registry/example/use-interval-demo.tsx"],
    },
    "use-list-state-demo": {
      name: "use-list-state",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-list-state-demo")
      ),
      files: ["registry/example/use-list-state-demo.tsx"],
    },
    "use-toggle-demo": {
      name: "use-toggle",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(() => import("@/registry/example/use-toggle-demo")),
      files: ["registry/example/use-toggle-demo.tsx"],
    },
    "use-click-outside-demo": {
      name: "use-click-outside",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-click-outside-demo")
      ),
      files: ["registry/example/use-click-outside-demo.tsx"],
    },
    "use-color-scheme-demo": {
      name: "use-color-scheme",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-color-scheme-demo")
      ),
      files: ["registry/example/use-color-scheme-demo.tsx"],
    },
    "use-element-size-demo": {
      name: "use-element-size",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-element-size-demo")
      ),
      files: ["registry/example/use-element-size-demo.tsx"],
    },
    "use-fullscreen-demo": {
      name: "use-fullscreen",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-fullscreen-demo")
      ),
      files: ["registry/example/use-fullscreen-demo.tsx"],
    },
    "use-fullscreen-custom-root": {
      name: "use-fullscreen-custom-root",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-fullscreen-custom-root")
      ),
      files: ["registry/example/use-fullscreen-custom-root.tsx"],
    },
    "use-hotkeys-demo": {
      name: "use-hotkeys",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-hotkeys-demo")
      ),
      files: ["registry/example/use-hotkeys-demo.tsx"],
    },
    "use-hover-demo": {
      name: "use-hover",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(() => import("@/registry/example/use-hover-demo")),
      files: ["registry/example/use-hover-demo.tsx"],
    },
    "use-intersection-demo": {
      name: "use-intersection",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-intersection-demo")
      ),
      files: ["registry/example/use-intersection-demo.tsx"],
    },
    "use-media-query-demo": {
      name: "use-media-query",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-media-query-demo")
      ),
      files: ["registry/example/use-media-query-demo.tsx"],
    },
    "use-reduced-motion-demo": {
      name: "use-reduced-motion",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-reduced-motion-demo")
      ),
      files: ["registry/example/use-reduced-motion-demo.tsx"],
    },
    "use-resize-observer-demo": {
      name: "use-resize-observer",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-resize-observer-demo")
      ),
      files: ["registry/example/use-resize-observer-demo.tsx"],
    },
    "use-scroll-into-view-demo": {
      name: "use-scroll-into-view",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-scroll-into-view-demo")
      ),
      files: ["registry/example/use-scroll-into-view-demo.tsx"],
    },
    "use-click-outside-event": {
      name: "use-click-outside-event",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-click-outside-event")
      ),
      files: ["registry/example/use-click-outside-event.tsx"],
    },
    "use-clipboard-demo": {
      name: "use-clipboard-demo",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-clipboard-demo")
      ),
      files: ["registry/example/use-clipboard-demo.tsx"],
    },
    "use-document-title-demo": {
      name: "use-document-title-demo",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-document-title-demo")
      ),
      files: ["registry/example/use-document-title-demo.tsx"],
    },
    "use-document-visibility-demo": {
      name: "use-document-visibility-demo",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-document-visibility-demo")
      ),
      files: ["registry/example/use-document-visibility-demo.tsx"],
    },
    "use-headroom-demo": {
      name: "use-headroom-demo",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-headroom-demo")
      ),
      files: ["registry/example/use-headroom-demo.tsx"],
    },
    "use-network-demo": {
      name: "use-network-demo",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-network-demo")
      ),
      files: ["registry/example/use-network-demo.tsx"],
    },
    "use-os-demo": {
      name: "use-os-demo",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(() => import("@/registry/example/use-os-demo")),
      files: ["registry/example/use-os-demo.tsx"],
    },
    "use-window-scroll-demo": {
      name: "use-window-scroll-demo",
      type: "hooks:example",
      registryDependencies: [],
      component: React.lazy(
        () => import("@/registry/example/use-window-scroll-demo")
      ),
      files: ["registry/example/use-window-scroll-demo.tsx"],
    },
  },
};
