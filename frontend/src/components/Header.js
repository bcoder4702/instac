import React, { useState } from "react";
import { AppBar, Button, Tab, Tabs, Toolbar, Typography } from "@mui/material";
import { Box } from "@mui/system";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { authActions } from "../store";
import PersonIcon from '@mui/icons-material/Person';

const Header = () => {
  const dispatch = useDispatch();
  const isLoggedIn = useSelector((state) => state.isLoggedIn);
  const [value, setValue] = useState();
  return (
    <div>
      <AppBar position="sticky" sx={{ background: "black" }}>
        <Toolbar>
        <Typography variant="h4" ><img style={{Width:'198px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjgOH-_XHjgCYAthu0wZgr2ugKpb4xNE94zQIjsktW&s" alt="React Image" /></Typography>
          {/* <Typography variant="h4">InstaClone</Typography> */}
          {isLoggedIn && (
            <Box display="flex" marginLeft={"auto"} marginRight={"auto"}>
              <Tabs
                textColor="inherit"
                value={value}
                onChange={(e, val) => setValue(val)}
              >
                <Tab
                  LinkComponent={Link}
                  to="/blogs"
                  sx={{ margin: 1, background: "black", borderRadius: 10 }}
                  label="All"
                />
                <Tab
                  LinkComponent={Link}
                  to="/myblogs"
                  sx={{ margin: 1, background: "black", borderRadius: 10 }}
                  label="My Stuff"
                />
                <Tab
                  LinkComponent={Link}
                  to="/blogs/add"
                  sx={{ margin: 1, background: "black", borderRadius: 10 }}
                  label="Add New"
                />
              </Tabs>
            </Box>
          )}
          <Box display="flex" marginLeft="auto">
            {!isLoggedIn && (
              <>
                {" "}
                <Button
                  LinkComponent={Link}
                  to="/auth"
                  variant="contained"
                  sx={{
                    margin: 1,
                    background: "black",
                    border: 1,
                    borderRadius: 10,
                  }}
                >
                  Login
                </Button>
                <Button
                  LinkComponent={Link}
                  to="/auth"
                  variant="contained"
                  sx={{
                    margin: 1,
                    background: "black",
                    border: 1,
                    borderRadius: 10,
                  }}
                >
                  Signup
                </Button>{" "}
              </>
            )}
            {isLoggedIn && (
              <>
              <Button
                onClick={() => dispatch(authActions.logout())}
                LinkComponent={Link}
                to="/auth"
                variant="contained"
                sx={{
                  margin: 1,
                  background: "black",
                  border: 1,
                  borderRadius: 10,
                }}
              >
                Logout
              </Button>
              <Button
              LinkComponent={Link}
                  to="/userinfo"
                  variant="contained"
                  sx={{
                    margin: 1,
                    background: "black",
                    border: 1,
                    borderRadius: 10,
                  }}
                >
                  <PersonIcon/>
              </Button>
              </>
            )}
          </Box>
        </Toolbar>
      </AppBar>
      {/* {!val && (
      <img src="https://www.ucl.ac.uk/news/sites/news/files/styles/large_image/public/brainimage.jpg?itok=xWpxEJ5I" width="100%" height="auto"
      ></img>)}
    </div> */}
    </div>
  );
};

export default Header;
