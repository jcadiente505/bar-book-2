import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Grid, Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core"

const styles = {
    card: {
        maxWidth: 345,
        marginTop: 75,
        marginLeft: 15,
        marginRight: 15,
        marginBottom: -50
    },
    media: {
        height: 150,
    },
}

const articleCard = props => {
    const { classes } = props
    return (
        <Grid container spacing={8}>
            {props.articles.map((article, i) => {
                console.log(article);
                return (
                        <Grid item xs={12} sm={12} lg={3}>
                            <div key={i}>
                                <Card className={classes.card}>
                                    <CardActionArea>
                                        <CardMedia
                                            style={{ width: 350 }}
                                            className={classes.media}
                                            image={article.image}
                                            title={article.title}
                                            href={article.link}
                                        />
                                        <CardContent>
                                            <Typography gutterBottom variant="headline">
                                                {article.title}
                                            </Typography>
                                            <Typography component="p">
                                                {article.summary}
                                            </Typography>
                                        </CardContent>
                                    </CardActionArea>
                                    <CardActions>
                                        <Button href={article.link} size="small" color="primary">
                                            Read Article
                                        </Button>
                                        <Button onClick={(e) => props.saveArticles(article, e)} size="small" color="primary">
                                            Favorite
                                        </Button>
                                    </CardActions>
                                </Card>
                            </div>
                        </Grid>
                )
            })}
        </Grid>
    )
}

articleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(articleCard);