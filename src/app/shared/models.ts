export class AlbumPreviewDto {
    albumId: number;
    name: string;
    webSite: string;
    city: string;
    lat: string;
    lng: string;
    photoCount: number;
    randomThumbnailUrl: string;

    link: string;
    mapLink: string;
}

export class PhotoPreviewDto {
    externalId: number;
    title: number;
    thumbnailUrl: string;
    likes: number;

    link: string;
}

export class PhotoDto {
    title: string;
    url: string;
    albumId: number;
    likes: number;
}
