

# Meal Tracker

  - This is a meal tracking application.  User can log foods they've eaten each day.  This app will log for only one day at a time.

  Example:

    - Name: "Pad Thai"
    - Details: "No meat, side of peanut sauce, extra veggies"
    - Calories: 298
  ---------

    - Name: "Kure Juice (strawberry)"
    - Details: "16oz, with extra strawberries"
    - Calories: 117
  ---------
##  Specs:
  1. user opens site and fills in an input form |
  - Name: "Pad Thai"
  - Details: "No meat, side of peanut sauce, extra veggies"
  - Calories: 298

  2. user can view all foods they have logged for the day

  3. user has an optional drop-down menu that allows them to see a filtered (pipe) list of 'all foods', 500 calories or less, 500 calories or more

  4. user has the option to cheat, I mean edit the calories, description, and name of the food they logged (all foods)

# Planning
    Configuration/dependencies:
    - use Angluar2 CLI to create new project
    - enter project folder
    - run install CLI code
    - open server using 'ng s --open'



##  Integration:

    * Initial Setup:

    - set up planning and specs in README.md.
    - clone down repo from github
        - cd in to repo
            - git init
            - install the CLI (in or out of folder) - (npm install -g @angular/cli)
            - ng s(serve) --open


####  Project Setup:



    * create components
        - new-log component
        - edit-log component
        - views.pipe.ts ( create a pipe filter )

    * create new model
        - meal-tracker.model.ts( top level )
            - make sure that model is linked properly to the x.component.ts pages for proper access.
                - app / new-form / views.pipe.ts

                * create Meal Class with constructor
                - properties:
                - Name(string)
                - Details(string)
                - Calories(number)

    * link up pages to one another


    UX/UI:
      - Add custom styling / form placement.
      - Bootstrap or jQuery UI( try jQuery UI to improve understanding ).
      - Add image to README.md(icon size)


    FreshenUp:
      - Clean up unneeded code or old code.
      - Fix indentation.
      - Make it tidy.


    Last Call:
      - Pass through objectives one last time.
      - Push one last time.
      - Submit to Epicodus.


## Known Bugs

There are no known bugs.

## Support and contact details

If you notice bugs or would like to contribute in any way please contact me at jaythinkshappiness@gmail.com

## Technologies Used
  bower
  gulp
  angular 2
  node



# Algular2MealTracker

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 1.0.0.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive/pipe/service/class/module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `-prod` flag for a production build.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).
