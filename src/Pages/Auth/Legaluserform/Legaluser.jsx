import { createContext } from "react";

const LegalFormContext = createContext({});

export default LegalFormContext;

export const { Provider, Consumer } = LegalFormContext;