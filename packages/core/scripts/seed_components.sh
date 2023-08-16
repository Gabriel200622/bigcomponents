components_names=("accordion" "alert" "alert-dialog" "aspect-ratio" "avatar" "badge" "button" "calendar" "card" "checkbox" "context-menu" "dialog" "dropdown-menu" "hover-card" "input" "label" "menubar" "navigation-menu" "popover" "progress" "radio-group" "scroll-area" "select" "separator" "sheet" "skeleton" "slider" "switch" "tabs" "textarea" "toast" "tooltip" "collapsible")

original_dir=$(pwd)

cd ../

for element in "${components_names[@]}"; do
    echo "Element: $element"
    pnpm dlx shadcn-ui@latest add "$element"
done

cd "$original_dir"
