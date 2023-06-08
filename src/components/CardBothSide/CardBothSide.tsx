import Card from '../Card/Card'

const CardBothSide = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
      <Card side="FRONT" text="Hi" />
      <Card side="BACK" text="Cześć" />
    </div>
  )
}

export default CardBothSide
