import Card from '../Card/Card'

interface Props {
  question: string
  answer: string
}

const CardBothSide = ({ question, answer }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Card side="QUESTION" text={question} />
      <Card side="ANSWER" text={answer} />
    </div>
  )
}

export default CardBothSide
