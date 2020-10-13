import React, { useEffect } from "react";
import "../projects.css";
import Carousel from "react-elastic-carousel";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import CardMedia from "@material-ui/core/CardMedia";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import Aos from "aos";
import "aos/dist/aos.css";
import covid from '../images/Covid.jpg'
import reboot from '../images/Reboot.jpg'

const useStyles = makeStyles({
  root: {
    height: 450,
    width: 445,
    margin: "5%",
    WebkitBoxShadow: 8,
  },
});

const breakPoints = [
  { width: 1, itemsToShow: 1 },
  { width: 550, itemsToShow: 2, itemsToScroll: 2 },
  { width: 768, itemsToShow: 3 },
  { width: 1200, itemsToShow: 4 },
];

function Projects() {
  const classes = useStyles();

  useEffect(() => {
    Aos.init({ duration: 1500 });
  }, []);

  return (
    <>
      <h2>Technologies used</h2>
      <div className="technology">
        <img
          className="techIcon"
          src="https://img.icons8.com/dusk/64/000000/javascript.png"
          alt='javascript icon'
        />
<img src="https://img.icons8.com/color/48/000000/html-filetype.png"/>
        <img
          className="techIcon"
          src="https://img.icons8.com/color/48/000000/css-filetype.png"
          alt='css icon'
        />
        <img
          className="techIcon"
          src="https://img.icons8.com/bubbles/50/000000/react.png"
          alt='react icon'
        />
        <img
          className="techIcon"
          src="https://img.icons8.com/color/48/000000/redux.png"
          alt='redux icon'
        />
        <img
          className="techIcon"
          src="https://img.icons8.com/dusk/64/000000/python.png"
          alt='python icon'
        />
        <img
          className="techIcon"
          src="https://img.icons8.com/dusk/64/000000/sql.png"
          alt='sql icon'
        />
        <img
          className="techIcon"
          src="https://img.icons8.com/color/48/000000/nodejs.png"
          alt='node icon'
        />
        <img
          className="techIcon"
          src="https://img.icons8.com/color/48/000000/firebase.png"
          alt='firebase icon'
        />
      </div>
      <Carousel style={{ zIndex: 10 }} breakPoints={breakPoints}>
        <Card
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
          data-aos="flip-left"
          className={classes.root}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Covid Tracker App"
              height="c"
              image={covid}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Covid Tracker App
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                I really liked working on this project and with the amazing api
                provided by disease.sh that updates the app in realtime. I have
                an appreciation for applications that provide data in a clear
                and concise format to maximize user engagement.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button target='_blank' href='https://myworldcovidtracker.netlify.app/' size="small" color="primary">
              View live
            </Button>
            <Button target='_blank' href='https://github.com/BrettMcAdams/covid-tracker' size="small" color="primary">
              View on Github
            </Button>
          </CardActions>
        </Card>
        <Card
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
          data-aos="flip-left"
          className={classes.root}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Hulu clone"
              height="200"
              image="https://cdn.vox-cdn.com/thumbor/HPt3pz12wMNLfXbqMsZc7c13CWA=/1400x788/filters:format(jpeg)/cdn.vox-cdn.com/uploads/chorus_asset/file/19989441/hulu.jpg"
              title="Hulu clone"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Hulu Clone
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Hulu's UI in my opinion is one of the best in the market when it
                comes to streaming services. Everything is top tier, from the
                style of the individual components, to the smooth animations and
                transitions. It was a project i've been wanting to do for a
                while.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View live
            </Button>
            <Button size="small" color="primary">
              view on github
            </Button>
          </CardActions>
        </Card>
        <Card
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
          data-aos="flip-right"
          className={classes.root}
        >
          <CardActionArea style={{}}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image="https://i.pinimg.com/736x/07/94/2f/07942fd499b5ba05edd3bb821f11dc0f.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Tik Tok Clone
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View live
            </Button>
            <Button size="small" color="primary">
              view on github
            </Button>
          </CardActions>
        </Card>
        <Card
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
          data-aos="flip-right"
          className={classes.root}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={reboot}
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Reboot Live Chat
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button target='_blank' href='https://rebootchat.netlify.app/' size="small" color="primary">
              View live
            </Button>
            <Button target='_blank' href='https://github.com/BrettMcAdams/Reboot' size="small" color="primary">
              view on github
            </Button>
          </CardActions>
        </Card>
        <Card
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
          className={classes.root}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Tik Tok Clone
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View live
            </Button>
            <Button size="small" color="primary">
              view on github
            </Button>
          </CardActions>
        </Card>
        <Card
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
          className={classes.root}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Tik Tok Clone
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View live
            </Button>
            <Button size="small" color="primary">
              view on github
            </Button>
          </CardActions>
        </Card>
        <Card
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
          className={classes.root}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Tik Tok Clone
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View live
            </Button>
            <Button size="small" color="primary">
              view on github
            </Button>
          </CardActions>
        </Card>
        <Card
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
          className={classes.root}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Tik Tok Clone
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View live
            </Button>
            <Button size="small" color="primary">
              view on github
            </Button>
          </CardActions>
        </Card>
        <Card
          style={{
            display: "flex",
            justifyContent: "space-between",
            flexDirection: "column",
          }}
          className={classes.root}
        >
          <CardActionArea>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image="/static/images/cards/contemplative-reptile.jpg"
              title="Contemplative Reptile"
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Tik Tok Clone
              </Typography>
              <Typography variant="body2" color="textSecondary" component="p">
                Lizards are a widespread group of squamate reptiles, with over
                6,000 species, ranging across all continents except Antarctica
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button size="small" color="primary">
              View live
            </Button>
            <Button size="small" color="primary">
              view on github
            </Button>
          </CardActions>
        </Card>
      </Carousel>
    </>
  );
}

export default Projects;
