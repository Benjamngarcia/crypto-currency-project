import { createContext } from "react";
import { InfoRequestContext } from "../interfaces/functions_interfaces";

const infoRequest: InfoRequestContext = {
  infoRequestAllMarket: {
    vsCurrency: "usd",
    page: 1
  },
  incrementPage: () => {},
  decrementPage: () => {},
  changePage: () => {},
};

const PaginationContext = createContext<InfoRequestContext>(infoRequest);

export default PaginationContext;
