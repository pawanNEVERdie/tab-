import React from "react";
export interface Tabitem{
    label:string,
    children:React.ReactNode,
}
export interface Tabprops
{
    activeTabIndex: number;
    children: React.ReactElement<Tabitem> | React.ReactElement<Tabitem>[];
}