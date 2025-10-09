import { type Ref, computed } from "vue";

const defaultIdInjection = {
  prefix: Math.floor(Math.random() * 10000),
  current: 0,
};

export function useId(namespace: string = "er"): Ref<string> {
  const idRef = computed(
    () =>
      `${namespace}-id-${
        defaultIdInjection.prefix
      }-${defaultIdInjection.current++}`
  );

  return idRef;
}

export default useId;

// const id1 = useId(); // 假设结果: 'er-id-3498-0'
// const id2 = useId("btn"); // 结果: 'btn-id-3498-1'

// console.log(id1.value); // "er-id-3498-0"
// console.log(id2.value); // "btn-id-3498-1"