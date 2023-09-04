import { FunctionComponent } from "react";

import { PanelsSettingsProps } from "../../interfaces/PanelsSettings";

const PanelsSettings: FunctionComponent<PanelsSettingsProps> = (props) => {
  const { isOpenPanel, handleOpenPanel } = props;

  if (!isOpenPanel) {
    return null;
  }

  return <div>PanelsSettings</div>;
};

export default PanelsSettings;
