describe('Application Spec', function() {

  it('application should exist', function() {
    expect(AM).toBeDefined();
  });

  it('controllers should exist', function() {
    expect(AM.controller.Users).toBeDefined();
  });

  it('stores should exist', function() {
    expect(AM.store.Users).toBeDefined();
  });

  it('models should exist', function() {
    expect(AM.model.User).toBeDefined();
  });

  it('views should exist', function() {
    expect(AM.view.user.List).toBeDefined();
    expect(AM.view.user.Edit).toBeDefined();
  });

});
