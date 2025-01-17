import delay from "./mockDelay";

let scans = [
  {
    name: "Concrete Slab #1",
    elevationMax: 3.2,
    elevationMin: 0.1,
    scannedByUserId: 0
  },
  {
    name: "Concrete Slab #2",
    elevationMax: 3.3,
    elevationMin: 0.05,
    scannedByUserId: 0
  },
  {
    name: "Door opening",
    elevationMax: 2.44,
    elevationMin: 0.1,
    scannedByUserId: 0
  },
  {
    name: "Floor",
    elevationMax: 0.2,
    elevationMin: 0.05,
    scannedByUserId: 1
  },
  {
    name: "Ceiling",
    elevationMax: 3.4,
    elevationMin: 3.15,
    scannedByUserId: 0
  },
  {
    name: "Ventilation Opening",
    elevationMax: 1.6,
    elevationMin: 1.5,
    scannedByUserId: 1
  },
  {
    name: "Column #1",
    elevationMax: 0.1,
    elevationMin: 9.2,
    scannedByUserId: 0
  },
  {
    name: "Column #2",
    elevationMax: 0.2,
    elevationMin: 9.0,
    scannedByUserId: 0
  },
  {
    name: "Column #3",
    elevationMax: 0.1,
    elevationMin: 9.0,
    scannedByUserId: 2
  }
];

// easier to work with scans if they have an id
scans = scans.map((s, i) => {
  s.id = "scan" + i;
  return s;
});

class ScanApi {
  static getAllScans() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve([...scans]);
      }, delay);
    });
  }

  static saveScan(scan) {
    let index = scans.map(s => s.id).indexOf(scan.id);
    if (index > -1) {
      scans.splice(index, 1, scan);
      console.warn(scan, scans);
      return new Promise(resolve => {
        setTimeout(() => {
          scans = [...scans];
          resolve(scan);
        }, delay);
      });
    }
    return new Promise(resolve => {
      setTimeout(() => {
        scans = [...scans, scan];
        resolve(scan);
      }, delay);
    });
  }

  static deleteScan(scanIndex) {
    return new Promise(resolve => {
      setTimeout(() => {
        scans.splice(scanIndex, 1);
        resolve();
      }, delay);
    });
  }
}

export default ScanApi;
