# Campus Notification System

## Overview

The Campus Notification System is designed to help students receive important updates related to placements, examination results, events, and general announcements. The system focuses on scalability, maintainability, and observability by integrating a reusable Logging Middleware.

This project was developed as part of the Affordmed Campus Hiring Evaluation.

---

## Features

* Notification Management System Design
* Reusable Logging Middleware
* Centralized Application Logging
* Scalable Notification Architecture
* Query Optimization Strategies
* Caching Recommendations
* High-Performance Notification Delivery Design
* Frontend Notification Retrieval Workflow

---

## Project Structure

```text
2315510026/
│
├── logging-middleware/
│   ├── src/
│   ├── package.json
│   └── README.md
│
└── Notification_System_Design.md
```

---

## Logging Middleware

The logging middleware is implemented as a reusable package that communicates with the Affordmed Logging API.

### Log Function

```javascript
Log(stack, level, package, message)
```

### Example

```javascript
await Log(
  "backend",
  "error",
  "handler",
  "received string, expected bool"
);
```

### Supported Values

#### Stack

* backend
* frontend

#### Level

* debug
* info
* warn
* error
* fatal

#### Backend Packages

* cache
* controller
* cron_job
* db
* domain
* handler
* repository
* route
* service

#### Common Packages

* auth
* config
* middleware
* utils

---

## System Architecture

```text
Student
   │
   ▼
Frontend Application
   │
   ▼
Notification Service
   │
   ▼
Database
   │
   ▼
Logging Middleware
   │
   ▼
Affordmed Logging Server
```

---

## Notification Workflow

1. Student opens the application.
2. Frontend requests notifications.
3. Notification Service processes the request.
4. Notifications are fetched from the database.
5. Response is returned to the user.
6. Important events are logged using the Logging Middleware.

---

## API Design

### Create Notification

```http
POST /api/notifications
```

### Get All Notifications

```http
GET /api/notifications
```

### Get Notification By ID

```http
GET /api/notifications/:id
```

### Mark Notification As Read

```http
PATCH /api/notifications/:id/read
```

### Delete Notification

```http
DELETE /api/notifications/:id
```

---

## Query Optimization

To improve notification retrieval performance, a composite index is recommended:

```sql
CREATE INDEX idx_student_read_created
ON notifications(studentID, isRead, createdAt);
```

Benefits:

* Faster filtering
* Faster sorting
* Reduced query execution time

---

## Performance Improvements

### Redis Caching

Cache frequently accessed data such as:

* Latest notifications
* Unread notifications
* Notification counts

Benefits:

* Reduced database load
* Faster response times
* Improved scalability

---

## Notification Delivery Optimization

A message queue architecture is recommended for large-scale notification delivery.

### Technologies

* RabbitMQ
* Apache Kafka
* BullMQ

### Benefits

* Asynchronous processing
* Retry support
* Fault tolerance
* Improved throughput

---

## Logging Strategy

Logging is integrated throughout the application lifecycle.

### Route Logging

```javascript
await Log(
  "backend",
  "info",
  "route",
  "GET /api/notifications called"
);
```

### Controller Logging

```javascript
await Log(
  "backend",
  "info",
  "controller",
  "Fetching notifications"
);
```

### Error Logging

```javascript
await Log(
  "backend",
  "error",
  "service",
  error.message
);
```

---

## Future Enhancements

* Push Notifications
* Email Notifications
* SMS Notifications
* WebSocket-based Real-Time Updates
* Role-Based Access Control
* Notification Preferences

---

## Author

Ankit Yadav

Affordmed Campus Hiring Evaluation Submission
