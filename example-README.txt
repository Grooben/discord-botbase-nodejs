# What's config.json, and why do I need one!?
## Why?
Ah, that's nice and simple.
The config.json file allows me to distribute this bot easily, and allow users to specify their own prefixes and token. This stops you from taking over my servers!
## Making a config file
Creating one couldn't be easier. Simply open up your favourite text editor (such as Atom :D), and create a file named "config.json" in the same folder as "index.js", and just copy the following...
```JSON
{
    "token" : "<Your Token Here>",
    "prefix" : "<Preferred Symbol>"
}
```
## Getting a token
Again, a relatively simple step.
1. Head over to https://discordapp.com/developers/applications/ and log into your Discord account.
2. Click "Create an application" and follow the steps through, when you click "Save Changes", you are redirected back to the page you were on a minute ago.
3. Click on your new bot, and then navigate to "Bot" on the left menu on the page, follow the steps to make yourself a bot, and then copy the token.
4. Put this token in the "config.json" file
5. To add your bot to your servers, simply use https://discordapp.com/oauth2/authorize?client_id=clientidhere&scope=bot
   You can get your client ID from the General Information page of your bot.
