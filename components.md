# DATA

## Data layer

- List of robots:
  - id
  - name
  - image
  - caracteristics:
    - speed (0-10)
    - resistance (0-10)
    - creation data

## Data modifications

- Load robots
- Delete robot
- Add robot

# COMPONENTS

## App

- Show layout component

## Layout

- Show header component
- Show list "Robots list" title with heading
- Show robots list component

## Header?

-Show app title "Robotics" with heading

## Robots list

- Recieves list of robots

- Show a robot card component for every robot in the list of robots

- Sends a robot to each robot card component

## Robot card

- Recieves delete robot action
- Recieves a robot

- Show robot name inside heading

- Show button component to create robot
- Show button component to modify robot
- Show button component to delete robot

- Sends "CREATE" to button component
- Sends "MODIFY" to button component
- Sends "DELETE" to button component

- Sends create robot action to button component to go to CreateForm
- Sends modify robot action to button component to go to ModifyForm
- Sends delete robot action to button component that deletes robot

## Button

- Recieves an icon
- Recieves an action

- Show the recieved icon inside a button

- On click executes the recieved action

## Form

- Shows a button "Create" to submit the form
- Shows a button "Modify" to submit the form

- On submit executes the received create robot action
- On submit executes the received modify robot action
