import { Box } from "@mui/material";
import {styled} from "@mui/system";

const FlexBetween= styled(Box)({
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
})

export default FlexBetween;
//we are basically creating a custom-styled component flex between so that it maintains a regular spacing in between the containers and aligns them in the center 