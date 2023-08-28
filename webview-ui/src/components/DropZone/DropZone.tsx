import { Fragment, FunctionComponent, useState } from "react";
import { Box, Button, Typography } from "@mui/material";
import { FileUploader } from "react-drag-drop-files";
import { useTranslation } from "react-i18next";

import { BoxDropZone, CustomFileUploader } from "./DropZone.style";
import { DropFilesIcon, MoreFilesIcon } from "../../icons";
import { DropZoneProps } from "../../interfaces/DropZone";

const fileTypes: string[] = ["JS", "JSX", "TS", "TSX"];

export const DropZone: FunctionComponent<DropZoneProps> = (props) => {
  const { onExtractIcons } = props;

  const { t } = useTranslation();
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<String>(t("SelectedFile.None"));
  const [isDrag, setIsDrag] = useState<Boolean>(false);

  const handleChange = (newfiles: File) => {
    const type = newfiles.length === 1 ? "Single" : "Multiple";
    setMessage(t(`SelectedFile.${type}`));
    setFile(newfiles);
  };

  return (
    <BoxDropZone>
      <FileUploader
        classes="file-uploader"
        handleChange={handleChange}
        name="file"
        types={fileTypes}
        multiple
        hoverTitle=" "
        onDraggingStateChange={(newState: boolean) => setIsDrag(newState)}>
        <CustomFileUploader>
          <Typography fontSize={16} component="h1">
            {file && file.length > 0 && file.length} {message}
          </Typography>
          <Box className="icon_description">
            {isDrag ? (
              <DropFilesIcon size={42} />
            ) : (
              <MoreFilesIcon size={42} color="currentColor" />
            )}
            <Typography fontSize={12} component="h2">
              {isDrag ? (
                t("DropHere")
              ) : (
                <Fragment>
                  <span>{t("Upload")}</span> {t("OrDropFile")}
                </Fragment>
              )}
            </Typography>
          </Box>
          <Typography fontSize={10} className="fileTypes">
            {fileTypes.join(",")}
          </Typography>
        </CustomFileUploader>
      </FileUploader>
      <Button
        variant="outlined"
        color="success"
        disabled={!file || file?.length < 1}
        onClick={() => onExtractIcons(file)}>
        {t("ExtractIcons")}
      </Button>
    </BoxDropZone>
  );
};
