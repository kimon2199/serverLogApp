# serverLogApp

## Description

## Installing and Running app

To install and run the application for the first time run:

    `docker-compose up --build`

Once the application is running, in order to stop it, run:

    `docker-compose stop`

If the application has been stopped in order to get it running again run:

    `docker-compose start`

Note: If the docker containers are left in a running state when machine is shut down they will automatically run again when the machine is back up.

## Use Cases

## How to Make changes

### Change Ports

### Add/Remove Fields of Entries

In order to add or remove a field of the entries three files need to be edited:

    * `./setup.sql`
    * `./client/commonVariablesReact.js`
    * `./server/commonVariablesNode.js`
