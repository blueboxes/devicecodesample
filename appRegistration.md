# Azure App Registration to Access MS Graph API via Device Code Flow

The following steps outline Azure App Registration for OAuth Device Flow.

This will allow you to access the basic user information used in the sample. Should you want to go beyond the sample you will also need to add each permission you need in the API permission tab.

Once complete the TenantId and ClientId you need can be found on the Overview Page.

## Step 1
In Azure select to register a new application. You will need to select the Redirect URI as Public client/native.

![Step 1](/media/reg_step_one.png)



## Step 2
From the Authentication tab you will need to add a platform and  select "IoT & Limited entry Devices"

![Step 2](/media/reg_step_two.png)

## Step 3
Once you have selected the platform you will need to check the Microsoft native client URI. 

![Step 3](/media/reg_step_three.png)

## Step 4
Finally you will need to set the application "Treat application as Public Client"  

![Step 3](/media/reg_step_four.png)