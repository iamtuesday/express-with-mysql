export interface WorkPage {
    data: WorkData;
    meta: WorkMeta;
}

export interface WorkData {
    id: number;
    createdAt: string;
    updatedAt: string;
    publishedAt: string;
    banner: Banner;
    how_it_works: HowItWorks;
    slider: Slider;
    seo: SEO[];
}

export interface Banner {
    id: number;
    subtitle: string;
    title: string;
    bg: BgMob;
    bg_mob: BgMob;
}


export enum EXT {
    Jpg = ".jpg",
    PNG = ".png",
    SVG = ".svg",
}

export interface BgFormats {
    large?: Thumbnail;
    small?: Thumbnail;
    medium?: Thumbnail;
    thumbnail: Thumbnail;
}

export interface Thumbnail {
    ext: EXT;
    url: string;
    hash: string;
    mime: MIME;
    name: string;
    path: null;
    size: number;
    width: number;
    height: number;
}

export enum MIME {
    ImageJPEG = "image/jpeg",
    ImagePNG = "image/png",
    ImageSVGXML = "image/svg+xml",
}

export interface BgMob {
    id: number;
    name: string;
    alternativeText: null;
    caption: null;
    width: number;
    height: number;
    formats: BgMobFormats;
    hash: string;
    ext: EXT;
    mime: MIME;
    size: number;
    url: string;
    previewUrl: null;
    provider: string;
    provider_metadata: null;
    createdAt: Date;
    updatedAt: Date;
}

export interface BgMobFormats {
    thumbnail: Thumbnail;
}

export interface HowItWorks {
    id: number;
    title: string;
    subtitle: string;
    content: string;
    list: List[];
    img: BgMob;
    img_mob: BgMob;
    img_two: BgMob;
    img_three: BgMob;
}

export interface List {
    id: number;
    item: string;
}

export interface SEO {
    id:              number;
    metaTitle:       string;
    metaDescription: string;
    keywords?:        string;
    metaRobots?:      string;
    structuredData?:  string;
    metaViewport?:    string;
    canonicalURL?:    string;
    metaImage?:       BgMob;
    metaSocial?:      MetaSocial[];
}

export interface MetaSocial {
    id:            number;
    socialNetwork: string;
    title:         string;
    description:   string;
    image:         BgMob;
}

export interface Slider {
    id: number;
    title: string;
    subtitle: string;
    experience: Experience;
    slide: Slide[];
}

export interface Experience {
    id: number;
    count: string;
    content: string;
}

export interface Slide {
    id: number;
    title: string;
    content: string;
    img: BgMob;
}

export interface WorkMeta {
}