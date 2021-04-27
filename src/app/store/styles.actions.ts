import { createAction, props } from '@ngrx/store';

const addNewElementStyle = createAction('[Style] addNewElement', props<{ element: string }>());
const deleteElementStyle = createAction('[Style] deleteElement', props<{payload: any}>());
const setStylesByType = createAction('[Style] set style By type', props<{ element:string, payload: {[key:string]:string}}>());

export const StylesActions = {
  addNewElementStyle,
  deleteElementStyle,
  setStylesByType
};
