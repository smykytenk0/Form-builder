import { createAction, props } from '@ngrx/store';

const setElementStyle = createAction('[Style] setElementStyle', props<any>());
const addNewElement = createAction('[Style] addNewElement', props<any>());
const deleteElement = createAction('[Style] deleteElement', props<any>());
const setGeneralStyle = createAction('[Style] setGeneralStyle', props<any>());

export const StylesActions = {
  setElementStyle,
  addNewElement,
  deleteElement,
  setGeneralStyle
};
