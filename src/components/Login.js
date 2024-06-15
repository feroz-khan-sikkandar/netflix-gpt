import React, { useState } from "react";
import Header from "./Header";
import {
  Box,
  Button,
  Card,
  CardContent,
  Grid,
  TextField,
  Typography,
} from "@mui/material";

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const handleSignUp = () => {
    console.log(isSignInForm);
    setIsSignInForm(!isSignInForm);
  }

  return (
    <>
      <Header />
      <div className="flex justify-center items-center h-screen">
        <Card
          variant="outlined"
          sx={{
            width: 550,
            height: 600,
            backgroundColor: "rgba(0, 0, 0, 0.6)",
            color: "white",
          }}
        >
          <CardContent sx={{ py: 6, px: 6 }}>
            <Typography variant="h4" component="h2" sx={{ mb: 3 }}>
              {isSignInForm ? "Sign In" : "Sign Up"}
            </Typography>

            <Grid container spacing={3} alignItems="center">
              {!isSignInForm && <Grid item xs={12}> <TextField
                id="name"
                // type="text"
                label="Full name"
                fullWidth
                className="bg-gray-700"
              /> </Grid>}
              {!isSignInForm && <Grid item xs={12}> <TextField
                id="name"
                type="number"
                label="Phone no"
                fullWidth
                className="bg-gray-700"
              /> </Grid>}
              <Grid item xs={12}>
                <TextField
                  id="email"
                  type="email"
                  label="Email or phone number"
                  fullWidth
                  className="bg-gray-700"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  id="password"
                  type="password"
                  label="Password"
                  fullWidth
                  className="bg-gray-700"
                />
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <Button
                  variant="contained"
                  color="error"
                  fullWidth
                  sx={{ height: 56, fontSize: "16px", color: "white" }}
                >
                  {isSignInForm ? "Sign In" : "Sign Up"}
                </Button>
              </Grid>
              <Grid item xs={12} sx={{ mt: 2 }}>
                <div className="inline-flex">
                  <Typography
                    variant="subtitle1"
                    className="text-gray-500 pr-2"
                  >
                    {isSignInForm ? 'New to Netflix?' : 'Already have account?'}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    className="cursor-pointer"
                    onClick={handleSignUp}
                  >
                    {isSignInForm ? 'Sign up now.' : 'Sign in now.'}
                  </Typography>
                </div>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </div>
    </>
  );
};

export default Login;
