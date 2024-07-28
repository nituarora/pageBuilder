
// const mongoose = require('mongoose');

// const pageSchema = new mongoose.Schema({
//     name: {
//         type: String,
//         required: true,
//         trim: true
//     },
//     templateId: {
//         type: String,
//     },
//     createdAt: {
//         type: Date,
//         default: Date.now
//     }
// });

// const Page = mongoose.model('Pages', pageSchema);

// module.exports = Page;

const mongoose = require('mongoose');

const pageSchema = new mongoose.Schema({
  
  name: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  title: {
    type: String,
    required: true
  },
  // widgetId:{
  //   type:String,
  // },
  widgets: {
    type: Array,
  },
  widget: {
    title: {
      type: String,
      //required: true
    },
    content: {
      type: String,
     // required: true
    },
    contactNumber: {
      type: String,
     // required: true
    },
    time: {
      type: String,
      //required: true
    }
  }
});

const Page = mongoose.model('Page', pageSchema);

module.exports = Page;
