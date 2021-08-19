import { createFeatureSelector, createReducer, createSelector, on } from '@ngrx/store';
import { ElementStyles } from '../shared/interfaces/interfaces';
import { StylesActions } from './styles.actions';
import { getTypeFromName } from './helper';

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
    margin: '10px 5%',
    name: 'casaaas',
  },
  checkboxStyles: {
    margin: '10px 5%',
    fontSize: '16px'
  },
  inputStyles:{
    margin: '10px 5%',
    borderRadius: '20px',
    border: '1px solid black',
    outline: 'none',
    width: '80%',
    height: '35px',
    padding: '5px 5%',
    fontSize: '20px'
  },
  labelStyles:{
    margin: '10px 5%',
    fontSize: '16px'
  },
  selectStyles:{
    margin: '10px 5%',
    border: '1px solid black',
    borderRadius: '20px',
    width: '100px',
    height: '35px',
    paddingLeft: '10px',
    outline: 'none',
    backgroundColor: 'transparent'
  },
  textareaStyles:{
    margin: '10px 5%',
    borderRadius: '20px',
    width: '80%',
    height: '150px',
    padding: '5%',
    outline: 'none'
  },
  elements: {},
  generalStyles:{
    backgroundColor: 'transparent',
    border: 'none',
    width: '100%',
    height: '90vh',
    borderRadius: '0'
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
  on(StylesActions.deleteElement, (state, {element})=>{
    return {...state, [`${element}Styles`]:null}
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
