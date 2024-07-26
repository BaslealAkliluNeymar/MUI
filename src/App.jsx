import { useState } from 'react'
import { 
  Button,
  Typography,
  AppBar,
  Card,
  CardActions,
  CardContent,
  CardMedia,
  Grid,
  Toolbar,
  CssBaseline,
  Container} from '@mui/material'

import { PhotoCamera } from '@mui/icons-material'
import image from './assets/unsplash.jpg'
// import makeStyles from '@mui/styles/makeStyles';

// const useStyles = makeStyles((theme) => ({
//   background: theme.palette.primary.main,
// }));
function App() {
  const [count, setCount] = useState(0)
  // const classes = useStyles()
  // console.log(classes)
  return (
    <>
      <CssBaseline />
      <Container>
        <AppBar postion="relative">
          <Toolbar>
            <PhotoCamera />
            <Typography variant='h6'>Photo Album</Typography>
          </Toolbar>  
        </AppBar>
      </Container>

      <main>
        <div>
          <Container maxWidth="sm" style={{marginTop:100}}>
            <Typography 
              variant='h2' align='center' color='textPrimary' gutterBottom>
              Photo Album
            </Typography>
            <Typography variant='h5' align='center' color='textSecondary' paragraph>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Laborum repellat dolores laudantium similique? Placeat, dolor.
            </Typography>


            <div>
              <Grid container spacing={3} justifyContent='center'>
                <Grid item>
                    <Button variant='contained' color='primary'>See My Photos</Button>
                </Grid>
                <Grid item>
                    <Button variant='outlined' color='secondary'>Secondary Action</Button>
                </Grid>
              </Grid>
            </div>
          </Container>
        </div>

        <Container>
          <Grid container spacing={6} style={{
            paddingTop:'50px'
          }} >
            <Grid item xs={12} md={6} lg={4}>
                <Card style={{
                  height:'100%',
                  display:'flex',
                  flexDirection:'column'
                }}>
                  <CardMedia style={{
                    paddingTop:'56.25%'
                  }}
                    image="src/assets/unsplash.jpg"
                    titie='Random Picture'
                  />
                  <CardContent style={{
                    flexGrow:1
                  }}>
                    <Typography gutterBottom variant='h2'>Header</Typography>
                    <Typography>This is a Card Content Division</Typography>
                  </CardContent>
                  <CardActions>
                    <Button type='outlined' color='primary'>
                      View
                    </Button>
                    <Button type='' color='secondary'>Edit</Button>
                  </CardActions>
                </Card>
            </Grid>


            <Grid item xs={12} md={6} lg={4}>
                <Card style={{
                  height:'100%',
                  display:'flex',
                  flexDirection:'column'
                }}>
                  <CardMedia style={{
                    paddingTop:'56.25%'
                  }}
                    image="src/assets/unsplash.jpg"
                    titie='Random Picture'
                  />
                  <CardContent style={{
                    flexGrow:1
                  }}>
                    <Typography gutterBottom variant='h2'>Header</Typography>
                    <Typography>This is a Card Content Division</Typography>
                  </CardContent>
                  <CardActions>
                    <Button type='outlined' color='primary'>
                      View
                    </Button>
                    <Button type='' color='secondary'>Edit</Button>
                  </CardActions>
                </Card>
            </Grid>


            <Grid item xs={12} md={6} lg={4}>
                <Card style={{
                  height:'100%',
                  display:'flex',
                  flexDirection:'column'
                }}>
                  <CardMedia style={{
                    paddingTop:'56.25%'
                  }}
                    image="src/assets/unsplash.jpg"
                    titie='Random Picture'
                  />
                  <CardContent style={{
                    flexGrow:1
                  }}>
                    <Typography gutterBottom variant='h2'>Header</Typography>
                    <Typography>This is a Card Content Division</Typography>
                  </CardContent>
                  <CardActions>
                    <Button type='outlined' color='primary'>
                      View
                    </Button>
                    <Button type='' color='secondary'>Edit</Button>
                  </CardActions>
                </Card>
            </Grid>


            <Grid item xs={12} md={6} lg={4}>
                <Card style={{
                  height:'100%',
                  display:'flex',
                  flexDirection:'column'
                }}>
                  <CardMedia style={{
                    paddingTop:'56.25%'
                  }}
                    image="src/assets/unsplash.jpg"
                    titie='Random Picture'
                  />
                  <CardContent style={{
                    flexGrow:1
                  }}>
                    <Typography gutterBottom variant='h2'>Header</Typography>
                    <Typography>This is a Card Content Division</Typography>
                  </CardContent>
                  <CardActions>
                    <Button type='outlined' color='primary'>
                      View
                    </Button>
                    <Button type='' color='secondary'>Edit</Button>
                  </CardActions>
                </Card>
            </Grid>


            <Grid item xs={12} md={6} lg={4}>
                <Card style={{
                  height:'100%',
                  display:'flex',
                  flexDirection:'column'
                }}>
                  <CardMedia style={{
                    paddingTop:'56.25%'
                  }}
                    image="src/assets/unsplash.jpg"
                    titie='Random Picture'
                  />
                  <CardContent style={{
                    flexGrow:1
                  }}>
                    <Typography gutterBottom variant='h2'>Header</Typography>
                    <Typography>This is a Card Content Division</Typography>
                  </CardContent>
                  <CardActions>
                    <Button type='outlined' color='primary'>
                      View
                    </Button>
                    <Button type='' color='secondary'>Edit</Button>
                  </CardActions>
                </Card>
            </Grid>
          </Grid>
        </Container>
      </main>
      
    </>
  )
}

export default App
