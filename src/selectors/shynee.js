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
  settings => settings.data && settings.data.id ? settings.data.id : '79b4d3d4-604c-4020-893d-9414ac9ae56d'
);
