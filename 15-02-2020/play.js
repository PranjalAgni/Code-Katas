// CallStatus.js
class CallStatus {
  //10 scenarios
  // API Call => doCallEndThings(e, false)

  constructor() {
    // offline
    this.attachEventListeners();
  }

  attachEventListeners() {
    window.addEventListener('online', async () => {
      await analystBackOnline();
    });
  }

  async analystOffline() {
    const requestObj = {
      reason: '--',
      hungUpBy: '--',
      startTime: 0,
      endTime: 0,
      contactObj: 1,
    };

    window.localStorage.setItem('KEY', requestObj);
  }

  async analystBackOnline() {
    const value = window.localStorage.getItem('KEY');
    if (!value && !isEmpty(value)) {
      reqObj = {
        hangUpBy: 'OWN',
        reason: 'OWN',
      };
    }

    await callService.addCallLog(reqObj);
    localStorage.clear();
  }

  async checkPoorConnection() {
    const currentRoute = getRoute();
    if (currentRoute === '/call-prep') {
      const startTime = console.time('res-time');
      const response = await networkService.ping();
      const endTime = console.timeEnd('res-time');
      const diff = endTime - startTime;
      if (diff > 15000) {
        const newRoute = getRoute();
        if (newRoute === currentRoute) return true;
      }
    }

    return false;
  }

  async callInitiationFailed() {
    // 1. offline
    const isOffline = !navigator.onLine;
    if (isOffline) this.analystOffline();
    else {
      const status = this.checkPoorConnection();
      if (status) console.log('solve');
      // 2. slowNet =
      //  networkService && time > 3000;
      // 3. websocket failed
    }
  }

  isConnectionPoor() {
    reason = '';
    hunUpBy = 'OWN';
    this.updateStore();
  }

  getWhoHungUp() {}

  updateStore() {
    //store
  }

  // last thing = reducer {hangupBy: "", reason: ""}
}

const callStatus = new CallStatus();
export default callStatus;

// SipUtils.js
// import callStatus from './callStatus'
// terminating/terminated
// callStatus.getWhoHungUp()

// InCallContactPanel
// import callStatus from './callStatus'
// hanUpBeforeConnected(); => fn => "Disconnection in try-t-state due to poor connection"
// callStatus.isConnectionPoor()
