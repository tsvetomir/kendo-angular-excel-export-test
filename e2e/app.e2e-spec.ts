import { KendoAngularExcelExportTestPage } from './app.po';

describe('kendo-angular-excel-export-test App', () => {
  let page: KendoAngularExcelExportTestPage;

  beforeEach(() => {
    page = new KendoAngularExcelExportTestPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('app works!');
  });
});
