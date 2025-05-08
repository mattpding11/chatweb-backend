const dotenv = require('dotenv');
const axios = require('axios');
const express = require('express');
const { Request, Response, Router } = require('express');
const cors = require('cors');
const jwt = require('jsonwebtoken');
const socket = require("socket.io");
const http = require("http");

// Barriel file to import third party modules
module.exports = {
    express,
    dotenv,
    cors,
    axios,
    Request,
    Response,
    Router,
    jwt,
    socket,
    http
  };