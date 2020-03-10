export interface Welcome {
    "im:name":        ImItemCount;
    "im:image":       ImImage[];
    "im:itemCount":   ImItemCount;
    "im:price":       ImPrice;
    "im:contentType": WelcomeimContentType;
    rights:           ImItemCount;
    title:            ImItemCount;
    link:             Link;
    id:               Id;
    "im:artist":      ImArtist;
    category:         Category;
    "im:releaseDate": ImReleaseDate;
}

export interface Category {
    attributes: CategoryAttributes;
}

export interface CategoryAttributes {
    "im:id": string;
    term:    string;
    scheme:  string;
    label:   string;
}

export interface Id {
    label:      string;
    attributes: IdAttributes;
}

export interface IdAttributes {
    "im:id": string;
}

export interface ImArtist {
    label:       string;
    attributes?: ImArtistAttributes;
}

export interface ImArtistAttributes {
    href: string;
}

export interface WelcomeimContentType {
    "im:contentType": ImContentTypeimContentType;
    attributes:       ImContentTypeAttributes;
}

export interface ImContentTypeAttributes {
    term:  Label;
    label: Label;
}

export enum Label {
    Album = "Album",
    Music = "Music",
}

export interface ImContentTypeimContentType {
    attributes: ImContentTypeAttributes;
}

export interface ImImage {
    label:      string;
    attributes: ImImageAttributes;
}

export interface ImImageAttributes {
    height: string;
}

export interface ImItemCount {
    label: string;
}

export interface ImPrice {
    label:      string;
    attributes: ImPriceAttributes;
}

export interface ImPriceAttributes {
    amount:   string;
    currency: Currency;
}

export enum Currency {
    Usd = "USD",
}

export interface ImReleaseDate {
    label:      Date;
    attributes: ImItemCount;
}

export interface Link {
    attributes: LinkAttributes;
}

export interface LinkAttributes {
    rel:  Rel;
    type: Type;
    href: string;
}

export enum Rel {
    Alternate = "alternate",
}

export enum Type {
    Texthtml = "text/html",
}
