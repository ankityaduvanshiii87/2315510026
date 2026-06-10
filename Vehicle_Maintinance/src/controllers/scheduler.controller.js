const schedulerService =require("../services/scheduler.service");

const getSchedule = async (req, res) => {

  try {

    const schedule =
      await schedulerService.generateSchedule();

    res.status(200).json(schedule);

  } catch (error) {

    res.status(500).json({
      message: error.message
    });

  }

};

module.exports = {
  getSchedule
};