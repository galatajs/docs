---
footer: false
lastUpdated: true
contributors: true
layout: GalataLayout
---

# The Request 
The req object represents the HTTP request and in this documentation, the object is always referred to as req but its actual name is determined by the parameters to the callback function in which you’re working. It has properties for the request query string, parameters, body, HTTP headers, and others such as:

## Ip address
The `http` package adds the request's ip address to the request object by default and you access it from `req.ip`. Example:

```js
const handler = (req, res, next) => {
    res.success('Your ip: ' + req.ip);
}
```
## Body
The `http` package parses JSON and Url-Encoded data into the request body by defaultand can be accessed from `req.body`. Example:

```js
const handler = (req, res, next) => {
    res.success(req.body);
}
```

## Request Query
This package parse the request query by default and can be accessed from `req.query`.

```js
const handler = (req, res, next) => {
    res.success(req.query);
}
```
## Request Parameters
This package parse the request params by default.

```js
router.post(":id", (req, res, next) => {
    res.success(req.params); // { id: '123' }
})
```
## Request Headers
You can get request headers in a friendly way through this package using `req.headers.get`.

```js
router.get("header", (req, res, next) => {
    const token = req.headers.get("token");
    // do something with token
})
```
You can also set request headers using `req.headers.set`.
```js
router.post("header", (req, res, next) => {
    const token = "" // some encrypt process
    req.headers.set("token", token);
})
```

## Request Cookies
You can select request cookies in a friendly way through this package. All cookie options are available and by default httpOnly is true. Everything is for your safety!

Options
```js
export type CookieOptions = {
    httpOnly?: boolean; // default true
    secure?: boolean;
    maxAge?: number;
    path?: string;
    sameSite?: "strict" | "lax";
    domain?: string;
};
```
- httpOnly: Ensures the cookie is sent only over HTTP and not client-side JavaScript to protect against cross-site scripting attacks.
- secure: Indicates that the cookie is sent to the server only when a request is made with the `https` scheme
- maxAge: Indicates the number of seconds until the cookie expires. A zero or negative number will expire the cookie immediately.
- path: Indicates the path that must exist in the requested URL for the browser to send the Cookie header.
- sameSite: Controls whether or not a cookie is sent with cross-site requests, providing some protection against cross-site request forgery attacks
- domain: Defines the host to which the cookie will be sent.

Examples
```js
router.get("cookie", (req, res, next) => {
    const token = req.cookies.get("token");
    // do something with token
})

// not optioned
router.post("cookies", (req, res, next) => {
    const token = "" // some encrypt process
    req.cookies.set("token", token);
})

// with options
router.post("cookies", (req, res, next) => {
    const token = "" // some encrypt process
    req.cookies.set("token", token, {
        httpOnly: false,
        secure: true,
        maxAge: 1000 * 60 * 60 * 24 * 7,
        domain: "localhost",
        path: "/",
        sameSite: "strict"
    });
})
```
