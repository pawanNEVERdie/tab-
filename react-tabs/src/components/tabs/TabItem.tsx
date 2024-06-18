import { Tabitem } from "../../types/TabTypes";
import { sanitizeForId } from "../../utils/stringUtils";
import React from "react";
const TabItem:React.FC<Tabitem> = ({label,children})=>{
return(
    <>
    <div className="tab-panel"   role="tabpanel"  aria-labelledby={`tab-${sanitizeForId(label)}`} 
    id={`panel-${sanitizeForId(label)}`}
    >{children}</div></>
)
}
export default TabItem