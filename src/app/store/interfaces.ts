export interface User {
  id: string,
  email: string,
  password: string
}

export enum ElementType  {
  BUTTON = 'button',
  CHECKBOX = 'checkbox',
  INPUT = 'input',
  LABEL = 'label',
  SELECT = 'select',
  TEXTAREA = 'textarea'
}

export interface ElementStyles {
  buttonStyles?:{[key: string]: string},
  checkboxStyles?:{[key: string]: string},
  inputStyles?:{[key: string]: string},
  labelStyles?:{[key: string]: string},
  selectStyles?:{[key: string]: string},
  textareaStyles?:{[key: string]: string},
  elements?:{[key: string]: {[key: string]: string}},
  generalStyles:{[key:string]:string}
}

export interface CustomComponent {
  id: string,
}

