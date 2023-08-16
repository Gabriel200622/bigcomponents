import React, { useState } from "react";

type SetValue<T> = React.Dispatch<React.SetStateAction<T>>;

export function getInputOnChange<T>(setValue: SetValue<T>) {
  return (
    val:
      | React.ChangeEvent<HTMLInputElement>
      | T
      | ((current: T) => T)
      | null
      | undefined,
  ) => {
    if (!val) {
      setValue(val as T);
    } else if (typeof val === "function") {
      setValue(val);
    } else if (typeof val === "object" && "nativeEvent" in val) {
      const { currentTarget } = val;

      if (currentTarget.type === "checkbox") {
        setValue((currentTarget as any).checked as any);
      } else {
        setValue(currentTarget.value as any);
      }
    } else {
      setValue(val);
    }
  };
}

export function useInputState<T>(initialState: T) {
  const [value, setValue] = useState(initialState);

  return [value, getInputOnChange<T>(setValue)] as [
    T,
    (value: React.ChangeEvent<HTMLInputElement> | T) => void,
  ];
}
