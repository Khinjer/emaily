import Button from "@mui/material/Button";
import Google from "@mui/icons-material/Google";
import { Link, useHistory } from "react-router-dom";

function LoginWithGoogleBtn() {
  return <Button variant="contained" component="a" href="/auth/google" color="error" startIcon={<Google />}>Login with Google</Button>;
}

export default LoginWithGoogleBtn;
