# Event Bus Angular Library

The **Event Bus Angular** library provides a powerful, scalable event management system for Angular applications. It allows components and services to communicate asynchronously through events, without direct dependencies. The library supports unicast, multicast, and broadcast strategies for event handling, as well as middleware support for enhanced functionality.

## Table of Contents

- [Project Purpose](#project-purpose)
- [Setup Instructions](#setup-instructions)
- [Basic Usage](#basic-usage)
  - [Event Bus Service](#event-bus-service)
  - [Emit Event Decorator](#emit-event-decorator)
  - [Listen to Event Decorator](#listen-to-event-decorator)
  - [Strategies](#strategies)
  - [Middleware](#middleware)
- [License](#license)

## Project Purpose

The **Event Bus Angular** library is designed to simplify event handling in Angular applications. With this library, you can:

- Decouple components and services by enabling communication via events.
- Use different event strategies (unicast, multicast, broadcast) depending on your needs.
- Extend the event system with custom middleware such as logging, error handling, and validation.

## Setup Instructions

### 1. Install the Library

To install the Event Bus Angular library into your Angular project, run:

```bash
npm install event-bus-angular --save
