import React from 'react'
import {fireEvent, render, waitFor, within} from '@testing-library/react'

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
  it('the search button should be disabled until the search is done', async () => {
    const {getByRole} = render(<GithubSearch />)
    const searchButton = getByRole('button', {name: /search/i})
    expect(searchButton).not.toBeDisabled()
    fireEvent.click(searchButton)
    expect(searchButton).toBeDisabled()
    await waitFor(() => expect(searchButton).not.toBeDisabled())
  })

  it('the data should be displayed as a sticky table', async () => {
    const {getByRole, queryByText} = render(<GithubSearch />)
    const searchButton = getByRole('button', {name: /search/i})
    fireEvent.click(searchButton)
    await waitFor(() =>
      expect(
        queryByText(
          /please provide a search option and click in the search button/i,
        ),
      ).toBeNull(),
    )

    expect(getByRole('table')).not.toBeNull()
  })

  it('the table headers must contain: Repository, stars, forks, open issues and update at', async () => {
    const {getByRole, findByRole} = render(<GithubSearch />)
    const searchButton = getByRole('button', {name: /search/i})
    fireEvent.click(searchButton)

    const table = await findByRole('table')
    const tableHeaders = within(table).getAllByRole('columnheader')
    const [repository, stars, forks, openIssues, updateAt] = tableHeaders

    expect(tableHeaders).toHaveLength(5)

    expect(repository).toHaveTextContent(/Repository/i)
    expect(stars).toHaveTextContent(/stars/i)
    expect(forks).toHaveTextContent(/forks/i)
    expect(openIssues).toHaveTextContent(/open issues/i)
    expect(updateAt).toHaveTextContent(/update at/i)
  })

  it('each table result must contain: owner avatar image, name, stars, updated at, forks, open issues', async () => {
    const {getAllByRole, getByRole, findByRole} = render(<GithubSearch />)
    const searchButton = getByRole('button', {name: /search/i})
    fireEvent.click(searchButton)

    const table = await findByRole('table')
    const tableCells = within(table).getAllByRole('cell')

    expect(tableCells).toHaveLength(5)
  })
})
