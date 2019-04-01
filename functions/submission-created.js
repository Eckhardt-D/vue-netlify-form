exports.handler = function(evt, context, cb) {
  console.log(evt.body);
  console.log("context", context);

  cb(null, {
    statusCode: 200,
    body: "Successfully invoked"
  });
};
