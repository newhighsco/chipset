import { absoluteUrl } from '.'

describe('utils/absoluteUrl', () => {
  it('should detect absolute URLs', () => {
    expect(absoluteUrl('https://test.com')).toEqual(true)
    expect(absoluteUrl('test.com')).toEqual(false)
    expect(absoluteUrl('/test')).toEqual(false)
    expect(absoluteUrl('/test/')).toEqual(false)
  })
})
