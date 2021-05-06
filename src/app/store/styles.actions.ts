import { createAction, props } from '@ngrx/store';

const addNewElementStyle = createAction('[Style] addNewElement', props<{ element: string }>());
const deleteElementStyle = createAction('[Style] deleteElement', props<{payload: any}>());
const setStylesByType = createAction('[Style] set style By type', props<{ element:string, payload: {[key:string]:string}}>());
const setAuthStatus = createAction('[Style] set Auth Status', props<{payload: boolean}>());


export const StylesActions = {
  addNewElementStyle,
  deleteElementStyle,
  setStylesByType,
  setAuthStatus
};
