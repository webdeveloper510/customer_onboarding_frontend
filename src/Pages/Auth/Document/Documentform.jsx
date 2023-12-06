import { createContext } from "react";

const DocumentFormContext = createContext({});

export default DocumentFormContext;

export const { Provider, Consumer } = DocumentFormContext;