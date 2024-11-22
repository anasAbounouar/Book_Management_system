# Book Management System

*A simple and efficient Book Management System built with React and Node.js, featuring full CRUD (Create, Read, Update, Delete) functionalities.*

## Table of Contents

- [Introduction](#introduction)
- [Features](#features)
- [Tech Stack](#tech-stack)
- [Prerequisites](#prerequisites)
- [Installation](#installation)
  - [1. Clone the Repository](#1-clone-the-repository)
  - [2. Set Up Environment Variables](#2-set-up-environment-variables)
  - [3. Install Dependencies](#3-install-dependencies)
- [Running the Application](#running-the-application)
  - [Development Mode](#development-mode)
  - [Production Mode](#production-mode)
- [Project Structure](#project-structure)
- [Usage](#usage)
  - [Adding a New Book](#adding-a-new-book)
  - [Editing a Book](#editing-a-book)
  - [Deleting a Book](#deleting-a-book)
  - [Searching for Books](#searching-for-books)
- [Enhancements](#enhancements)
- [Contributing](#contributing)
- [License](#license)
- [Acknowledgements](#acknowledgements)

## Introduction

The **Book Management System** is a full-stack application designed to help users manage their book collections efficiently. Built with **React** for the frontend and **Express.js** with **MongoDB** for the backend, this application allows users to add, view, update, and delete books seamlessly.

## Features

- **Create** new book entries.
- **Read** and display all books.
- **Update** details of existing books.
- **Delete** books from the collection.
- **Client-Side Routing** using React Router.
- **Search and Filter** books based on title, author, and genre.
- **Responsive Design** with basic HTML and CSS.
- **Efficient Communication** between frontend and backend using Axios.
- **Concurrent Development** with backend and frontend servers running simultaneously.

## Tech Stack

### Frontend

- **React**: JavaScript library for building user interfaces.
- **Create React App**: Tool to set up a modern React application without configuration.
- **Axios**: Promise-based HTTP client for making API requests.
- **React Router DOM**: For client-side routing.
- **Basic HTML & CSS**: For building the UI without additional libraries.

### Backend

- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for Node.js.
- **MongoDB**: NoSQL database for storing book data.
- **Mongoose**: ODM (Object Data Modeling) library for MongoDB.
- **Cors**: Middleware to enable Cross-Origin Resource Sharing.
- **Dotenv**: Loads environment variables from a `.env` file.
- **Nodemon**: Utility that monitors for any changes in your source and automatically restarts your server.
- **Concurrently**: Runs multiple commands concurrently.

## Prerequisites

Before you begin, ensure you have met the following requirements:

- **Node.js** and **npm** installed. You can download them from [Node.js Official Website](https://nodejs.org/).
- **MongoDB** database. You can use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas) for a cloud-based solution or install MongoDB locally.
- **Git** installed for version control.

## Installation

### 1. Clone the Repository

```bash
git clone https://github.com/anasAbounouar/Book_Management_system
cd book-management-system
