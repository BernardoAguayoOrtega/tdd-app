import {Typography, TextField, Button, Container, Grid} from '@material-ui/core'

export const GithubSearch = () => (
  <Container>
    <Typography variant="h3" component="h1">
      Github repositories list
    </Typography>
    <Grid container spacing={2}>
      <Grid item md={6} xs={12}>
        <TextField fullWidth label="filter by" id="filter by" />
      </Grid>
      <Grid item md={3} xs={12}>
        <Button fullWidth color="primary" variant="contained">Search</Button>
      </Grid>
    </Grid>
  </Container>
)
