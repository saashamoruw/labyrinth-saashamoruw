# Objective: Labyrinth

This repository contains code for a simple text-based adventure game, created for the _Software Architecture_ course at the UW iSchool.


## Table of Contents
- [Description](#description)
- [Commands](#commands)
- [Sample](#sample)
- [Requirements](#requirements)
- [Setup](#setup)

## Description
A simple text-based adventure game (similar to the classic games Colossal Cave Adventure or Zork), playable on the command line. Players will be tasked with navigating a (small) labyrinth, finding a "treasure" of some kind while avoiding hazards and dangers, and successfully make it to the exit.

## Commands
- **GO [direction]** lets the player move in a particular direction to another area.
- **LOOK** lets the player see the area's description again. Optionally, you can also support an argument that lets the player "look at" an item or detail.
- **TAKE [item]** lets the player pick up an item from the environment.
- **USE [item]** lets the player use an item they have picked up to overcome a hazard or monster.
- **INVENTORY** gives the player a list of items they have picked up.

## Sample
```
COMPUTER LAB
You are in a computer lab. The smell of old pizza fills the air. There is a door
to the north.
There is a flashlight on the table.
What would you like to do?
> take flashlight
You now have a flashlight.
> go north
You go north.
DARK HALLWAY
You are standing in a dark hallway. It is pitch black. You might be eaten by a monster.
What would you like to do?
> go north
It's too dark to see where to go!
> use flashlight
You turn on the flashlight. Now you can see! There are doors to the south and north, and
you can go east down the hall.
>
```
## Requirements
- [Git](https://git-scm.com)
- [NPM](https://www.npmjs.com/get-npm) 6.14.7
- [Node](https://nodejs.org/en/download/) 14.7.0
- [Typescript](https://www.typescriptlang.org/download)  4.2.4

## Setup
- Clone the repository <br>
```
git clone https://github.com/info443a-sp21/labyrinth-saashamoruw.git
```
- Install typescript <br>
```
npm install -g typescript
```
- Compile and run <br>
```
npm install
tsc
node build/app.js
```
