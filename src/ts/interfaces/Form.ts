export interface Form<T> {
  onSubmit: (data: T) => void
  isLoading: boolean
  error: string
}
