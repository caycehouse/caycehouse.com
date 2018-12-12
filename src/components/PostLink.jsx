import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Button from '@material-ui/core/Button';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardContent from '@material-ui/core/CardContent';
import CardHeader from '@material-ui/core/CardHeader';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';

const styles = theme => ({
  post: {
    backgroundColor: theme.palette.background.paper,
  },
});

const PostLink = props => {
  const { classes, post } = props;
  return (
    <Card className={classes.post}>
      <CardActionArea component={Link} to={post.fields.slug}>
        <CardHeader title={post.fields.title} subheader={post.fields.date} />
        <CardContent>
          <Typography component="p">{post.excerpt}</Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button color="primary" component={Link} to={post.fields.slug}>
          Read More
        </Button>
      </CardActions>
    </Card>
  );
};

PostLink.propTypes = {
  classes: PropTypes.shape({
    post: PropTypes.string.isRequired,
  }).isRequired,
  post: PropTypes.shape({
    excerpt: PropTypes.string.isRequired,
    fields: PropTypes.object.isRequired,
  }).isRequired,
};

export default withStyles(styles)(PostLink);
