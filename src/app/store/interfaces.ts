export interface User {
  id: string,
  email: string,
  password: string
}

export enum ElementType{
  BTN = 'button',
  CHECKBOX = 'checkbox',
  INPUT = 'input',
  LABEL = 'label',
  SELECT = 'select',
  TEXTAREA = 'textarea'
}



export interface ElementStyles {
  btnStyles?:{[key: string]: string},
  checkboxStyles?:{[key: string]: string},
  inputStyles?:{[key: string]: string},
  labelStyles?:{[key: string]: string},
  selectStyles?:{[key: string]: string},
  textareaStyles?:{[key: string]: string},
  elements?:[],
  generalStyle:{[key:string]:string}
}

export interface CustomComponent {
  id: string,
}

