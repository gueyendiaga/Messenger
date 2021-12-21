const db = require("../models");
const Etagere = db.authors;

// Create and Save a new Etagere
exports.create = (req, res) => {
  // Validate request
  if (!req.body.title) {
    res.status(400).send({ message: "Content can not be empty!" });
    return;
  }

  // Create a Etagere
  const etagere = new Etagere({
    number: req.body.number,
    description: req.body.description,
    published: req.body.published ? req.body.published : false
  });

  // Save Etagere in the database
  etagere
    .save(etagere)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the Etagere."
      });
    });
};

// Retrieve all Etageres from the database.
exports.findAll = (req, res) => {
  const title = req.query.title;
  var condition = title ? { title: { $regex: new RegExp(title), $options: "i" } } : {};

  Etagere.find(condition)
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving etageres."
      });
    });
};

// Find a single Etagere with an id
exports.findOne = (req, res) => {
  const id = req.params.id;

  Etagere.findById(id)
    .then(data => {
      if (!data)
        res.status(404).send({ message: "Not found Etagere with id " + id });
      else res.send(data);
    })
    .catch(err => {
      res
        .status(500)
        .send({ message: "Error retrieving Etagere with id=" + id });
    });
};

// Update a Etagere by the id in the request
exports.update = (req, res) => {
  if (!req.body) {
    return res.status(400).send({
      message: "Data to update can not be empty!"
    });
  }

  const id = req.params.id;

  Etagere.findByIdAndUpdate(id, req.body, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot update Etagere with id=${id}. Maybe Etagere was not found!`
        });
      } else res.send({ message: "Etagere was updated successfully." });
    })
    .catch(err => {
      res.status(500).send({
        message: "Error updating Etagere with id=" + id
      });
    });
};

// Delete a Etagere with the specified id in the request
exports.delete = (req, res) => {
  const id = req.params.id;

  Etagere.findByIdAndRemove(id, { useFindAndModify: false })
    .then(data => {
      if (!data) {
        res.status(404).send({
          message: `Cannot delete Etagere with id=${id}. Maybe Etagere was not found!`
        });
      } else {
        res.send({
          message: "Etagere was deleted successfully!"
        });
      }
    })
    .catch(err => {
      res.status(500).send({
        message: "Could not delete Etagere with id=" + id
      });
    });
};

// Delete all Etageres from the database.
exports.deleteAll = (req, res) => {
  Etagere.deleteMany({})
    .then(data => {
      res.send({
        message: `${data.deletedCount} Etageres were deleted successfully!`
      });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while removing all etageres."
      });
    });
};

// Find all published Etageres
exports.findAllPublished = (req, res) => {
  Etagere.find({ published: true })
    .then(data => {
      res.send(data);
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while retrieving etageres."
      });
    });
};
