import { FunctionComponent, useRef } from "react";
import { Divider, IconButton, Portal } from "@mui/material";
import { useTranslation } from "react-i18next";

import { useSvg } from "../../provider/SvgProvider";

import { PanelDeveloperToolsProps } from "../../interfaces/PanelDeveloperTools";
import { EmptySelectionIcon, IconFailExport, IconSettings } from "../../icons";
import {
  BoxDeveloper,
  BoxPanelDeveloperTools,
  ContainerSvg,
  TitlePanel,
} from "./PanelDeveloperTools.style";
import RenderSVG from "../SvgComponent/RenderSvg";

const PanelDeveloperTools: FunctionComponent<PanelDeveloperToolsProps> = (props) => {
  const { isOpenPanel, handleOpenPanel, refPortalButton } = props;
  const { t } = useTranslation();
  const {
    state: { selectedSvg },
  } = useSvg();

  const refContainerSvg = useRef<HTMLDivElement>(null);

  return (
    <BoxPanelDeveloperTools elevation={isOpenPanel ? 3 : 0}>
      <div className="PaperBox-title">
        <Portal container={refPortalButton?.current} disablePortal={isOpenPanel}>
          <IconButton
            size="small"
            title={t(`${isOpenPanel ? "Close" : "DeveloperTools"}`)}
            onClick={handleOpenPanel}
            sx={{ mb: "16px", color: "rgba(var(--color-JT-view-export-svg))" }}
          >
            <IconSettings state={isOpenPanel} />
          </IconButton>
        </Portal>
        <TitlePanel noWrap fontSize={13} variant="h1">
          {t("DeveloperTools")}
        </TitlePanel>
      </div>
      <Divider sx={{ mt: "-8px" }} />
      {isOpenPanel && (
        <BoxDeveloper>
          <ContainerSvg
            elevation={3}
            ref={refContainerSvg}
            style={{
              height: refContainerSvg?.current?.offsetWidth
                ? refContainerSvg?.current?.offsetWidth
                : "max-content",
            }}
          >
            {!selectedSvg ? (
              <EmptySelectionIcon size="100%" className="empty-selection" />
            ) : selectedSvg.component ? (
              <RenderSVG {...selectedSvg.component} fullSize />
            ) : (
              <IconFailExport />
            )}
          </ContainerSvg>
        </BoxDeveloper>
      )}
    </BoxPanelDeveloperTools>
  );
};

export default PanelDeveloperTools;
