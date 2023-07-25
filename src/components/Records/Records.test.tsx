import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import Records from './Records'

describe('Records component', () => {
  it('render properly for values 0', () => {
    const component = render(
      <Records numOfDaysInRow={0} NumOfMinutesWeek={0} numOfRepetitions={0} />
    )
    expect(component.getByText('0 days')).toBeInTheDocument()
    expect(component.getByText('in a row')).toBeInTheDocument()
    expect(component.getByText('0 minutes')).toBeInTheDocument()
    expect(component.getByText('of learning week')).toBeInTheDocument()
    expect(component.getByText('0 repetitions')).toBeInTheDocument()
    expect(component.getByText('in a week')).toBeInTheDocument()
  })

  it('render properly for values 1', () => {
    const component = render(
      <Records numOfDaysInRow={1} NumOfMinutesWeek={1} numOfRepetitions={1} />
    )
    expect(component.getByText('1 day')).toBeInTheDocument()
    expect(component.getByText('in a row')).toBeInTheDocument()
    expect(component.getByText('1 minute')).toBeInTheDocument()
    expect(component.getByText('of learning week')).toBeInTheDocument()
    expect(component.getByText('1 repetition')).toBeInTheDocument()
    expect(component.getByText('in a week')).toBeInTheDocument()
  })

  it('render properly for random values', () => {
    const component = render(
      <Records
        numOfDaysInRow={15}
        NumOfMinutesWeek={254}
        numOfRepetitions={1}
      />
    )
    expect(component.getByText('15 days')).toBeInTheDocument()
    expect(component.getByText('in a row')).toBeInTheDocument()
    expect(component.getByText('254 minutes')).toBeInTheDocument()
    expect(component.getByText('of learning week')).toBeInTheDocument()
    expect(component.getByText('1 repetition')).toBeInTheDocument()
    expect(component.getByText('in a week')).toBeInTheDocument()
  })
})
