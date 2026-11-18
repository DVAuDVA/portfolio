export type bookType = {
id: number;
author: string;
title: string;
status: bookStatusType;
rating?: string;
note?: string;
cover?: string;
};

export type bookStatusType = 'read' | 'in-progress' | 'planned';

export interface bookInterface {
  id: number;
  title: string;
  author: string;
  isRead: "Read" | "inProcess" | "Planned";
  pages: number;
  rating?: number;
  note?: string;
  cover?: string;
}


export interface userType {
    name: string;
    age?: number;
    isAdmin: boolean | string;
};

export type shadowUserType = userType & {
    hiddenIdentity: boolean;
}

export type themeType = 'light' | 'dark';