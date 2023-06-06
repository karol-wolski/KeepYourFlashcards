import { describe, expect, it } from 'vitest'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import SingleSet from './SingleSet'

const mockData = {
  id: '0001',
  collectionName: 'English phrases',
  numofItems: 12,
  link: '/',
}

describe('Single Set', () => {
  it('render component properly', () => {
    const el = render(
      <BrowserRouter>
        <SingleSet
          collectionName={mockData.collectionName}
          numOfItems={mockData.numofItems}
          link={mockData.link}
        />
      </BrowserRouter>
    )
    expect(el.getByText(/english phrases/i)).toBeInTheDocument()
    const numOfItems = el.getByText(/cards:/i, { exact: false })
    expect(numOfItems.textContent).toEqual('Cards: 12')
  })
})
