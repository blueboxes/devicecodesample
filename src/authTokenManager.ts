const axios = require('axios');
const qs = require('querystring');

import * as config from '../config.json';

export class AuthTokenManager{
 
  public getAccessToken = async() : Promise<string> => {

     //Make the initial request that provides the device code to enter and the url
    const requestConfig = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
    const initialRequestUrl =  `https://login.microsoftonline.com/${config.tenantId}/oauth2/devicecode`;
    const initialRequestBody = {
        client_id: config.clientId,
        scope: 'Presence.Read',
        resource: 'https://graph.microsoft.com'
    }

    const initialResult = await axios.post(initialRequestUrl, qs.stringify(initialRequestBody), requestConfig)

    //request user goes to website and enters the code
    console.info(initialResult.data.message);

    //Poll to get the token
    let tokenData = await this.requestTokenFromCode(initialResult.data.interval * 1000, initialResult.data.device_code);
    return tokenData.access_token;
  };
   
  //Poll to get the token, it will succeed once
  //the user has entered the code on the MS site
  private requestTokenFromCode = async (retryInterval : number, deviceCode: string) : Promise<ITokenData> =>
  {
    const requestConfig = {headers: {'Content-Type': 'application/x-www-form-urlencoded'}}
    const requestTokenUrl =  `https://login.microsoftonline.com/${config.tenantId}/oauth2/token`;
    const tokenRequestBody = {
      client_id: config.clientId,
      grant_type: 'urn:ietf:params:oauth:grant-type:device_code',
      code: deviceCode
    }
  
    try {
      const result = await axios.post(requestTokenUrl, qs.stringify(tokenRequestBody), requestConfig) 
      return result.data;
    } catch (error) {
      
      if(error.response.data.error === 'authorization_pending'){
        await this.sleep(retryInterval);
        return this.requestTokenFromCode(retryInterval, deviceCode)
      }else{
        throw error;
      }
    }
  }
   
  //Helper method to allow async sleep
  private sleep(milliseconds : number) {
    return new Promise(resolve => setTimeout(resolve, milliseconds));
  }

}