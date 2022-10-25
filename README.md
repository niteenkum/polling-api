POLLING API: This repo contains the API's built on NOde js and which helps to create question, add options to any particular question, add votes to option.
## Screenshots

#### Polling API Postman
![App Screenshot](https://snipboard.io/E2XaNT.jpg)

## API Reference

#### Get question

```https
  GET http://localhost:8000/questions/${questionId}
```

#### Add new question

```https
  POST http://localhost:8000/questions/create
```

| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `"content"`      | `string` | **Required**.  question to add in the list. |

#### Add Todo Task
```https
  POST http://localhost:8000/questions/${questionID}/options/create
```
| Parameter | Type     | Description                       |
| :-------- | :------- | :-------------------------------- |
| `"content"`      | `string` | **Required**.  question to add in the list. |

#### Add vote to a options
  POST http://localhost:8000/options/${optionID}/add_vote

#### Delete question
Question can only be deleted if it's options does not have any votes.
```https
  DELETE http://localhost:8000/questions/${questionId}/delete
```

#### Delete Option
Question can only be deleted if it's options does not have any votes.
```https
  DELETE http://localhost:8000/options/${optionId}/delete
```


## Run Locally

Clone the project

```bash
  git clone https://github.com/niteenkum/Employee-Review-System
```

Go to the project directory

```bash
  cd Employee-Review-System
```

Install dependencies

```bash
  npm Install
```

Start the server

```bash
  npm start

  View on http://localhost:8000/
```

