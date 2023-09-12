import { FunctionComponent, useRef } from "react";
import { Divider, IconButton, Portal } from "@mui/material";
import { useTranslation } from "react-i18next";

import { PlaygroundProps } from "../../interfaces/Playground";
import { EmptySelectionIcon, IconFailExport, IconSettings } from "../../icons";
import { BoxDeveloper, BoxPlayground, ContainerSvg, TitlePanel } from "./Playground.style";
import { useSvg } from "../../provider/SvgProvider";
import RenderSVG from "../SvgComponent/RenderSvg";

const Playground: FunctionComponent<PlaygroundProps> = (props) => {
  const { isOpenPanel, handleOpenPanel, refPortalButton } = props;
  const { t } = useTranslation();
  const {
    state: { selectedSvg },
  } = useSvg();

  const refContainerSvg = useRef<HTMLDivElement>(null);

  return (
    <BoxPlayground elevation={isOpenPanel ? 3 : 0}>
      <div className="PapeerBox-title">
        <Portal container={refPortalButton?.current} disablePortal={isOpenPanel}>
          <IconButton
            size="small"
            title={t(`${isOpenPanel ? "Close" : "playground"}`)}
            onClick={handleOpenPanel}
            sx={{ mb: "16px", color: "rgba(var(--color-JT-view-export-svg))" }}>
            <IconSettings state={isOpenPanel} />
          </IconButton>
        </Portal>
        <TitlePanel noWrap fontSize={13} variant="h1">
          {t("playground")}
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
            }}>
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
    </BoxPlayground>
  );
};

export default Playground;
