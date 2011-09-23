Ext.define('AM.model.User', {
  extend: 'Ext.data.Model',

  fields: [ 'name', 'email' ],
  
  proxy: {
    type: 'ajax',
    api: {
      read: 'data/users.json',
      update: 'data/updateUsers.json'
    },
    reader: {
      type: 'json',
      root: 'users',
      successProperty: 'success'
    }
  }
});
