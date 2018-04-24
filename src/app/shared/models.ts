export class Album {
    id: number;
    userId: number;
    title: string;
    link: string;
}

export class Photo {
    id: number;
    albumId: number;
    title: number;
    url: string;
    thumbnailUrl: string;
    link: string;
}
