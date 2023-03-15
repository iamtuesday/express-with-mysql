export interface TYPE_FIELD_PROPS {
    names: RegExp
    email: RegExp
    any: RegExp
    phone: RegExp
    date: RegExp
    time: RegExp
    zipcode: RegExp
  }
  
  // Expresiones regulares para validaciones de formulario
  
  export const TYPE_FIELD: TYPE_FIELD_PROPS = {
    names: /[a-z]{3,30}[\s]{0,1}[a-z]{0,30}[\s]{0,1}[a-z]{0,30}/i,
    any: /[\w]+/i,
    phone: /^(1\s?)?(\d{3}|\(\d{3}\))[\s-]?\d{3}[\s-]?\d{4}$/,
    email:
      /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
    date: /[A-za-z0–9_]/,
    time: /^([0-1]?[0-9]|2[0-3]):[0-5][0-9]$/,
    zipcode: /^[a-z0-9][a-z0-9\- ]{0,10}[a-z0-9]$/
  }
  
  export interface InitialFormState {
    names: string
    email: string
    phone: string
    service: string
    message: string
  }
  
  export interface InitialFormErrors {
    names: string
    email: string
    phone: string
    service: string
  }
  
  // Estado inicial del formulario
  
  export const initialFormState: InitialFormState = {
    names: '',
    email: '',
    phone: '',
    service: '',
    message: ''
  }
  
  // Campos del formulario que no pueden estar vacios
  
  export const initialFormErrors: InitialFormErrors = {
    names: '',
    email: '',
    phone: '',
    service: ''
  }
  