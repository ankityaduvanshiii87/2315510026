function scheduleVehicles(depots, vehicles) {

  depots.sort(
    (a, b) => b.MachinHours - a.MachinHours
  );

  vehicles.sort(
    (a, b) => b.priorityScore - a.priorityScore
  );

  const schedule = [];

  for (const vehicle of vehicles) {

    for (const depot of depots) {

      if (
        depot.MachinHours >= vehicle.estimatedRepairHours
      ) {

        schedule.push({
          vehicleId: vehicle.vehicleId,
          depotId: depot.ID,
          hours: vehicle.estimatedRepairHours
        });

        depot.MachinHours -=
          vehicle.estimatedRepairHours;

        break;
      }
    }
  }

  return schedule;
}

module.exports = scheduleVehicles;