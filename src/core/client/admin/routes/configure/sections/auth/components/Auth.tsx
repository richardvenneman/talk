import React, { StatelessComponent } from "react";

import { PropTypesOf } from "talk-framework/types";
import { HorizontalGutter } from "talk-ui/components";

import DisplayNamesConfigContainer from "../containers/DisplayNamesConfigContainer";
import FacebookConfig from "../containers/FacebookConfigContainer";
import GoogleConfig from "../containers/GoogleConfigContainer";
import LocalAuthConfig from "../containers/LocalAuthConfigContainer";
import SSOConfig from "../containers/SSOConfigContainer";
import AuthIntegrationsConfig from "./AuthIntegrationsConfig";

interface Props {
  disabled?: boolean;
  auth: PropTypesOf<typeof FacebookConfig>["auth"] &
    PropTypesOf<typeof FacebookConfig>["authReadOnly"] &
    PropTypesOf<typeof GoogleConfig>["auth"] &
    PropTypesOf<typeof GoogleConfig>["authReadOnly"] &
    PropTypesOf<typeof SSOConfig>["auth"] &
    PropTypesOf<typeof SSOConfig>["authReadOnly"] &
    PropTypesOf<typeof LocalAuthConfig>["auth"] &
    PropTypesOf<typeof DisplayNamesConfigContainer>["auth"];
  onInitValues: (values: any) => void;
}

const Auth: StatelessComponent<Props> = ({ disabled, auth, onInitValues }) => (
  <HorizontalGutter size="double">
    <DisplayNamesConfigContainer
      disabled={disabled}
      auth={auth}
      onInitValues={onInitValues}
    />
    <AuthIntegrationsConfig
      disabled={disabled}
      auth={auth}
      onInitValues={onInitValues}
    />
  </HorizontalGutter>
);

export default Auth;
