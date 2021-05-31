/// <reference types='codeceptjs' />
type steps_file = typeof import('./steps_file.js');
type Neo = import('./neo_helper.js');
type MailSlurp = import('@codeceptjs/mailslurp-helper');

declare namespace CodeceptJS {
  interface SupportObject { I: I, current: any }
  interface Methods extends WebDriver, Neo, MailSlurp {}
  interface I extends ReturnType<steps_file>, WithTranslation<Neo>, WithTranslation<MailSlurp> {}
  namespace Translation {
    interface Actions {}
  }
}
