const RobotCleanerDevice = require('../RobotCleanerDevice.js');
const Constants = require('../../../constants/Constants.js');
const PropFormat = require('../../../constants/PropFormat.js');
const PropUnit = require('../../../constants/PropUnit.js');
const PropAccess = require('../../../constants/PropAccess.js');


class RockroboVacuumV1 extends RobotCleanerDevice {
  constructor(miotDevice, name, logger) {
    super(miotDevice, name, logger);
  }


  /*----------========== DEVICE INFO ==========----------*/

  getDeviceName() {
    return 'Xiaomi Mi Robot Vacuum';
  }

  getMiotSpecUrl() {
    return 'https://miot-spec.org/miot-spec-v2/instance?type=urn:miot-spec-v2:device:vacuum:0000A006:rockrobo-v1:1';
  }


  /*----------========== CONFIG ==========----------*/

  requiresMiCloud() {
    return true;
  }

  propertiesToMonitor() {
    return [];
  }


  /*----------========== METADATA ==========----------*/

  initDeviceServices() {
    this.createServiceByString('{"siid":2,"type":"urn:miot-spec-v2:service:vacuum:00007810:rockrobo-v1:1","description":"Robot Cleaner"}');
    this.createServiceByString('{"siid":3,"type":"urn:miot-spec-v2:service:battery:00007805:rockrobo-v1:1","description":"Battery"}');
  }

  initDeviceProperties() {
    this.addPropertyByString('vacuum:status', '{"siid":2,"piid":1,"type":"urn:miot-spec-v2:property:status:00000007:rockrobo-v1:1","description":"Status","format":"uint8","access":["read","notify"],"valueList":[{"value":1,"description":"Idle"},{"value":2,"description":"Sweeping"},{"value":3,"description":"Charging"},{"value":4,"description":"Paused"},{"value":5,"description":"Go Charging"},{"value":6,"description":"Remote Control"},{"value":7,"description":"Error"}]}');
    this.addPropertyByString('vacuum:speed-level', '{"siid":2,"piid":2,"type":"urn:miot-spec-v2:property:speed-level:00000023:rockrobo-v1:1","description":"Speed Level","format":"uint8","access":["read","write","notify"],"valueRange":[1,100,1]}');
    this.addPropertyByString('battery:battery-level', '{"siid":3,"piid":1,"type":"urn:miot-spec-v2:property:battery-level:00000014:rockrobo-v1:1","description":"Battery Level","format":"uint8","access":["read","notify"],"unit":"percentage","valueRange":[0,100,1]}');
    this.addPropertyByString('battery:charging-state', '{"siid":3,"piid":2,"type":"urn:miot-spec-v2:property:charging-state:00000015:rockrobo-v1:1","description":"Charging State","format":"uint8","access":["read"],"valueList":[{"value":1,"description":"Charging"},{"value":2,"description":"Not charging"}]}');
  }

  initDeviceActions() {
    this.addActionByString('device-information:identify', '{"siid":1,"aiid":1,"type":"urn:miot-spec-v2:action:identify:00002801:rockrobo-v1:1","description":"Identify","in":[],"out":[]}');
    this.addActionByString('vacuum:start-sweep', '{"siid":2,"aiid":1,"type":"urn:miot-spec-v2:action:start-sweep:00002804:rockrobo-v1:1","description":"Start Sweep","in":[],"out":[]}');
    this.addActionByString('vacuum:stop-sweeping', '{"siid":2,"aiid":2,"type":"urn:miot-spec-v2:action:stop-sweeping:00002805:rockrobo-v1:1","description":"Stop Sweeping","in":[],"out":[]}');
    this.addActionByString('battery:start-charge', '{"siid":3,"aiid":1,"type":"urn:miot-spec-v2:action:start-charge:00002802:rockrobo-v1:1","description":"Start Charge","in":[],"out":[]}');
  }

  initDeviceEvents() {
    //no events
  }


  /*----------========== VALUES OVERRIDES ==========----------*/

  statusSweepingValue() {
    return 2;
  }

  statusIdleValue() {
    return 1;
  }

  statusPausedValue() {
    return 4;
  }

  statusErrorValue() {
    return 7;
  }

  statusGoChargingValue() {
    return 5;
  }

  statusChargingValue() {
    return 3;
  }


  /*----------========== PROPERTY OVERRIDES ==========----------*/


  /*----------========== ACTION OVERRIDES ==========----------*/


  /*----------========== OVERRIDES ==========----------*/


}

module.exports = RockroboVacuumV1;
