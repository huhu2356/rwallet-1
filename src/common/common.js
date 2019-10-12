import {deviceInfo as DeviceInfo} from "./info";

const common = {
    currentNavigation : null,
    isIphoneX ():boolean{
        return DeviceInfo.getModel().toLowerCase().indexOf('iphone x') >= 0
    },
};

export default common;