import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import 'antd/dist/antd.css';

function App() {
  const Form = withTheme(AntDTheme);
  const schema = {
    "title": "A registration form",
    "description": "A simple form example.",
    "type": "object",
    "required": [
      "firstName",
      "lastName"
    ],
    "properties": {
      "firstName": {
        "type": "string",
        "title": "First name",
        "default": "Chuck"
      },
      "lastName": {
        "type": "string",
        "title": "Last name"
      },
      "telephone": {
        "type": "string",
        "title": "Telephone",
        "minLength": 10
      }
    }
  }

const log = (type) => console.log.bind(console, type);

  return (
    <Form schema={schema}
        onChange={log("changed")}
        onSubmit={log("submitted")}
        onError={log("errors")} />
  );
}

export default App;
