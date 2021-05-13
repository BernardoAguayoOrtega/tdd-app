import {
  Typography,
  TextField,
  Button,
  Container,
  Grid,
  Box,
} from '@material-ui/core'
import {useState} from 'react'

export const GithubSearch = () => {
  const [isSearching, setIsSearching] = useState(false)
  const [isSearchApplied, setIsSearchApplied] = useState(false)

  const handleClick = async () => {
    setIsSearching(true)
    await Promise.resolve()
    setIsSearching(false)
    setIsSearchApplied(true)
  }

  const renderContent = () =>
    isSearchApplied ? (
      <table>
        <thead>
          <tr>
            <th>Repository</th>
            <th>stars</th>
            <th>forks</th>
            <th>open issues</th>
            <th>update at</th>
          </tr>
        </thead>
      </table>
    ) : (
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height="100"
      >
        <Typography>
          Please provide a search option and click in the search button
        </Typography>
      </Box>
    )

  return (
    <Container>
      <Typography variant="h3" component="h1">
        Github repositories list
      </Typography>
      <Grid container spacing={2}>
        <Grid item md={6} xs={12}>
          <TextField fullWidth label="filter by" id="filter by" />
        </Grid>
        <Grid item md={3} xs={12}>
          <Button
            onClick={handleClick}
            disabled={isSearching}
            fullWidth
            color="primary"
            variant="contained"
          >
            Search
          </Button>
        </Grid>
      </Grid>
      {renderContent()}
    </Container>
  )
}
