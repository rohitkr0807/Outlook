module.exports = {

  async openLoginPage(req,res){
    res.locals.layout = "layouts/layout";
    res.view('pages/loginPage');
  },

  async printHello(req,res) {
    res.send('Hello');
  },
};
