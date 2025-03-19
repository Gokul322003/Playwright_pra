import{test,expect,page} from "@playwright/test"

test("date selection",async ({page})=> {

const year ="2024";
const month="5"
const date="10"
const expectedlist=[month,date,year];
    await page.goto("https://rahulshettyacademy.com/seleniumPractise/#/offers");
    // await page.getByRole("link",{name:"Top Deals"}).click();
    await page.locator(".react-date-picker__calendar-button ").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__navigation__label").click();
    await page.locator(".react-calendar__decade-view__years__year").getByText(year).click();
    await page.waitForTimeout(3000);
    await page.locator(".react-calendar__year-view__months__month").nth(Number(month-1)).click();
    await page.waitForTimeout(3000);
    await page.locator(".react-calendar__month-view__days__day").getByText(date).click();
    await page.waitForTimeout(3000);
    const input =await page.locator(".react-date-picker__inputGroup__input")
    for (let i = 0; i < input.length; i++) {
        const value = input[i].getAttribute("value");
        expect(value).toequal(expectedlist[i]);
        
    }

    
    

    
})