import {
  createContext,
  FC,
  PropsWithChildren,
  useContext,
  useState,
} from "react";
import { PolylangData } from "../interfaces/generals";

export interface ControllerState {
  polylang: PolylangData;
}

const useGeneralsController = ({polylang}: ControllerState): ControllerState => {
  const [generals, setGenerals] = useState({ polylang });
  return { polylang: generals.polylang };
};

const initialState: ControllerState = {
  polylang: {
    id:               1,
    email:            '',
    address:          '',
    url_map:          '',
    phone:            '',
    facebook_id:      '',
    pixel_facebook:   '',
    tag_manager:      '',
    cellphone:        '',
    message_getbuton: '',
    createdAt:        '',
    updatedAt:        '',
    publishedAt:      '',
    lbl_solar_energy: '',
    lbl_contact_us:   '',
    lbl_see_service:  '',
    logo: {
      id: 10,
      name: "",
      alternativeText: "",
      caption: "",
      width: 0,
      height: 0,
      formats: null,
      hash: "",
      ext: "",
      mime: "",
      size: 0,
      url: "",
      previewUrl: null,
      provider: "",
      provider_metadata: null,
      createdAt: "",
      updatedAt: "",
    },
    menu:             [],
    socials_networks: []
  },
};

export const GeneralsContext = createContext<ControllerState>(initialState);

interface GeneralsProviderProps extends PropsWithChildren {
  generals: ControllerState;
}

export const GeneralsProvider: FC<GeneralsProviderProps> = ({
  children,
  generals,
}) => {
  return (
    <GeneralsContext.Provider value={useGeneralsController(generals)}>
      {children}
    </GeneralsContext.Provider>
  );
};

export const useGenerals = () => useContext(GeneralsContext);
