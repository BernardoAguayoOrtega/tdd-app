import React from 'react'
import {fireEvent, render} from '@testing-library/react'

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

  it('must be a initial message please provide a search option and click in the search button', () => {
    const {getByText} = render(<GithubSearch />)
    getByText(/please provide a search option and click in the search button/i)
  })
})

describe('when the developer does a search', () => {
  it('the search button should be disabled until the search is done', () => {
    const {getByRole} = render(<GithubSearch />)
    const searchButton = getByRole('button', {name: /search/i})
    expect(searchButton).not.toBeDisabled()
    fireEvent.click(searchButton)
    expect(searchButton).toBeDisabled()
  })
})
