# Model endpoints

This document describes the endpoints of the API.

Because generation times can be long, the API is designed to run on websockets.
This allows the client to receive updates in real time without having to poll the server or time out waiting for a response.

The API is designed to be as simple as possible, with only a few endpoints.

## Format

All endpoints are available on the root (`/`) of the websocket connection.\
The format of the sent and received data is JSON, with the following structure:

```json
{
    "o": "origin_id",
    "d": "unix_timestamp",
    "t": "request_type",
    "m": "message_data"
}
```

- `o` is the origin of the message, set by the client and echoed back by the server, used for the client to track the source of the message.
- `d` is the UNIX timestamp of the server when the message was sent.
- `t` is the type of the message (a number), used to determine the action to take.
- `m` is the message data, which can be any type of data, depending on the message type.

## Client messages

### `PING` (6)

This message is sent by the client to check if the server is still alive.\
The `m` field can contain any data, but it is ignored by the server.

### `REQUEST` (8)

This message is sent by the client to request a new data generation.\
The `m` field contains the prompt (a string) for the data generation.

## Server messages

### `ACK` (0)

This message is sent by the server to acknowledge a message sent by the client.\
The `m` field always contains a `👍` emoji.

### `SUCCESS` (1) *[NOT IMPLEMENTED]*

> Note: This message is not implemented yet.

### `ERROR` (2)

This message is sent by the server to indicate an error.\
The `m` field contains a string with an error message from the following list:

- `INVALID_MESSAGE_FORMAT`: The request is not valid.
- `INVALID_ORIGIN`: The origin (`o`) is not an integer.
- `INVALID_MESSAGE_TYPE`: The message type (`t`) is not valid.
- `UNKNOWN_MESSAGE_TYPE`: The message type (`t`) is not recognized.
- `INVALID_MESSAGE_DATA`: The message data (`m`) is not valid.

### `START` (3) *[NOT IMPLEMENTED]*

> Note: This message is not implemented yet.

### `DATA` (4)

This message is sent by the server to send generated data to the client.\
The `m` field contains the generated data.

### `END` (5) *[NOT IMPLEMENTED]*

> Note: This message is not implemented yet.

### `PONG` (7)

This message is sent by the server to respond to a `PING` message.\
The `m` field contains a `🏓` emoji
