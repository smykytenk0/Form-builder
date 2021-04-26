import { createAction, props } from '@ngrx/store';

const setElementStyle = createAction('[Style] setElementStyle', props<{payload: {name: string, style: string}}>());
const addNewElementStyle = createAction('[Style] addNewElement', props<{payload: {name: string, style: string}}>());
const deleteElementStyle = createAction('[Style] deleteElement', props<any>());
const setGeneralStyle = createAction('[Style] setGeneralStyle', props<{payload:{[key:string]:string}}>());
const setBtnStyle = createAction('[Style] setBtnStyle', props<{payload: {[key:string]:string}}>());
const setCheckboxStyle = createAction('[Style] setCheckboxStyle', props<{payload: {[key:string]:string}}>());
const setInputStyle = createAction('[Style] setInputStyle', props<{payload: {[key:string]:string}}>());
const setSelectStyle = createAction('[Style] setSelectStyle', props<{payload: {[key:string]:string}}>());
const setTextareaStyle = createAction('[Style] setTextareaStyle', props<{payload: {[key:string]:string}}>());
const setLabelStyles = createAction('[Style] setTextareaStyle', props<{payload: {[key:string]:string}}>());

export const StylesActions = {
  setElementStyle,
  setBtnStyle,
  setCheckboxStyle,
  setInputStyle,
  setSelectStyle,
  setTextareaStyle,
  setLabelStyles,
  addNewElementStyle,
  deleteElementStyle,
  setGeneralStyle
};
