# Git4nStats

#### Build using Node JS v12.12.0 and Yarn 1.21.1
### For Dev Using *.ts Files
``` bash
$ yarn
$ yarn dev

```
### For "PDN" Using compiled *.js Files
``` bash
$ yarn
$ yarn start
```
### Use Api using cURL
``` bash
$ curl --location --request POST 'http://localhost:4000/api/users' \
--header 'Content-Type: application/json' \
--data-raw '{
    "usernames": [
        "enspdf"
    ]
}'
```
### Sample Response
```json
{
    "processResponse": [
        {
            "username": "enspdf",
            "gists": [
                {
                    "id": "a50202e6d51823bab7288dff63e27af8",
                    "url": "https://api.github.com/gists/a50202e6d51823bab7288dff63e27af8",
                    "description": "Flutter Clean Recursive - Clear up space on your hard drive by cleaning your Flutter projects. This script searches for all Flutter projects in this directory and all subdirectories and runs 'flutter clean'. Note: may take a long time for folders with large amounts of projects.",
                    "username": "enspdf"
                },
                {
                    "id": "0f86a7bc321a57cf47e1ec4cc06d28a2",
                    "url": "https://api.github.com/gists/0f86a7bc321a57cf47e1ec4cc06d28a2",
                    "description": "How to build small Node JS Docker Image and decrease the build time",
                    "username": "enspdf"
                },
                {
                    "id": "ce5ecc3f35037bc388bee76559ef261f",
                    "url": "https://api.github.com/gists/ce5ecc3f35037bc388bee76559ef261f",
                    "description": "",
                    "username": "enspdf"
                }
            ],
            "events": [
                {
                    "id": "11296938988",
                    "name": "enspdf/react-hooks-variated",
                    "url": "https://api.github.com/repos/enspdf/react-hooks-variated",
                    "actionType": "PushEvent",
                    "username": "enspdf"
                },
                {
                    "id": "11296583923",
                    "name": "enspdf/react-hooks-variated",
                    "url": "https://api.github.com/repos/enspdf/react-hooks-variated",
                    "actionType": "CreateEvent",
                    "username": "enspdf"
                },
                {
                    "id": "11296579788",
                    "name": "enspdf/react-hooks-variated",
                    "url": "https://api.github.com/repos/enspdf/react-hooks-variated",
                    "actionType": "CreateEvent",
                    "username": "enspdf"
                },
                {
                    "id": "11287416974",
                    "name": "enspdf/react-hooks-routing-authentication",
                    "url": "https://api.github.com/repos/enspdf/react-hooks-routing-authentication",
                    "actionType": "PushEvent",
                    "username": "enspdf"
                },
                {
                    "id": "11286703416",
                    "name": "vlang/vid",
                    "url": "https://api.github.com/repos/vlang/vid",
                    "actionType": "WatchEvent",
                    "username": "enspdf"
                }
            ]
        }
    ],
    "status": 200
}
```