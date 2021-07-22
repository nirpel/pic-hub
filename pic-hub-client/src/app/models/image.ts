import { Category } from "./category";

export class Image {
    fileName: string;
    caption: string;
    categories: Category[];
    location: string;
    isFavorite: boolean;
    isPrivate: boolean;

    constructor(fileName: string, caption: string, categories: Category[], location: string, isFavorite: boolean, isPrivate: boolean) {
        this.fileName = fileName;
        this.caption = caption;
        this.categories = categories;
        this.location = location;
        this.isFavorite = isFavorite;
        this.isPrivate = isPrivate
    }
}