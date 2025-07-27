import {chromium,test  } from "@playwright/test";
test(`Test to Launch Browser`,async()=>{
const browser =await  chromium.launch();
const browserContext = await browser.newContext();
const page = await browserContext.newPage();
await page.goto("https://www.amazon.com/");
const url  = page.url();

console.log(url);
}
)
