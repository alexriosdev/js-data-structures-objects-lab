const driver = {};

const updateDriverWithKeyAndValue = (driver, key, value) => {
  return Object.assign({}, driver, { [key]: value });
}

const destructivelyUpdateDriverWithKeyAndValue = (driver, key, value) => {
  driver[key] = value;
  return driver;
}

const deleteFromDriverByKey = (driver, key) => {
  const driverClone = Object.assign({}, driver);
  delete driverClone[key];
  return driverClone;
}

const destructivelyDeleteFromDriverByKey = (driver, key) => {
  delete driver[key];
  return driver;  
}
