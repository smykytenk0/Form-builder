import { createAction, props } from '@ngrx/store';

const setElementStyle = createAction('[Style] setElementStyle', props<{payload: {name: string, style: string}}>());
const addNewElementStyle = createAction('[Style] addNewElement', props<{payload: {name: string, style: string}}>());
const deleteElementStyle = createAction('[Style] deleteElement', props<any>());
const setGeneralStyle = createAction('[Style] setGeneralStyle', props<{payload:{[key:string]:string}}>());

export const StylesActions = {
  setElementStyle,
  addNewElementStyle,
  deleteElementStyle,
  setGeneralStyle
};
