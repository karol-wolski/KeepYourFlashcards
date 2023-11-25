import Card from '../Card/Card'

interface Props {
  question: string
  answer: string
  langFront: string
  langBack: string
}

const CardBothSide = ({ question, answer, langFront, langBack }: Props) => {
  return (
    <div className="grid grid-cols-1 gap-4">
      <Card
        side="QUESTION"
        text={question}
        cardLang={langFront}
        isActiveSpeaker
      />
      <Card side="ANSWER" text={answer} cardLang={langBack} isActiveSpeaker />
    </div>
  )
}

export default CardBothSide
