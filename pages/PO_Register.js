const { I } = inject();

module.exports = {

  // insert your locators and methods here
  fields: {
   name_field: '//*[@id="main-container"]/section/form/label[1]/input',
   email_field: '//*[@id="main-container"]/section/form/label[2]/input',
   email_field2: '//*[@id="main-container"]/section/form/label[3]/input',
   password_field: '//*[@id="main-container"]/section/form/label[4]/input'
  },


  submitButton: { 
   btn_submit: '//*[@id="main-container"]/section/form/input[4]'
  },

  

  // introducing methods
  sendForm(name_field, email_field, email_field2, password_field) {
    I.fillField(this.fields.name_field, name_field);
    I.fillField(this.fields.email_field, email_field);
    I.fillField(this.fields.email_field2, email_field2);
    I.fillField(this.fields.password_field, password_field);
    I.click(this.submitButton);
  }



}
