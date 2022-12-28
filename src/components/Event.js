import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { createTheme, ThemeProvider } from "@mui/material"
import cardex from "../assets/images/card-example.png"
import Paper from "@mui/material/Paper"
import Card from "@mui/material/Card"
import CardHeader from "@mui/material/CardHeader"
import CardMedia from "@mui/material/CardMedia"
import CardContent from "@mui/material/CardContent"
import CardActions from "@mui/material/CardActions"
import Avatar from "@mui/material/Avatar"
import Button from "@mui/material/Button"
import Typography from "@mui/material/Typography"
import Grid from "@mui/material/Grid"

import EventAvailableIcon from "@mui/icons-material/EventAvailable"

import YouTubeIcon from "@mui/icons-material/YouTube"
import GitHubIcon from "@mui/icons-material/GitHub"
import TwitterIcon from "@mui/icons-material/Twitter"

const theme = createTheme({
  spacing: [0, 4, 8, 16, 32, 64],
  palette: {
    primary: {
      light: "#33cfd6",
      main: "#00c4cc",
      dark: "#00898e",
      contrastText: "#fff",
    },
    secondary: {
      light: "#d54b59",
      main: "#cb1f30",
      dark: "8e1521",
      contrastText: "#fff",
    },
  },
})

const Event = () => {
  const data = useStaticQuery(graphql`
    {
      allMeetupEvent(limit: 10) {
        nodes {
          id
          name
          description
        }
      }
    }
  `)

  console.log(data)

  return (
    <ThemeProvider theme={theme}>
      <Grid
        container
        spacing={1}
        sx={{ paddingTop: "2rem", paddingBottom: "2rem" }}
      >
        <Paper
          sx={{
            width: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-around",
            alignItems: "center",
            boxShadow: "none",
            backgroundColor: "none",
          }}
        >
          <Grid item xs={12}>
            <Typography color="primary" variant="h3" mb={3} mt={3}>
              NEXT EVENT
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Card elevation={3} sx={{ minWidth: 300, maxWidth: 700 }}>
              <CardHeader
                avatar={
                  <Avatar sx={{ bgcolor: "#cb1f30" }} aria-label="presenter">
                    AK
                  </Avatar>
                }
                title="ALEX KONDOV"
                subheader="July 14th, 2022 @ 11:00 AM CST"
              />
              <CardMedia
                component="img"
                height="194"
                image={cardex}
                alt="Event Image or Title"
              />
              <CardContent>
                <Typography variant="h5" color="secondary">
                  React Architecture and Best Practices
                </Typography>
                <Typography my={1} variant="body2" color="text.secondary">
                  There are many resources that can teach you the little pieces.
                  No one tells you how to put them together to build real
                  applications.
                </Typography>
                <Typography my={1} variant="body2" color="text.secondary">
                  Most applications need to be extended, modified and supported.
                  To work productively you need more than just knowledge of
                  React. You need to know how to structure a codebase, what
                  practices to follow when building components and how to make
                  trade offs.
                </Typography>
                <Typography my={1} variant="body2" color="text.secondary">
                  Most applications need to be extended, modified and supported.
                  To work productively you need more than just knowledge of
                  React. You need to know how to structure a codebase, what
                  practices to follow when building components and how to make
                  trade offs.
                </Typography>
                <Typography my={1} variant="body2" color="text.secondary">
                  Through trial and error I've formulated a set of principles
                  that I follow when working with React. I’d love to share them
                  with you.
                </Typography>
                <Typography variant="body2" color="text.secondary">
                  Follow Alex Online:
                </Typography>
                <Grid justifyContent="space-between">
                  <YouTubeIcon />
                  <GitHubIcon />
                  <TwitterIcon />
                </Grid>
              </CardContent>
              <CardActions disableSpacing>
                <Button
                  variant="contained"
                  endIcon={<EventAvailableIcon />}
                  target="_blank"
                  rel="noreferrer"
                  href="https://www.meetup.com/houston-react-js-group/"
                  sx={{
                    "&:hover": { color: "white" },
                  }}
                >
                  SIGN UP
                </Button>
              </CardActions>
            </Card>
          </Grid>
        </Paper>
      </Grid>
    </ThemeProvider>
  )
}

export default Event
