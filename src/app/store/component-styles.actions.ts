import { createAction, props } from '@ngrx/store';

const setComponentStyle = createAction('[Style] SetComponentStyle');

const addNewComponent = createAction('[Style] AddNewAction');

export const ComponentStylesActions = {
  setComponentStyle,
  addNewComponent
};
