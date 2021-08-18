import { Category } from "./category";
import { Location } from "./location";

export interface Image {
    fileName: string;
    caption?: string;
    categories?: Category[];
    location?: Location;
    isFavorite: boolean;
    isPrivate: boolean;
}