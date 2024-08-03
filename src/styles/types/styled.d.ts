import "styled-components";
import { borderRadius } from "../constants/border-radius";
import { fontSizes } from "../constants/font-sizes";
import { fontWeights } from "../constants/font-weights";
import { spacings } from "../constants/spacings";
import { Colors } from "./colors";

type Theme = {
  colors: Colors;
  borderRadius: typeof borderRadius;
  fontSizes: typeof fontSizes;
  fontWeights: typeof fontWeights;
  spacings: typeof spacings;
};

declare module "styled-components" {
  export interface DefaultTheme extends Theme {}
}
