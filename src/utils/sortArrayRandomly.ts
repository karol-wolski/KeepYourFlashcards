const sortArrayRandomly = <T>(array: T[]) =>
  array.sort(() => Math.random() - 0.5)

export default sortArrayRandomly
