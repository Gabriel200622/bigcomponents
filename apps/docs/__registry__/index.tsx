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
    /*
    "alert-dialog": {
      name: "alert-dialog",
      type: "components:ui",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/default/ui/alert-dialog")),
      files: ["registry/default/ui/alert-dialog.tsx"],
    },
    "aspect-ratio": {
      name: "aspect-ratio",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/aspect-ratio")),
      files: ["registry/default/ui/aspect-ratio.tsx"],
    },
    avatar: {
      name: "avatar",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/avatar")),
      files: ["registry/default/ui/avatar.tsx"],
    },
    badge: {
      name: "badge",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/badge")),
      files: ["registry/default/ui/badge.tsx"],
    },
    button: {
      name: "button",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/button")),
      files: ["registry/default/ui/button.tsx"],
    },
    calendar: {
      name: "calendar",
      type: "components:ui",
      registryDependencies: ["button"],
      component: React.lazy(() => import("@/registry/default/ui/calendar")),
      files: ["registry/default/ui/calendar.tsx"],
    },
    card: {
      name: "card",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/card")),
      files: ["registry/default/ui/card.tsx"],
    },
    checkbox: {
      name: "checkbox",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/checkbox")),
      files: ["registry/default/ui/checkbox.tsx"],
    },
    collapsible: {
      name: "collapsible",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/collapsible")),
      files: ["registry/default/ui/collapsible.tsx"],
    },
    command: {
      name: "command",
      type: "components:ui",
      registryDependencies: ["dialog"],
      component: React.lazy(() => import("@/registry/default/ui/command")),
      files: ["registry/default/ui/command.tsx"],
    },
    "context-menu": {
      name: "context-menu",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/context-menu")),
      files: ["registry/default/ui/context-menu.tsx"],
    },
    dialog: {
      name: "dialog",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/dialog")),
      files: ["registry/default/ui/dialog.tsx"],
    },
    "dropdown-menu": {
      name: "dropdown-menu",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(
        () => import("@/registry/default/ui/dropdown-menu")
      ),
      files: ["registry/default/ui/dropdown-menu.tsx"],
    },
    form: {
      name: "form",
      type: "components:ui",
      registryDependencies: ["button", "label"],
      component: React.lazy(() => import("@/registry/default/ui/form")),
      files: ["registry/default/ui/form.tsx"],
    },
    "hover-card": {
      name: "hover-card",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/hover-card")),
      files: ["registry/default/ui/hover-card.tsx"],
    },
    input: {
      name: "input",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/input")),
      files: ["registry/default/ui/input.tsx"],
    },
    label: {
      name: "label",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/label")),
      files: ["registry/default/ui/label.tsx"],
    },
    menubar: {
      name: "menubar",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/menubar")),
      files: ["registry/default/ui/menubar.tsx"],
    },
    "navigation-menu": {
      name: "navigation-menu",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(
        () => import("@/registry/default/ui/navigation-menu")
      ),
      files: ["registry/default/ui/navigation-menu.tsx"],
    },
    popover: {
      name: "popover",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/popover")),
      files: ["registry/default/ui/popover.tsx"],
    },
    progress: {
      name: "progress",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/progress")),
      files: ["registry/default/ui/progress.tsx"],
    },
    "radio-group": {
      name: "radio-group",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/radio-group")),
      files: ["registry/default/ui/radio-group.tsx"],
    },
    "scroll-area": {
      name: "scroll-area",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/scroll-area")),
      files: ["registry/default/ui/scroll-area.tsx"],
    },
    select: {
      name: "select",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/select")),
      files: ["registry/default/ui/select.tsx"],
    },
    separator: {
      name: "separator",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/separator")),
      files: ["registry/default/ui/separator.tsx"],
    },
    sheet: {
      name: "sheet",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/sheet")),
      files: ["registry/default/ui/sheet.tsx"],
    },
    skeleton: {
      name: "skeleton",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/skeleton")),
      files: ["registry/default/ui/skeleton.tsx"],
    },
    slider: {
      name: "slider",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/slider")),
      files: ["registry/default/ui/slider.tsx"],
    },
    switch: {
      name: "switch",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/switch")),
      files: ["registry/default/ui/switch.tsx"],
    },
    table: {
      name: "table",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/table")),
      files: ["registry/default/ui/table.tsx"],
    },
    tabs: {
      name: "tabs",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/tabs")),
      files: ["registry/default/ui/tabs.tsx"],
    },
    textarea: {
      name: "textarea",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/textarea")),
      files: ["registry/default/ui/textarea.tsx"],
    },
    toast: {
      name: "toast",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/toast")),
      files: [
        "registry/default/ui/toast.tsx",
        "registry/default/ui/use-toast.ts",
        "registry/default/ui/toaster.tsx",
      ],
    },
    toggle: {
      name: "toggle",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/toggle")),
      files: ["registry/default/ui/toggle.tsx"],
    },
    tooltip: {
      name: "tooltip",
      type: "components:ui",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/ui/tooltip")),
      files: ["registry/default/ui/tooltip.tsx"],
    },
    "calendar-form": {
      name: "calendar-form",
      type: "components:example",
      registryDependencies: ["calendar", "form", "popover"],
      component: React.lazy(
        () => import("@/registry/default/example/calendar-form")
      ),
      files: ["registry/default/example/calendar-form.tsx"],
    },
    "data-table-demo": {
      name: "data-table-demo",
      type: "components:example",
      registryDependencies: ["data-table"],
      component: React.lazy(
        () => import("@/registry/default/example/data-table-demo")
      ),
      files: ["registry/default/example/data-table-demo.tsx"],
    },
    "date-picker-demo": {
      name: "date-picker-demo",
      type: "components:example",
      registryDependencies: ["button", "calendar", "popover"],
      component: React.lazy(
        () => import("@/registry/default/example/date-picker-demo")
      ),
      files: ["registry/default/example/date-picker-demo.tsx"],
    },
    "date-picker-form": {
      name: "date-picker-form",
      type: "components:example",
      registryDependencies: ["button", "calendar", "form", "popover"],
      component: React.lazy(
        () => import("@/registry/default/example/date-picker-form")
      ),
      files: ["registry/default/example/date-picker-form.tsx"],
    },
    "date-picker-with-presets": {
      name: "date-picker-with-presets",
      type: "components:example",
      registryDependencies: ["button", "calendar", "popover", "select"],
      component: React.lazy(
        () => import("@/registry/default/example/date-picker-with-presets")
      ),
      files: ["registry/default/example/date-picker-with-presets.tsx"],
    },
    "date-picker-with-range": {
      name: "date-picker-with-range",
      type: "components:example",
      registryDependencies: ["button", "calendar", "popover"],
      component: React.lazy(
        () => import("@/registry/default/example/date-picker-with-range")
      ),
      files: ["registry/default/example/date-picker-with-range.tsx"],
    },
    "input-with-text": {
      name: "input-with-text",
      type: "components:example",
      registryDependencies: ["input", "button", "label"],
      component: React.lazy(
        () => import("@/registry/default/example/input-with-text")
      ),
      files: ["registry/default/example/input-with-text.tsx"],
    },
    "table-demo": {
      name: "table-demo",
      type: "components:example",
      registryDependencies: ["table"],
      component: React.lazy(
        () => import("@/registry/default/example/table-demo")
      ),
      files: ["registry/default/example/table-demo.tsx"],
    },
    "toggle-demo": {
      name: "toggle-demo",
      type: "components:example",
      registryDependencies: ["toggle"],
      component: React.lazy(
        () => import("@/registry/default/example/toggle-demo")
      ),
      files: ["registry/default/example/toggle-demo.tsx"],
    },
    "toggle-disabled": {
      name: "toggle-disabled",
      type: "components:example",
      registryDependencies: ["toggle"],
      component: React.lazy(
        () => import("@/registry/default/example/toggle-disabled")
      ),
      files: ["registry/default/example/toggle-disabled.tsx"],
    },
    "toggle-lg": {
      name: "toggle-lg",
      type: "components:example",
      registryDependencies: ["toggle"],
      component: React.lazy(
        () => import("@/registry/default/example/toggle-lg")
      ),
      files: ["registry/default/example/toggle-lg.tsx"],
    },
    "toggle-outline": {
      name: "toggle-outline",
      type: "components:example",
      registryDependencies: ["toggle"],
      component: React.lazy(
        () => import("@/registry/default/example/toggle-outline")
      ),
      files: ["registry/default/example/toggle-outline.tsx"],
    },
    "toggle-sm": {
      name: "toggle-sm",
      type: "components:example",
      registryDependencies: ["toggle"],
      component: React.lazy(
        () => import("@/registry/default/example/toggle-sm")
      ),
      files: ["registry/default/example/toggle-sm.tsx"],
    },
    "toggle-with-text": {
      name: "toggle-with-text",
      type: "components:example",
      registryDependencies: ["toggle"],
      component: React.lazy(
        () => import("@/registry/default/example/toggle-with-text")
      ),
      files: ["registry/default/example/toggle-with-text.tsx"],
    },
    "typography-blockquote": {
      name: "typography-blockquote",
      type: "components:example",
      registryDependencies: undefined,
      component: React.lazy(
        () => import("@/registry/default/example/typography-blockquote")
      ),
      files: ["registry/default/example/typography-blockquote.tsx"],
    },
    "typography-demo": {
      name: "typography-demo",
      type: "components:example",
      registryDependencies: undefined,
      component: React.lazy(
        () => import("@/registry/default/example/typography-demo")
      ),
      files: ["registry/default/example/typography-demo.tsx"],
    },
    "typography-h1": {
      name: "typography-h1",
      type: "components:example",
      registryDependencies: undefined,
      component: React.lazy(
        () => import("@/registry/default/example/typography-h1")
      ),
      files: ["registry/default/example/typography-h1.tsx"],
    },
    "typography-h2": {
      name: "typography-h2",
      type: "components:example",
      registryDependencies: undefined,
      component: React.lazy(
        () => import("@/registry/default/example/typography-h2")
      ),
      files: ["registry/default/example/typography-h2.tsx"],
    },
    "typography-h3": {
      name: "typography-h3",
      type: "components:example",
      registryDependencies: undefined,
      component: React.lazy(
        () => import("@/registry/default/example/typography-h3")
      ),
      files: ["registry/default/example/typography-h3.tsx"],
    },
    "typography-h4": {
      name: "typography-h4",
      type: "components:example",
      registryDependencies: undefined,
      component: React.lazy(
        () => import("@/registry/default/example/typography-h4")
      ),
      files: ["registry/default/example/typography-h4.tsx"],
    },
    "typography-inline-code": {
      name: "typography-inline-code",
      type: "components:example",
      registryDependencies: undefined,
      component: React.lazy(
        () => import("@/registry/default/example/typography-inline-code")
      ),
      files: ["registry/default/example/typography-inline-code.tsx"],
    },
    "typography-large": {
      name: "typography-large",
      type: "components:example",
      registryDependencies: undefined,
      component: React.lazy(
        () => import("@/registry/default/example/typography-large")
      ),
      files: ["registry/default/example/typography-large.tsx"],
    },
    "typography-lead": {
      name: "typography-lead",
      type: "components:example",
      registryDependencies: undefined,
      component: React.lazy(
        () => import("@/registry/default/example/typography-lead")
      ),
      files: ["registry/default/example/typography-lead.tsx"],
    },
    "typography-list": {
      name: "typography-list",
      type: "components:example",
      registryDependencies: undefined,
      component: React.lazy(
        () => import("@/registry/default/example/typography-list")
      ),
      files: ["registry/default/example/typography-list.tsx"],
    },
    "typography-muted": {
      name: "typography-muted",
      type: "components:example",
      registryDependencies: undefined,
      component: React.lazy(
        () => import("@/registry/default/example/typography-muted")
      ),
      files: ["registry/default/example/typography-muted.tsx"],
    },
    "typography-p": {
      name: "typography-p",
      type: "components:example",
      registryDependencies: undefined,
      component: React.lazy(
        () => import("@/registry/default/example/typography-p")
      ),
      files: ["registry/default/example/typography-p.tsx"],
    },
    "typography-small": {
      name: "typography-small",
      type: "components:example",
      registryDependencies: undefined,
      component: React.lazy(
        () => import("@/registry/default/example/typography-small")
      ),
      files: ["registry/default/example/typography-small.tsx"],
    },
    "typography-table": {
      name: "typography-table",
      type: "components:example",
      registryDependencies: undefined,
      component: React.lazy(
        () => import("@/registry/default/example/typography-table")
      ),
      files: ["registry/default/example/typography-table.tsx"],
    },
    "mode-toggle": {
      name: "mode-toggle",
      type: "components:example",
      registryDependencies: undefined,
      component: React.lazy(
        () => import("@/registry/default/example/mode-toggle")
      ),
      files: ["registry/default/example/mode-toggle.tsx"],
    },
    cards: {
      name: "cards",
      type: "components:example",
      registryDependencies: undefined,
      component: React.lazy(() => import("@/registry/default/example/cards")),
      files: ["registry/default/example/cards/cards.tsx"],
    }, */
  },
};
