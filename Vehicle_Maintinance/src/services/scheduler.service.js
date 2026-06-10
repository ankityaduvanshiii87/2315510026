const { getDepots } = require("./depot.service");
const { getVehicles } = require("./vehicle.service");

const scheduleVehicles =
  require("../utils/schedulerAlgorithm");

const generateSchedule = async () => {

  const depots =
    await getDepots();

  const vehicles =
    await getVehicles();

  const result =
    scheduleVehicles(
      depots.depots,
      vehicles.vehicles
    );

  return result;
};

module.exports = {
  generateSchedule
};