import React, { useState} from "react";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";
import { useDispatch } from 'react-redux'
import {searchQueryActions} from "../../redux/actions/searchQueryActions";
import {useStyles} from "./searchStyles";



export default function SearchQuery() {
    const [raised, setRaised] = useState(false);
    const classes = useStyles();
    const [searhText, setSearchText] = useState('');
    const dispatch = useDispatch();
    const  toggleRaised = () => setRaised(!raised);

    
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("Dispatch Search Query: " + searhText.value);
    dispatch(searchQueryActions(searhText.value.replace(/ /g,"+")))
  };

  return (
    <>
      <Card
        className={classes.root}
        onMouseOver={toggleRaised}
        onMouseOut={toggleRaised}
        raised={raised}
      >
        <CardContent>
          <Typography variant="h5" component="h2">
            Next Front-End Search - Apple API
          </Typography>
          <Typography
            className={classes.title}
            color="textSecondary"
            gutterBottom
          >
            React/Redux/Thunk/Node/Styled component/FP/Jest/Material UI
          </Typography>

          <form onSubmit={handleSubmit} noValidate autoComplete="off">
            <TextField
              id="standard-basic"
              inputRef={(input) => (setSearchText(input))}
              label="Artist/Album/Song"
            />
            <Button variant="contained" color="primary" type="submit">
              Search
            </Button>
          </form>
        </CardContent>
      </Card>
    </>
  );
}
