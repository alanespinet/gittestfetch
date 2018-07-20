export const changeArchived = n_archived => ({
  type: 'CHANGE_ARCHIVED',
  payload: n_archived
});

export const changeVIP = n_vip => ({
  type: 'CHANGE_VIP',
  payload: n_vip
});

export const changePrivateTable = n_pt => ({
  type: 'CHANGE_PRIVATE_TABLE',
  payload: n_pt
});

export const changeFirstName = n_fn => ({
  type: 'CHANGE_FIRST_NAME',
  payload: n_fn
});

export const changeLastName = n_ln => ({
  type: 'CHANGE_LAST_NAME',
  payload: n_ln
});

export const changeFromDate = n_fd => ({
  type: 'CHANGE_FROM_DATE',
  payload: n_fd
});

export const changeToDate = n_td => ({
  type: 'CHANGE_TO_DATE',
  payload: n_td
});

export const changeEnableFrom = n_f => ({
  type: 'CHANGE_ENABLE_FROM',
  payload: n_f
});

export const changeEnableTo = n_t => ({
  type: 'CHANGE_ENABLE_TO',
  payload: n_t
});
