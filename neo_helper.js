const Helper = require('@codeceptjs/helper');

class Neo extends Helper {

  // before/after hooks
  /**
   * @protected
   */
  _before() {
    // remove if not used
  }

  /**
   * @protected
   */
  _after() {
    // remove if not used
  }

  // add custom methods here
  // If you need to access other helpers
  // use: this.helpers['helperName']
        //I.waitTabsLoading(2, 30);
        //I.changeTab(2);                        
        //I.waitInUrl('http://lms-fatecna-nemoto.qa-os.dotgroup.com.br/avaliacao/', 10);
        //I.executeScript('window.close()');

        //changeTab(num) {
        //let client = this.helpers['WebDriverIO'].browser;
        //return client
            //.getTabIds(function(err, handles) {
                //this.switchTab(handles[num - 1]);
                //return;
            //})
    //}

changeTab(num) {
        let client = this.helpers['WebDriver'].browser;
        return client
            .getTabIds().then(function(handles) {
                return this.switchTab(handles[num - 1]);
            });
    }


  waitTabsLoading(ammountOfTabs, timeout) {
        let client = this.helpers['WebDriver'].browser;
        return client
            .waitUntil(function() {
                return this.getTabIds().then(function(handles) {
                    return handles.length === ammountOfTabs
                });
            }, timeout * 1000);
    }


  waitInUrl(urlPart, timeout) {
        let client = this.helpers['WebDriver'].browser;
        let currUrl;
        return client
            .waitUntil(function() {
                return this.url().then(function(res) {
                    currUrl = res.value;
                    return (decodeURIComponent(decodeURIComponent(decodeURIComponent(res.value.replace(/\+/g, " "))).replace(/\+/g, " "))).indexOf(urlPart.replace(/\+/g, " ")) > -1;
                });
            }, timeout * 1000);
    }

}

module.exports = Neo;
