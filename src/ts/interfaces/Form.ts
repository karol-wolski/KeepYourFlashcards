export interface Form<T> {
  onSubmit: (data: T) => void
  isLoading: boolean
  error?: string
  isSuccess?: boolean
  additionalBtnFn?: () => void
  additionalBtnName?: string
  onDelete?: () => void
  defaultData?: T
}
