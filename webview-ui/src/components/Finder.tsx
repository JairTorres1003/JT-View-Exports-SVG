import { Box, IconButton, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { FinderProps } from "../interfaces/Finder";
import { IconLupe } from "../icons/IconLupe";
import { IconClose } from "../icons/IconClose";
import { BoxFinder, TextField } from "./Finder.style";
import useFinder from "../hooks/useFinder";

export const Finder: FunctionComponent<FinderProps> = (props) => {
  const { handleClearValue, setValue, value } = useFinder(props);

  return (
    <BoxFinder>
      <TextField
        fullWidth
        size="small"
        type="search"
        value={value}
        id="finder-svg"
        variant="outlined"
        label={
          <Box className="MuiFormLabel-finder">
            <IconLupe />
            <Typography>Search icons</Typography>
          </Box>
        }
        onChange={(val) => setValue(val.target.value.trimStart())}
        InputProps={{
          endAdornment: (
            <IconButton size="small" onClick={handleClearValue}>
              <IconClose />
            </IconButton>
          ),
        }}
      />
    </BoxFinder>
  );
};
