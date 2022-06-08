## Running Late ⏰
- [ ] Create a new branch from `main` named `late`. 
- [ ] Create a function `running_late(date)` in JavaScript that returns `It is late!` if the time is at or after 10:00 PM, and `It is still early!` if it is not. 
- [ ] Once the function is created, export it at the bottom of your file: `exports.running_late = running_late` (so we can test your code!)
- [ ] Commit your code to the `late` branch. 
- [ ] Create a pull request to merge the `late` branch onto `main`, and only merge the pull request when the bot approves your changes. 

> ❗ for this step, edit the `late.js` file

### 🔨 Function Specs:
**Function name**: `running_late(date)`

**Arguments:**
- `date` - a string that the `new Date()` is created from.
> Do NOT use `Date.now()`

> The `date` argument will be in this format: `December 17, 1995 03:24:00`

**Return:**
- Either `It is late!` or `It is still early!`, depending on the time.

### 🧠 Resources:
- [Date() constructor](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Date/Date)
- Google


### 📝 Test your work:
⭐ if the time is 8:00 AM, your function should return `It is still early!`

⭐ if the time is 11:30 PM, your function should return `It is late!`

💡 Make sure to put the line `module.exports = running_late` at the end of your file so we can test your code!
