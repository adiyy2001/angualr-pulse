# Table of Contents

1. [emit](#emit)
2. [on](#on)
3. [off](#off)
4. [offAll](#offall)
5. [once](#once)
6. [Event Metadata](#event-metadata)
7. [Best Practices](#best-practices)

---

## `emit`

### Purpose

The `emit` method sends out an event by name with a corresponding payload. Any component or service that has subscribed to this event name will receive the new payload.

### Definition

```typescript
emit<T>(event: BaseEvent<T>): void
```

### Parameters

- **event** `(BaseEvent<T>)`: The event object containing metadata, payload, and additional properties.

### Example

```typescript
// Emitting an event in a component
this.eventBus.emit({
  name: 'userLoggedIn',
  timestamp: Date.now(),
  payload: { userId: 12345 },
  metadata: { source: 'webApp' },
});
```

---

## `on`

### Purpose

The `on` method allows you to listen for a specific event by name. It returns an RxJS `Observable` that will emit the entire event object whenever `emit` is called for that event.

### Definition

```typescript
on<T>(eventName: string, filterFn?: (event: BaseEvent<T>) => boolean): Observable<Event<T>>
```

### Parameters

- **eventName** `(string)`: The name of the event to subscribe to.
- **filterFn?** `(event: BaseEvent<T>) => boolean`: An optional filtering function. Only events that satisfy this condition will be emitted to the subscriber.

### Returns

An RxJS `Observable<Event<T>>` that emits every time the event is triggered and the optional filter condition is satisfied.

### Example

```typescript
// Basic subscription
this.eventBus.on<{ userId: string }>('userLoggedIn').subscribe((event) => {
  console.log('User logged in with ID:', event.payload.userId);
  console.log('Metadata:', event.metadata);
});

// Subscription with filter
this.eventBus
  .on<number>('pointsEarned', (event) => event.payload > 100)
  .subscribe((event) => {
    console.log('You earned more than 100 points!', event.payload);
  });
```

---

## `off`

### Purpose

The `off` method allows you to stop listening to an event you previously subscribed to. This is critical for preventing memory leaks in Angular components and services.

### Definition

```typescript
off(subscription: Subscription): void
```

### Parameters

- **subscription** `(Subscription)`: The specific subscription returned when you called `on`.

### Example

```typescript
// In your component
ngOnInit(): void {
  this.subscription = this.eventBus.on<string>('someEvent').subscribe((event) => {
    console.log('Received value:', event.payload);
  });
}

ngOnDestroy(): void {
  // Stop listening to prevent memory leaks
  this.eventBus.off(this.subscription);
}
```

---

## `offAll`

### Purpose

Unsubscribe **all** listeners from a specific event. This completely removes the Subject from memory if no new subscription is created.

### Definition

```typescript
offAll(eventName: string): void
```

### Parameters

- **eventName** `(string)`: The name of the event to remove.

### Example

```typescript
this.eventBus.offAll('someEvent');
// No further subscriptions will be notified until a new subscription is created
```

---

## `once`

### Purpose

The `once` method is a shortcut for subscribing to an event and automatically unsubscribing after the first emission.

### Definition

```typescript
once<T>(eventName: string): Observable<Event<T>>
```

### Parameters

- **eventName** `(string)`: The event name to subscribe to once.

### Example

```typescript
this.eventBus.once<number>('pointsEarned').subscribe((event) => {
  console.log('This will only be logged once:', event.payload);
});
```

---

## Event Metadata

### Purpose

Event metadata allows additional context or properties to be passed along with the payload. This is particularly useful for debugging, logging, or tracing workflows.

### Fields

- **`correlationId`** `(string | undefined)`: Used to correlate multiple events that are part of the same workflow or transaction.
- **`aggregateId`** `(string | undefined)`: Identifies the aggregate root associated with the event, useful in Domain-Driven Design.
- **`metadata`** `(Record<string, any> | undefined)`: A flexible object for storing extra information, such as the source of the event or other contextual data.
- **`timestamp`** `(number)`: The time when the event was created, in milliseconds since the epoch.

### Example

```typescript
const event = {
  name: 'orderCreated',
  timestamp: Date.now(),
  payload: { orderId: '12345' },
  correlationId: 'workflow-001',
  aggregateId: 'order-123',
  metadata: { source: 'adminPanel', userId: 'admin-1' },
};

this.eventBus.emit(event);
```

When subscribing:

```typescript
this.eventBus.on<{ orderId: string }>('orderCreated').subscribe((event) => {
  console.log('Order ID:', event.payload.orderId);
  console.log('Correlation ID:', event.correlationId);
  console.log('Metadata:', event.metadata);
});
```

---

## Best Practices

1. **Use Descriptive Event Names**  
   Make your event names descriptive, e.g., `userLoggedIn`, `itemAddedToCart`, to make it clear what the event does.

2. **Leverage Type Safety**  
   Provide generic types to `emit` and `on` wherever possible to catch type errors at compile time.

3. **Cleanup in Angular Lifecycle Hooks**  
   Always `off` or `offAll` in `OnDestroy` to avoid memory leaks, especially in short-lived components.

4. **Minimize High-Frequency Event Overheads**  
   For events emitted extremely frequently (e.g., real-time data), consider carefully whether you need to store the *last* emission (with `ReplaySubject`) or if a `Subject` would suffice.

5. **Filtering**  
   Use the optional `filterFn` in the `on` method to avoid unnecessary processing in subscribers, improving performance.

6. **Include Metadata for Context**  
   Adding `metadata` like `source`, `correlationId`, or `aggregateId` can make debugging and tracing much easier, especially in distributed systems.

7. **Use `once` for Single-Use Events**  
   If you know an event should only be processed once by a subscriber, use `once` to simplify subscription management.

---

By following the above guidelines and examples, you will ensure a more reliable, scalable, and maintainable event-driven communication flow in your Angular applications.
