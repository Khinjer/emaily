import CircularProgress from "@mui/material/CircularProgress";
import Box from "@mui/material/Box";
import { useEffect, useState } from "react";

export default function Loader({ visible }) {
  const [props, setProps] = useState({});

  useEffect(() => {
   
    if (!visible) {
      setProps({display:"none"});
    } else {
      setProps({display:"flex"});
    }

    console.log(props)
  },[visible]);

  return (
    <Box
      justifyContent="center"
      alignItems="center"
      height="80vh"
      sx={{ display: "flex", ...props }}
    >
      <CircularProgress />
    </Box>
  );
}
