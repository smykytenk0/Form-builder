export interface User {
  id: string,
  email: string,
  password: string
}

export interface ElementStyles {
  btnStyles?:{[key: string]: string},
  checkboxStyles?:{[key: string]: string},
  inputStyles?:{[key: string]: string},
  labelStyles?:{[key: string]: string},
  selectStyles?:{[key: string]: string},
  textareaStyles?:{[key: string]: string},
  elements?:[]
}

export interface CustomComponent {
  id: string,
}

