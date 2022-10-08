//get all bootcamps

exports.getBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'Show all bootcamps' });
};

//get single bootcamp
exports.getBootcamp = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'single' });
};

//create
exports.createBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'created' });
};

//update
exports.updateBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'updated' });
};

//delete
exports.deleteBootcamps = (req, res, next) => {
  res.status(200).json({ success: true, msg: 'deleted' });
};
