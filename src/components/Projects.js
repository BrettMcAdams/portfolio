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
import covid from "../images/Covid.jpg";
import reboot from "../images/Reboot.jpg";
import swift from "../images/swiftsearch.jpg";
import amazon from "../images/amazonclone.jpg";
import cheddar from "../images/cheddar.jpg";

const useStyles = makeStyles({
  root: {
    height: 420,
    width: 450,
    margin: "4%",
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
      <h2 className="tech">Technologies used</h2>
      <div className="technology">
        <img
          className="techIcon"
          src="https://img.icons8.com/dusk/64/000000/javascript.png"
          alt="javascript icon"
        />
        <img src="https://img.icons8.com/color/48/000000/html-filetype.png" />
        <img
          className="techIcon"
          src="https://img.icons8.com/color/48/000000/css-filetype.png"
          alt="css icon"
        />
        <img
          className="techIcon"
          src="https://img.icons8.com/bubbles/50/000000/react.png"
          alt="react icon"
        />
        <img
          className="techIcon"
          src="https://img.icons8.com/color/48/000000/redux.png"
          alt="redux icon"
        />
        <img
          className="techIcon"
          src="https://img.icons8.com/dusk/64/000000/python.png"
          alt="python icon"
        />
        <img
          className="techIcon"
          src="https://img.icons8.com/dusk/64/000000/sql.png"
          alt="sql icon"
        />
        <img
          className="techIcon"
          src="https://img.icons8.com/color/48/000000/nodejs.png"
          alt="node icon"
        />
        <img
          className="techIcon"
          src="https://img.icons8.com/color/48/000000/firebase.png"
          alt="firebase icon"
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
          <CardActionArea style={{ height: "100%" }}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={cheddar}
              title="Contemplative Reptile"
              style={{ objectFit: "fill" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Cheddar Banking
              </Typography>
              <Typography variant="p" color="textSecondary" component="p">
                Tech stack: React, Firebase, Node JS, Redux
              </Typography>
              <Typography
                style={{ paddingTop: "15px" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Cheddar is an online banking platform with it's main focus
                revolving around reducing expenses and increasing revenue.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              target="_blank"
              href="https://cheddarbank.netlify.app/"
              size="small"
              color="primary"
            >
              View live
            </Button>
            <Button
              target="_blank"
              href="https://github.com/BrettMcAdams/cheddar-bank"
              size="small"
              color="primary"
            >
              View on github
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
          <CardActionArea style={{ height: "100%" }}>
            <CardMedia
              component="img"
              alt="Covid Tracker App"
              height="200"
              image={covid}
              title="Contemplative Reptile"
              style={{ objectFit: "fill" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Covid Tracker App
              </Typography>
              <Typography variant="p" color="textSecondary" component="p">
                Tech stack: React, Material-ui, Leaflet, React Charts
              </Typography>
              <Typography
                style={{ paddingTop: "15px" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Covid tracker with interactive real time data display. Data is
                provided by the amazing disease.sh api.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              target="_blank"
              href="https://myworldcovidtracker.netlify.app/"
              size="small"
              color="primary"
            >
              View live
            </Button>
            <Button
              target="_blank"
              href="https://github.com/BrettMcAdams/covid-tracker"
              size="small"
              color="primary"
            >
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
          <CardActionArea style={{ height: "100%" }}>
            <CardMedia
              component="img"
              alt="Swift search"
              height="200"
              image={swift}
              title="Hulu clone"
              style={{ objectFit: "fill" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Swift Search
              </Typography>
              <Typography variant="p" color="textSecondary" component="p">
                Tech stack: React, Firebase, Context API
              </Typography>
              <Typography
                style={{ paddingTop: "15px" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Swift is a powerful search engine powered by Googles search api
                that lets you explore anythiing on the web.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              target="_blank"
              href="https://swiftsearch.netlify.app/"
              size="small"
              color="primary"
            >
              View live
            </Button>
            <Button
              target="_blank"
              href="https://github.com/BrettMcAdams/swift"
              size="small"
              color="primary"
            >
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
          <CardActionArea style={{ height: "100%" }}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={amazon}
              title="Contemplative Reptile"
              style={{ objectFit: "fill" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Amazon Clone
              </Typography>
              <Typography variant="p" color="textSecondary" component="p">
                Tech stack: React, Firebase, Context Api
              </Typography>
              <Typography
                style={{ paddingTop: "15px" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Full amazon clone with user authentication and checkout ability. Don't buy anything though, the TOS is fake...
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              target="_blank"
              href="https://ecommerceclone.netlify.app/"
              size="small"
              color="primary"
            >
              View live
            </Button>
            <Button
              target="_blank"
              href="https://github.com/BrettMcAdams/amazon-clone"
              size="small"
              color="primary"
            >
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
          <CardActionArea style={{ height: "100%" }}>
            <CardMedia
              component="img"
              alt="Contemplative Reptile"
              height="200"
              image={reboot}
              title="Contemplative Reptile"
              style={{ objectFit: "fill" }}
            />
            <CardContent>
              <Typography gutterBottom variant="h5" component="h2">
                Reboot Live Chat
              </Typography>
              <Typography variant="p" color="textSecondary" component="p">
                Tech stack: React, Redux, Firebase, Material-ui
              </Typography>
              <Typography
                style={{ paddingTop: "15px" }}
                variant="body2"
                color="textSecondary"
                component="p"
              >
                Reboot is a chat app where you and you friends can discuss
                different topics based on which channel your in.
              </Typography>
            </CardContent>
          </CardActionArea>
          <CardActions>
            <Button
              target="_blank"
              href="https://rebootchat.netlify.app/"
              size="small"
              color="primary"
            >
              View live
            </Button>
            <Button
              target="_blank"
              href="https://github.com/BrettMcAdams/Reboot"
              size="small"
              color="primary"
            >
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
          <CardActionArea style={{ height: "100%" }}>
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
          <CardActionArea style={{ height: "100%" }}>
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
          <CardActionArea style={{ height: "100%" }}>
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
          <CardActionArea style={{ height: "100%" }}>
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
