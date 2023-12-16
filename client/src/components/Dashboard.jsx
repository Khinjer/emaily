import { Link } from "react-router-dom";
import Box from "@mui/material/Box";
import Fab from "@mui/material/Fab";
import AddIcon from "@mui/icons-material/Add";

import SurveysList from "./surveys/SurveysList";

function Dashboard() {
  return (
    <Box>
      <Box>
        <SurveysList />
      </Box>
      <Box sx={{ position: "absolute", bottom: 80, right: 20}}>
        <Fab
          component={Link}
          to="/surveys/new"
          color="primary"
          aria-label="add"
        >
          <AddIcon />
        </Fab>
      </Box>
    </Box>
  );
}

export default Dashboard;
