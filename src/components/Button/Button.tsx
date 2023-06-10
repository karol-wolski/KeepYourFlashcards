interface Props {
  type: 'submit' | 'reset' | 'button'
  children: React.ReactElement | string | JSX.Element
  variant?: 'primary' | 'warn' | 'danger' | 'success'
  ariaLabel?: string
  onClick?: () => void
  disabled?: boolean
}

const Button = ({
  type = 'button',
  children,
  variant = 'primary',
  ariaLabel,
  onClick,
  disabled,
}: Props) => {
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
      className={`py-[0.8rem] px-[1.6rem] text-[1.6rem] rounded-none ${variantClass}`}
      aria-label={ariaLabel}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default Button
