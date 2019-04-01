exports.handler = function(evt, context, cb) {
  console.log(evt);
  cb(null, {
    statusCode: 200,
    body: "Successfully invoked"
  });
};
