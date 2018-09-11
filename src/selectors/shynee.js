import { createSelector } from 'reselect';

export const shyneeInfoSelector = state => state.shynee.info;
export const shyneeSettingsSelector = state => state.shynee.settings;

export const shyneeIsReadySelector = createSelector(
  shyneeSettingsSelector,
  settings => settings.data ? settings.data.isReady : false
);

export const shyneeIdSelector = createSelector(
  shyneeSettingsSelector,
  //TODO: Убрать фэйковый id, когда ручка будет отдавать id (на null)
  settings => settings.data && settings.data.id ? settings.data.id : 'f3f4df32-9955-4092-bbff-bee34a670276'
);
