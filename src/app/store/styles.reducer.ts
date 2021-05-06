import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {ElementStyles} from "./interfaces";
import {StylesActions} from "./styles.actions";
import {getTypeFromName} from "./helper";
import {element} from "protractor";

export const initialState: ElementStyles ={
  buttonStyles: {
    borderRadius: "20px",
    outline: "none",
    border: '1px solid black',
    width: '75px',
    height: '35px',
    backgroundColor: 'white',
    color: 'black',
    cursor: 'pointer',
    margin: '10px 20px',
    name: 'casaaas',
  },
  checkboxStyles: {
    margin: '10px 20px',
    fontSize: '16px'
  },
  inputStyles:{
    margin: '10px 20px',
    borderRadius: '20px',
    border: '1px solid black',
    outline: 'none',
    width: '450px',
    height: '35px',
    paddingLeft: '20px',
    fontSize: '20px'
  },
  labelStyles:{
    margin: '10px 20px',
    fontSize: '16px'
  },
  selectStyles:{
    margin: '10px 20px',
    border: '1px solid black',
    borderRadius: '20px',
    width: '100px',
    height: '35px',
    paddingLeft: '10px',
    outline: 'none'
  },
  textareaStyles:{
    margin: '10px 20px',
    borderRadius: '20px',
    width: '430px',
    height: '150px',
    padding: '20px',
    outline: 'none'
  },
  elements: {},
  generalStyles:{
    backgroundColor: '#f5ff85 ',
    border: '3px solid red',
    width: '99%',
    height: '90vh',
    borderRadius: '20px'
  },
  isAuth: false,
};

export const ElementsStyleReducer = createReducer(
  initialState,
  on(StylesActions.addNewElementStyle, (state, {element})=>{
    const type = getTypeFromName(element);
    const typedStyles = state[`${type}Styles`];
    return  {...state,elements: {...state.elements, [element]:typedStyles}};
  }),
  on(StylesActions.setStylesByType,(state,{payload,element}) =>{
    const type = getTypeFromName(element);
    if(type === element) {
      return {...state,[`${element}Styles`]:{...state[`${element}Styles`],...payload}};
    }
    return {...state,elements:{...state.elements,[element]:payload}};
  }),
  on(StylesActions.setAuthStatus, (state, {payload})=>{
    return({
      ...state,
      isAuth: payload
    })
  }),
);

export function getStylesBy(name: string) {
  const type = getTypeFromName(name);
  const key = `${type}Styles`;
  return createSelector(defaultStylesSelector, state => {
    const elementStyles = state.elements[name];
    return elementStyles || state[key];
  });
}

export const defaultStylesSelector = createFeatureSelector<ElementStyles>('elementStylesReducer');
export const getAuthStatusSelector = createSelector(defaultStylesSelector, state=>state.isAuth);
export const getBtnStylesSelector = createSelector(defaultStylesSelector, state=>{
  const {name,...clearStyles} =  state.buttonStyles;
  return clearStyles;
});
