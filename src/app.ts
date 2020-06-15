import { AuthTokenManager } from './authTokenManager';
const axios = require('axios');

const runSampleAsync = async() => {
 
    //Make an request to get the auth token
    //via Device Auth Flow
    const tokenManager = new AuthTokenManager();
    const accessToken = await tokenManager.getAccessToken()

    //Once we have a token make simple request to get 
    //the users display name
    const requestConfig = {
        headers: { Authorization: `Bearer ${accessToken}` }
    };

    const result : any = await axios.get('https://graph.microsoft.com/v1.0/me', requestConfig)
    console.info(`Account found '${result.data.displayName}'`)   
}

runSampleAsync();