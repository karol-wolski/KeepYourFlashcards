const isEmptyObject = (obj: Record<string, unknown>): boolean =>
  Object.keys(obj).length === 0

export default isEmptyObject
