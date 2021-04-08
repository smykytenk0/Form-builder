import { Action, createReducer, on } from '@ngrx/store';
import {ComponentStyles} from "./interfaces";
import {ComponentStylesActions} from "./component-styles.actions";

const initialState: ComponentStyles[]= [];

export const ComponentStyleReducer = createReducer(
  initialState,
  on(ComponentStylesActions.setComponentStyle, ()=>initialState),
  on(ComponentStylesActions.addNewComponent, ()=>initialState)
);
