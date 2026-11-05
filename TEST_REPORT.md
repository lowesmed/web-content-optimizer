# Test Report

## Summary

_Briefly describe how you tested your application – manually through its interface, automatically,
or both – clearly enough that someone else could carry out the same tests. What was hardest to
test, and why?_

Answer: The application has been tested both manually and through automatic testing using vitest.

- **Manual testing** has been made by running `npm run dev` with the app installed locally (see README for instructions). All manual test has been made on a Mac running macOS Tahoe 26.7.1 and a Firefox (159.0) web browser visiting the http://localhost:3000/ development site.

- **Automatic testing** has ben run on the same local development environment has the manual testing. The tests are built using Vitest, running the script `npm run test` in the project folder. Outcome will bre presented in the terminal upon test run.

## Test Results

| Test case                                      | Requirement | Input                                                                                                                         | Expected outcome                                          | Actual outcome  |
| ---------------------------------------------- | ----------- | ----------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------- | --------------- |
| A url to an JPEG image can be used in the form | R 1.1       | A URL to an image (https://images.pexels.com/photos/40409863/pexels-photo-40409863.jpeg) in the "Image url" input text field. | When clicking Generate the url image will get compressed. | ✅ As expected. |
|                                                |             |                                                                                                                               |                                                           |                 |
|                                                |             |                                                                                                                               |                                                           |                 |
|                                                |             |                                                                                                                               |                                                           |                 |
|                                                |             |                                                                                                                               |                                                           |                 |

## Known Issues in Third-Party Modules

_List any flaws you found in the other student's module that affected your application, how they
show up, and how you handled them (e.g. a workaround, or a link to an issue you filed in the
module's repository). Write "None found" if there weren't any._

Answer:
