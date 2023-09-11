export interface Form<T> {
  onSubmit: (data: T) => void
  isLoading: boolean
  error: string
}

export interface SetForm<T> extends Form<T> {
  additionalBtnFn: () => void
  additionalBtnName: string
}

export interface SetEditForm<T> extends SetForm<T> {
  defaultData?: T
  onDelete: () => void
}
