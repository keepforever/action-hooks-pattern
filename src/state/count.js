import store from '../store';

export const useCount = () => {
  const [{ count }] = store.useStore();
  return count;
}

export const useIncrement = () => {
  // don't need to read state, destructure "_" to skip.
  const [_, setState ] = store.useStore();
  return () =>
    setState(old => ({
      ...old,
      count: old.count + 1
    }));
};

export const useDecrement = () => {
  // use the store
  const { useStore } = store;
  // don't need to read state, destructure "_" to skip.
  const [_, setState ] = useStore();
  return () =>
    setState(old => ({
      ...old,
      count: old.count - 1
    }));
};
