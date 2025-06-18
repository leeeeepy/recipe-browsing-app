import { create, type StoreApi, type UseBoundStore } from "zustand";

type Atom<T> = {
  value: T;
  setValue: (newValue: T | ((current: T) => T)) => void;
};

// Zustand atom creator with inferred type
export function atom<T>(initialValue: T): UseBoundStore<StoreApi<Atom<T>>> {
  return create<Atom<T>>((set) => ({
    value: initialValue,
    setValue: (newValue) => {
      set((state) => ({
        value:
          typeof newValue === "function"
            ? (newValue as (current: T) => T)(state.value)
            : newValue,
      }));
    },
  }));
}

// Zustand useAtom wrapper
export function useAtom<T>(
  atomStore: UseBoundStore<StoreApi<Atom<T>>>
): [T, (newValue: T | ((current: T) => T)) => void] {
  const { value, setValue } = atomStore();
  return [value, setValue];
}
