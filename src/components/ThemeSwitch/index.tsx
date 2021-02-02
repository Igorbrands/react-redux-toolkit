import { SwitchWrapper, Switch, SwitchLabel } from "./styles";

export default function ThemeSwitch() {
  return (
    <SwitchWrapper>
      <Switch id="checkbox" type="checkbox" />
      <SwitchLabel htmlFor="checkbox" />
    </SwitchWrapper>
  );
}
