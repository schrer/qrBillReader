import { useLocalStorage, writeStorage } from '@rehooks/local-storage';

export function useUserSettings(){
    const defaultSettings = {
        showIndividualAmounts:true,
        showTrustedServiceProvider:false,
        showCashRegisterNumber:false,
        showNetAmount:true
    }

    return useLocalStorage('usersettings', defaultSettings);
}

export function writeSingleUserSetting(settings, key, value){
    settings[key] = value;
    writeUserSettings(settings)
}

export function writeSwitchUserSetting(settings, key){
    settings[key] = !settings[key];
    writeUserSettings(settings)
}

export function writeUserSettings(userSettings){
    writeStorage('usersettings', userSettings);
}