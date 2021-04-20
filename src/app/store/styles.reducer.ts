import {createFeatureSelector, createReducer, createSelector, on} from '@ngrx/store';
import {ElementStyles} from "./interfaces";
import {StylesActions} from "./styles.actions";

export const initialState: ElementStyles ={
  btnStyles: {
    borderRadius: "20px",
    outline: "none",
    border: '1px solid black',
    width: '75px',
    height: '35px',
    backgroundColor: 'white',
    color: 'black',
    cursor: 'pointer',
    margin: '10px 20px'
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
  elements:[],
  generalStyle:{
    backgroundColor: '#f5ff85 ',
    border: '3px solid red',
    width: '99%',
    height: '90vh',
    borderRadius: '20px'
  }
} ;

export const ElementsStyleReducer = createReducer(
  initialState,
  on(StylesActions.setElementStyle, ()=>initialState),
  on(StylesActions.setGeneralStyle, ()=>initialState),
  on(StylesActions.addNewElement, ()=>initialState)
);

export const defaultStylesSelector = createFeatureSelector<ElementStyles>('defaultElementStyles');
export const getBtnStylesSelector = createSelector(defaultStylesSelector, state=>state.btnStyles);
export const getCheckboxStylesSelector = createSelector(defaultStylesSelector, state=>state.checkboxStyles);
export const getInputStylesSelector = createSelector(defaultStylesSelector, state=>state.inputStyles);
export const getLabelStylesSelector = createSelector(defaultStylesSelector, state=>state.labelStyles);
export const getSelectStylesSelector = createSelector(defaultStylesSelector, state=>state.selectStyles);
export const getTextareaStylesSelector = createSelector(defaultStylesSelector, state=>state.textareaStyles);
