const index = require("../seed/index.html");
const contact = require("../seed/contact.html");
const about = require("../seed/about.html");
const test = require("../seed/test.html");

export function getPageData(req,res){
  res.status(200).json({
      pages: [
          {key: "/", content: index},
          {key: "contact", content: contact},
          {key: "about", content: about},
          {key: "test", content: test},
      ]
  });
}