exports.handler = function(evt, context, cb) {
  console.log(JSON.parse(evt.body).payload);

  cb(null, {
    statusCode: 200,
    body: "Successfully invoked"
  });
};
