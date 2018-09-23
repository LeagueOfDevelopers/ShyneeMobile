import { createSelector } from 'reselect';

export const shyneeInfoSelector = state => state.shynee.info;
export const shyneeSettingsSelector = state => state.shynee.settings;

export const shyneeIsReadySelector = createSelector(
  shyneeSettingsSelector,
  settings => settings.data ? settings.data.isReady : false
);

export const shyneeIdSelector = createSelector(
  shyneeInfoSelector,
  info => info.data ? info.data.id : null
);

export const shyneeCredentialsSelector = createSelector(
  shyneeInfoSelector,
  info => info.data ? { shyneeId: info.data.id, token: info.data.token } : null
)