import React from 'react'
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { Card, CardActionArea, CardActions, CardContent, CardMedia, Button, Typography } from "@material-ui/core"

const styles = {
    card: {
        maxWidth: 345,
        marginTop: 20,
        marginLeft: 20,
        marginBottom: 20
    },
    media: {
        height: 200,
    },
}

const articleCard = props => {
    const { classes } = props
    return (
        <div>
            {props.articles.map(article => {
                return (
                    <div>
                    <Card key={article.title} className={classes.card}>
                        <CardActionArea>
                            <CardMedia
                                className={classes.media}
                                image={article.image}
                                title={article.title}
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
                            <Button onClick={props.saveArticle} size="small" color="primary">
                                Favorite
                            </Button>
                        </CardActions>
                    </Card>
                    </div>
                )
            })}
        </div>
    )
}

articleCard.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(articleCard);