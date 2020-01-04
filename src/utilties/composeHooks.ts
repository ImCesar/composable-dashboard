type HookFunction = () => object;

export const composeHooks = (hooks: HookFunction[]): object => {
  return hooks.map(hook => hook())
    .reduce((acc, hookReturnObj) => { return { ...acc, ...hookReturnObj }})
}; 