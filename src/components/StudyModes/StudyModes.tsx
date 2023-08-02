import TileWithIconLink from '../TileWithIconLink/TileWithIconLink'

interface Props {
  href: string
  css?: string
}

const StudyModes = ({ href, css }: Props) => {
  return (
    <div
      className={`grid gap-[1.6rem] grid-cols-2 sm:grid-cols-3 max-w-[61rem] mx-auto ${
        css && css
      }`}
    >
      <TileWithIconLink
        href={`${href}/study`}
        title="Study"
        iconClass="fa-solid fa-book-open"
        variant="primary"
      />
      <TileWithIconLink
        href={`${href}/repeat`}
        title="Repeat"
        iconClass="fa-solid fa-chalkboard"
        variant="primary"
      />
      <TileWithIconLink
        href={`${href}/test`}
        title="Test"
        iconClass="fa-solid fa-file"
        variant="primary"
      />
      <TileWithIconLink
        href={`${href}/match`}
        title="Matching"
        iconClass="fa-solid fa-clone"
        variant="primary"
      />
      <TileWithIconLink
        href={`${href}/manage`}
        title="Manage"
        iconClass="fa-solid fa-gear"
        variant="secondary"
        css="col-span-2"
      />
    </div>
  )
}

export default StudyModes
