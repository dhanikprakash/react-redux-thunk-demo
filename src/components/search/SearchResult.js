import React, { useState, useEffect } from "react";
import Card from "@material-ui/core/Card";
import InfiniteScroll from "react-infinite-scroll-component";
import shortid from "shortid";
import CardContent from "@material-ui/core/CardContent";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItemText";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import Divider from "@material-ui/core/Divider";
import { toast } from "react-toastify";
import { useStyles } from "./searchStyles";
import { useDispatch, useSelector } from "react-redux";
import { loadResults } from "../../redux/actions/searchResultActions";

export default function SearchResult() {
  const defaultState = {
    limit: 10,
    hasMore: false,
    offSet: 0,
    searchKey: "",
    items: [],
  };
  const [offSet, setOffSet] = useState(0);
  const classes = useStyles();
  const searchKey = useSelector((state) => state.searchKey);
  const results = useSelector((state) => state.results);
  const [result, setResult] = useState(defaultState);
  const dispatch = useDispatch();

  useEffect(() => {
    if (searchKey !== null && searchKey !== result.searchKey) {
      //reset when searchKey changes
      setResult(defaultState);
    }
    dispatch(loadResults(result.offSet, result.limit, searchKey));
  }, [searchKey, offSet]);

  useEffect(() => {
    if (results != null && results.resultCount >= 0) {
      setResult({
        ...result,
        hasMore: results.results.length > 0,
        offSet: result.offSet + results.results.length,
        searchKey: searchKey,
        items: result.items.concat(results.results),
      });

      if (
        results.results.length === 0 &&
        result.offSet === 0 &&
        searchKey != null &&
        searchKey !== ""
      ) {
        toast.warn(" No Matching Results", {
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: true,
          closeOnClick: true,
        });
        setResult(defaultState);
      }
    }
    console.log(results);
  }, [results]);

  const loadMore = () => {
    setOffSet(result.offSet);
  };

  return (
    <>
      <Card className={classes.root} raised={true}>
        <CardContent>
          <div id="scrollableDiv" style={{ height: 600, overflow: "auto" }}>
            <InfiniteScroll
              dataLength={result.items.length}
              next={loadMore}
              hasMore={result.hasMore}
              scrollableTarget="scrollableDiv"
            >
              <List>
                {result.items.map((item) => (
                  <div key={shortid.generate()}>
                    <ListItem>
                      <ListItemAvatar>
                        <Avatar src={item.artworkUrl100}></Avatar>
                      </ListItemAvatar>
                      <ListItemText
                        primary={item.artistName}
                        secondary={item.trackName + " - " + item.collectionName}
                      ></ListItemText>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                  </div>
                ))}
              </List>
            </InfiniteScroll>
          </div>
        </CardContent>
      </Card>
    </>
  );
}
