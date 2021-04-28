import React from 'react'
import {render} from '@testing-library/react'

import {GithubSearch} from './index'

describe('when the GithubSearch component is mounted', () => {
  it('should display the title', () => {
    const {getByRole} = render(<GithubSearch />)
    getByRole('heading', {name: /github repositories list/i})
  })

  it('must be an input text with label "filter by" field', () => {
    const {getByLabelText} = render(<GithubSearch />)

    expect(getByLabelText(/filter by/)).not.toBeNull()
  })

  it('must be a search button', () => {
    const {getByRole} = render(<GithubSearch />)
    expect(getByRole('button', {name: /search/i})).not.toBeNull()
  })
})
