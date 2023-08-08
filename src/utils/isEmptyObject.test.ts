import isEmptyObject from './isEmptyObject'

describe('isEmptyObject', () => {
  it('should return true', () => {
    const emptyObject = {}
    expect(isEmptyObject(emptyObject)).toBe(true)
  })

  it('should return false', () => {
    const obj = { id: '001' }
    expect(isEmptyObject(obj)).toBe(false)
  })
})
