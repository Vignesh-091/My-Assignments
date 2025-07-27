import {chromium,firefox,test} from "@playwright/test";
test(`To Launch chromium Browser`,async({})=>{
    const browser = await chromium.launch();
    const browerContext1= await browser.newContext();
    const page = await browerContext1.newPage();
    await page.goto("https://www.redbus.in/");
   let title =await  page.title();
   let url =  await page .url();
   console.log("The Page title is  :"+title);
   console.log("The Given Url is :"+url);
})
test(`To Launch firefox Browser`,async({})=>{
    const browser = await firefox.launch();
    const browerContext2= await browser.newContext();
    const page = await browerContext2.newPage();
   await  page.goto("https://www.flipkart.com/");
   let title =await page.title();
   let url =await page .url();
   console.log("The Page title is  :"+title);
   console.log("The Given Url is :"+url);
})


