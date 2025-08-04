import { chromium,expect,test } from "@playwright/test";
test ("To edit a Lead ", async ({page})=>{
  await page.goto("http://leaftaps.com/opentaps/control/main");
  await page.locator("#username").fill("Demosalesmanager");
  await page.locator("#password").fill("crmsfa");
  await page .locator(".decorativeSubmit").click();
  await page.waitForTimeout(5000); 
  await page .locator('text=CRM/SFA').click();
  await page .getByRole('link',{name: 'Leads'}).click({delay:2000});
  await page .getByRole('link',{name: 'Find Leads'}).click();

  // To search the lead using first name 
  await page .getByRole('textbox',{name:'First name'}).fill("Vignesh");
  await page .getByRole('button',{name:'Find Leads'}).click();
// To edit the lead 

await page.getByRole('link',{name:'Vignesh'}).first().click();
await page.getByRole('link',{name:'Edit'}).click();
await page.locator('#updateLeadForm_companyName').fill("Innova Solutions");
await page.locator('#updateLeadForm_annualRevenue').fill("1500000");
await page.locator('#updateLeadForm_departmentName').fill("Service Offering");
await page.locator('#updateLeadForm_description').fill("The Lead details has changed as per business requirement");
await page.getByRole('button',{name:'Update'}).click();

// To verify the updated fields 

await expect (page.locator("#viewLead_companyName_sp")).toContainText("Innova Solutions");
await expect (page.locator("#viewLead_annualRevenue_sp")).toContainText("$1,500,000.00");
await expect (page.locator("#viewLead_departmentName_sp")).toContainText("Service Offering");
await expect (page.locator("#viewLead_description_sp")).toHaveText("The Lead details has changed as per business requirement")
})