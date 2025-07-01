# Code Challenge 3 – Blog Post Manager

A web application for managing blog posts. Built using **HTML**, **CSS**, **JavaScript**, and a **local JSON server**. Users can view, add, edit, and delete posts with full CRUD (Create, Read, Update, Delete) functionality.

By **Cassy Omondi**

## Screenshot

![Screenshot of App](Screenshot.png)

## Features

- View a list of blog post titles
- Click a post to view full details (title, content, author)
- Add a new blog post using a form
- Edit an existing post's title and content
- Delete a post
- All actions are synced in real time with the remote JSON server

## Backend API

This app uses a [JSON Server](https://www.npmjs.com/package/json-server) deployed to Render:

> `https://json-server-blog-backend.onrender.com/posts`

The backend is powered by a simple `db.json` file.  
All create, read, update, and delete requests are processed through this API.

---

## How to Use

### Requirements
- A computer, phone, or tablet
- A modern web browser (Chrome, Firefox, Edge, Safari)

#### 1. Clone the repository:
```bash
git clone https://github.com/evansveryown/blog-post-manager.git

Or download the ZIP and extract it.
```

#### 2. Navigate to the project folder:
```bash
cd blog-post-manager
```

#### 3. Start the frontend
If you have Live Server installed (e.g., in VS Code):

Right-click index.html and select:

"Open with Live Server"

The app will launch in your browser and fetch data from the remote Render API.

 --- 
 
# Author

Cassy Omondi

# License

MIT License

Copyright © 2025 Cassy Omondi

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.