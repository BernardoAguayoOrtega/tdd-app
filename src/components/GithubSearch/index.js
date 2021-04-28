import {Typography, TextField, Button} from '@material-ui/core'

export const GithubSearch = () => (
  <>
    <Typography variant="h3" component="h1">
      Github repositories list
    </Typography>
    <TextField label="filter by" id="filter by" />
    <Button>Search</Button>
  </>
)
