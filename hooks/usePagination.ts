import { useContext } from "react";
import PaginationContext from "../context/PaginationContext";
import { InfoRequestContext } from "../interfaces/functions_interfaces";

export default () : InfoRequestContext => useContext(PaginationContext)