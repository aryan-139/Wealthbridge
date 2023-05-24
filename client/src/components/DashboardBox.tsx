import { Box } from "@mui/material";
import {styled} from "@mui/system";

const DashboardBox = styled(Box)(({ theme }) => ({
   backgroundColor: theme.palette.background.light,
   borderRadius: "1rem",
   boxShadow: "0.15rem 0.2rem 0.15rem 0.1rem rgba(0, 0, 0, .8)",

}));

export default DashboardBox;
//we are basically creating a custom-styled component flex between so that it maintains a regular spacing in between the containers and aligns them in the center 