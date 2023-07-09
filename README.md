# Video-Streaming App
This is a simple video streaming server written in Node.js and Express. It allows you to stream a video file to a client by sending chunks of the file over HTTP.

## Getting Started
Clone this repository to your local machine.
Install the dependencies by running npm install.
Run the server by running npm start.
Open a web browser and navigate to http://localhost:8001.

## Usage

The server will stream the video file clearout.mp4 by default. You can specify a different video file by setting the VIDEO_FILE environment variable.

To stream a specific range of the video, you can use the Range header in your HTTP request. For example, to stream the first 10 MB of the video, you would use the following request:

GET /video?Range=bytes=0-1048576 HTTP/1.1

The server will respond with a 206 Partial Content response, and the video stream will start at the specified range.

## Frontend of the App.
![Clearout](https://github.com/charlesgalwyn/Video-Streaming/assets/111170924/9e491a39-c275-49c2-8d18-17c6bfeb5003)

## Dependencies

Node.js
Express
fs
path