# Conceptual Exercise

Answer the following questions below:

- What are important differences between Python and JavaScript?
  There are quite a few important syntax differences, but largely, python is used for back-end development and navigating important logic that the end-user doesn't see. Whereas, JS is a front and end language that is used widely in web development.

- Given a dictionary like ``{"a": 1, "b": 2}``: , list two ways you
  can try to get a missing key (like "c") *without* your programming
  crashing.
  You can use get(key, def_val) or you can set the default value if a key is not available via setdefault(key, default_value)

- What is a unit test?
  A unit test tests a small functionality of a program, generally a method or two.

- What is an integration test?
  Integration test tests how multiple portions of the app are working together.

- What is the role of web application framework, like Flask?
  They are designed to support a standard way to develop, build and deoply web apps.

- You can pass information to Flask either as a parameter in a route URL
  (like '/foods/pretzel') or using a URL query param (like
  'foods?type=pretzel'). How might you choose which one is a better fit
  for an application?
  You could look at what method you are using to send the information.

- How do you collect data from a URL placeholder parameter using Flask?
  Using request.args

- How do you collect data from the query string using Flask?
  Get request then use the key/value pair to find what you want.

- How do you collect data from the body of the request using Flask?
  request.data

- What is a cookie and what kinds of things are they commonly used for?
  Cookies are text files with small pieces of data — like a username and password — that are used to identify your computer as you use a computer network.

- What is the session object in Flask?
  They are used to track the session data which is a dictionary object that contains a key-value pair of the session variables and their associated values.

- What does Flask's `jsonify()` do?
  It serializes data to JavaScript Object Notation (JSON) format, wraps it in a Response object.
