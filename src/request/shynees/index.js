import request from '../index';

export const getShyneesAroundRequest = () => {
  const params = {
    method: 'PUT',
    body: JSON.stringify({
      latitude: 100,
      longitude: 100
    })
  };
  return request('/shynees/around', params)
    .then(data => data.json());
};

export const getShyneeInfoRequest = (id) => {
  return request(`/shynees/${id}`)
    .then(data => data.json());
};

export const getShyneeSettingsRequest = (id) => {
  return request(`/shynees/${id}/settings`)
    .then(data => data.json());
};

export const getShyneeSettingsPrivacyRequest = (id, token) => request(`/shynees/${id}/profile/privacy`, {
  token
}).then(data => {
  return data.json();
});

export const editShyneeSettingsPrivacyRequest = (id, token, settingsPrivacy) => 
  request(`/shynees/${id}/profile/privacy`, {
    method: 'PUT',
    token,
    body: JSON.stringify(settingsPrivacy)
  }).then(data => data.json());

export const setShyneeReady = (id, isReady) => {
  const params = {
    method: 'POST'
  };
  return request(`/shynees/${id}/ready/${isReady}`, params)
    .then(data => data.json());
};

export const signShyneeUp = async (email, password) => {
  const params = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    })
  };

  const response = await request('/shynees', params);
  const validationError = response.status === 400;
  const alreadyExistError = response.status === 409;
  const data = response.ok || validationError
    ? await response.json()
    : await response.text();
  return {
    error: !response.ok,
    validationError,
    alreadyExistError,
    data
  };
};

export const signShyneeIn = async (email, password) => {
  const params = {
    method: 'POST',
    body: JSON.stringify({
      email,
      password
    })
  };

  const response = await request('/login', params);
  const notFound = response.status === 404;
  if (notFound) {
    return { notFound };
  }

  const wrongPassword = response.status === 401;
  if (wrongPassword) {
    return { wrongPassword };
  }

  const data = response.ok
    ? await response.json()
    : await response.text();
  return {
    success: response.ok,
    data
  };
};

export const refreshShyneeData = async (token) => {
  const params = {
    headers: {
      'Authorization': `Bearer ${token}`
    }
  };

  const response = await request('/refresh', params);
  const invalidToken = response.status === 401;
  if (invalidToken) {
    return { invalidToken };
  }

  const data = response.ok
    ? await response.json()
    : await response.text();
  return {
    success: response.ok,
    data
  };
};
