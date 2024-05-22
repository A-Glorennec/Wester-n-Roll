const tables = require("../tables");

const createEvent = async (req, res) => {
  try {
    const { title, description, date, location } = req.body;
    const [results] = await tables.events.createEvent(
      title,
      description,
      date,
      location
    );

    if (results.affectedRows) {
      res.status(201).send("Event created");
    } else {
      res.status(401).send(" Error during event creation");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getAllEvents = async (req, res) => {
  try {
    const [results] = await tables.events.getAllEvents();

    if (results.length) {
      res.status(200).json({ message: "List of events", results });
    } else {
      res.status(404).send("No events found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const getEventById = async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await tables.events.getEventById(id);

    if (results.length) {
      res.status(200).json({ message: "Event by id", results });
    } else {
      res.status(404).send("No events found");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

const updateEvent = async (req, res) => {
  const { id } = req.params;
  const { title, description, date, location } = req.body;
  try {
    const [results] = await tables.events.updateEvent(id, {
      title,
      description,
      date,
      location,
    });
    if (results.affectedRows) {
      res.status(200).send("Event updated");
    } else {
      res.status(404).send("Event not found.");
    }
  } catch (error) {
    console.error("Error:", error);
    res.status(500).send(error);
  }
};

const deleteEvent = async (req, res) => {
  try {
    const { id } = req.params;
    const [results] = await tables.events.deleteEvent(id);

    if (results.affectedRows) {
      res.status(200).send("Event deleted");
    } else {
      res.status(401).send("Error during event delete");
    }
  } catch (error) {
    res.status(500).send(error);
  }
};

module.exports = {
  createEvent,
  getAllEvents,
  getEventById,
  updateEvent,
  deleteEvent,
};
