const { I } = inject();

module.exports = {

  // insert your locators and methods here
  fields: {
   search: '/html/body/div[1]/div[3]/form/div[1]/div[1]/div[1]/div/div[2]/input'
  },


  submitButton: { 
   btn_search: '/html/body/div[1]/div[3]/form/div[1]/div[1]/div[2]/div[2]/div[2]/center/input[1]'
  },



  
  // introducing methods
  search(text) {
    I.fillField(this.fields.search, text);
    I.click(this.submitButton);
  }





}
