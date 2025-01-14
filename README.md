# Express.js - Incorrect Error Response for Missing User

This repository demonstrates a common error in Express.js applications where an incorrect response is sent when a resource is not found.

The original code returns a plain text string instead of a JSON object with an appropriate error message. This can lead to issues in client-side applications that expect a structured JSON response for error handling.

The solution demonstrates how to correct the error by sending a JSON object containing an error message and status code.