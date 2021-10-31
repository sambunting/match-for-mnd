# Contributing

First of all - thank you for considering contributing to this project! Changes are happening all the time, and it's difficult for one person to follow everything that's happening (especially when I have a full time job!)

There are two types of ways you can contribute to the project - the first is adding a new player, and the second is making improvements to the site itself.

## Adding a new Player

If you want to add a new player, fork this repo, and add a new `json` file in the `players/` folder. 

The name of the `.json` file should be the name of the player you are adding in the format of all lowercase, and has underscores for spaces. 

Within the JSON file, add in the following content, in the following structure.

```json
{
  "name": "[PLAYER NAME]",
  "status": "Confirmed||Unavailable",
  "source": "[SOURCE]"
}
```

Once done, open a pull request with your changes to go into the `staging` branch.

**Not sure what that means but still want to help out?**

Tweet me or tag me in the source, [@_sambunting](https://twitter.com/_sambunting) - I'll sort it out for you 👍

## Site Improvements

If you'd like to make improvements to the site, clone/fork this repo - and then run `npm install` to install all of the required dependencies.

Once done, make your improvements as needed.

When you have completed all of the improvements, create a pull request and I'll take a look.