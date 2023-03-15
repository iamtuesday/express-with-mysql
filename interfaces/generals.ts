export interface Polylang {
    data: PolylangData;
    meta: PolylangMeta;
}

export interface PolylangData {
    id:               number;
    email:            string;
    address:          string;
    url_map:          string;
    phone:            string;
    facebook_id:      string;
    pixel_facebook:   string;
    tag_manager:      string;
    cellphone:        string;
    message_getbuton: string;
    createdAt:        string;
    updatedAt:        string;
    publishedAt:      string;
    lbl_solar_energy: string;
    lbl_contact_us:   string;
    lbl_see_service:  string;
    logo:             Logo;
    menu:             Menu[];
    socials_networks: SocialsNetwork[];
}

export interface Logo {
    id:                number;
    name:              string;
    alternativeText:   string;
    caption:           string;
    width:             number;
    height:            number;
    formats:           null;
    hash:              string;
    ext:               string;
    mime:              string;
    size:              number;
    url:               string;
    previewUrl:        null;
    provider:          string;
    provider_metadata: null;
    createdAt:         string;
    updatedAt:         string;
}

export interface Menu {
    id:    number;
    label: string;
    url:   string;
}

export interface SocialsNetwork {
    id:   number;
    type: string;
    url:  string;
}

export interface PolylangMeta {
}