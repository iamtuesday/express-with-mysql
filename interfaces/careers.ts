export interface CareersPage {
    data: CareersData;
    meta: CareersMeta;
}

export interface CareersData {
    id:          number;
    createdAt:   string;
    updatedAt:   string;
    publishedAt: string;
    banner:      BannerTop;
    about:       About;
    working:     Working;
    seo:         SEO;
}

export interface About {
    id:       number;
    title:    string;
    subtitle: string;
    content:  string;
    text: string;
    img:      Img;
    img_mob:  Img;
}

export interface Img {
    id:                number;
    name:              string;
    alternativeText:   null;
    caption:           null;
    width:             number;
    height:            number;
    formats:           ImgFormats | null;
    hash:              string;
    ext:               EXT;
    mime:              MIME;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         Date;
    updatedAt:         Date;
}

export enum EXT {
    Jpg = ".jpg",
    PNG = ".png",
    SVG = ".svg",
  }

export interface ImgFormats {
    small?:    Thumbnail;
    thumbnail: Thumbnail;
    medium?:   Thumbnail;
}

export interface Thumbnail {
    ext:    EXT;
    url:    string;
    hash:   string;
    mime:   MIME;
    name:   string;
    path:   null;
    size:   number;
    width:  number;
    height: number;
}

export enum MIME {
    ImageJPEG = "image/jpeg",
    ImagePNG = "image/png",
    ImageSVGXML = "image/svg+xml",
  }
  

export interface BannerTop {
    id:       number;
    subtitle: string;
    title:    string;
    bg:       Img;
    bg_mob:   Img;
}



export interface BgFormats {
    large?:    Thumbnail;
    small:     Thumbnail;
    medium:    Thumbnail;
    thumbnail: Thumbnail;
}


export interface BgMobFormats {
    thumbnail: Thumbnail;
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
    metaImage?:       Img;
    metaSocial?:      MetaSocial[];
}

export interface MetaSocial {
    id:            number;
    socialNetwork: string;
    title:         string;
    description:   string;
    image:         Img;
}

export interface Working {
    id:      number;
    title:   string;
    content: string;
    list:    List[];
    img:     Img;
    img_mob: Img;
}

export interface List {
    id:   number;
    item: string;
}

export interface CareersMeta {
}