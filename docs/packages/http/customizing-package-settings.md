---
footer: false
lastUpdated: true
contributors: true
layout: GalataLayout
---

# Customizing Package Settings

The http package has some default setting that can be changed. They are:

## Port
This package uses port 3000 by default. You can change the port with:

```js
server.config.port = 8080;
app.start();
```

## Host
This package uses host 127.0.0.1 by default. You can change the host with:

```jts
server.config.host = "localhost";
app.start();
```

## Global Prefix
This package has its own main router. And this router uses the / prefix by default. All routes in your app depend on this prefix and you can override it if you want.

```js
server.config.globalPrefix = "/api";
app.start();
```

## Error Handler
This package handles errors by default and returns a result like this:
```json

{
    "success": false,
    "message": "productId required",
    "code": 400
}
```
This can be changed with:
```js
server.config.errorHandler = (err, req, res, next) => {
    res.error('Error: ' + err.message);
}

app.start();
```

## Not Found Handler
This package has a notFoundHandler that returns results as follows by default.
```json

{
    "success": false,
    "message": "Cannot GET /api/v2/products",
    "code": 404
}
```
This can be changed with:
```js
server.config.notFoundRoute = (req, res, next) => {
    res.notFound("Not Found");
}
app.start();
```