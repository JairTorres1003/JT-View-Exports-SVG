import { Box, IconButton, Typography } from "@mui/material";
import { FunctionComponent } from "react";
import { FinderProps } from "../../interfaces/Finder";
import { IconClose, IconLupe, IconSettings } from "../../icons";
import { BoxFinder, TextField } from "./Finder.style";
import { useTranslation } from "react-i18next";
import useFinder from "../../hooks/useFinder";

export const Finder: FunctionComponent<FinderProps> = (props) => {
  const { handleClearValue, setValue, value } = useFinder(props);
  const { t } = useTranslation();

  return (
    <Box
      display="flex"
      sx={{ gap: "10px", width: "100%", alignItems: "center", justifyContent: "space-between" }}>
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
      <IconButton
        size="small"
        title={t("Label.Settings")}
        sx={{ mb: "16px", color: "rgba(var(--color-JT-view-export-svg))" }}>
        <IconSettings />
      </IconButton>
    </Box>
  );
};
