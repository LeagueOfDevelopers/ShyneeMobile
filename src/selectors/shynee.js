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
  settings => settings.data ? settings.data.id : '1c21dde0-a529-4e4d-949e-be0412ccdf7f'
);
