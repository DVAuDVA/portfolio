export type bookType = {
    id: number;
    author: string;
    title: string;
    status: bookStatusType;
    rating: number;
    note?: string;
    cover?: string;
};

export type bookStatusType = 'read' | 'inProcess' | 'planned';