import { Box, IconButton, Typography } from "@mui/material";
import { useTranslation } from "react-i18next";
import { FunctionComponent } from "react";

import useFinder from "../../hooks/useFinder";

import { FinderProps } from "../../interfaces/Finder";
import { IconClose, IconLupe } from "../../icons";
import { BoxFinder, TextField } from "./Finder.style";

export const Finder: FunctionComponent<FinderProps> = (props) => {
  const { isOpenPanel, refPortalButton } = props;
  const { handleClearValue, setValue, value } = useFinder(props);
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      sx={{
        gap: isOpenPanel ? 0 : "10px",
        width: "100%",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
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
              <Typography>{t("Label.SearchIcons")}</Typography>
            </Box>
          }
          onChange={(val) => setValue(val.target.value.trimStart())}
          InputProps={{
            endAdornment: (
              <IconButton size="small" onClick={handleClearValue} title={t("Label.Clear")}>
                <IconClose />
              </IconButton>
            ),
          }}
        />
      </BoxFinder>
      <div ref={refPortalButton} />
    </Box>
  );
};
