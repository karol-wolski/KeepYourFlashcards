interface Props {
  type: 'submit' | 'reset' | 'button'
  text: string
  variant?: 'primary' | 'warn' | 'danger' | 'success'
}

const Button = ({ type = 'button', text, variant = 'primary' }: Props) => {
  let variantClass
  if (variant === 'primary')
    variantClass = 'bg-primary hover:bg-primaryHover text-textPrimary'
  if (variant === 'warn')
    variantClass = 'bg-secondary hover:bg-secondaryHover text-textSecondary'
  if (variant === 'danger')
    variantClass = 'bg-danger hover:bg-dangerHover text-textPrimary'
  if (variant === 'success')
    variantClass = 'bg-success hover:bg-successHover text-textPrimary'

  return (
    <button
      type={type}
      className={`py-[0.8rem] px-[1.6rem] mt-4 text-[1.6rem] rounded-none ${variantClass}`}
    >
      {text}
    </button>
  )
}

export default Button
