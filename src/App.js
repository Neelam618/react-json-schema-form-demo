import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import 'antd/dist/antd.css';

function App() {
  const Form = withTheme(AntDTheme);
  const schema = {
    "type": "object",
    "title": "Number fields & widgets",
    "properties": {
      "number": {
        "title": "Number",
        "type": "number"
      },
      "integer": {
        "title": "Integer",
        "type": "integer"
      },
      "numberEnum": {
        "type": "number",
        "title": "Number enum",
        "enum": [
          1,
          2,
          3
        ]
      },
      "numberEnumRadio": {
        "type": "number",
        "title": "Number enum",
        "enum": [
          1,
          2,
          3
        ]
      },
      "integerRange": {
        "title": "Integer range",
        "type": "integer",
        "minimum": 42,
        "maximum": 100
      },
      "integerRangeSteps": {
        "title": "Integer range (by 10)",
        "type": "integer",
        "minimum": 50,
        "maximum": 100,
        "multipleOf": 10
      }
    }
  }

  const uiSchema = {
    "integer": {
      "ui:widget": "updown"
    },
    "numberEnumRadio": {
      "ui:widget": "radio",
      "ui:options": {
        "inline": true
      }
    },
    "integerRange": {
      "ui:widget": "range"
    },
    "integerRangeSteps": {
      "ui:widget": "range"
    }
  }
const log = (type) => console.log.bind(console, type);

  return (
    <div style={{margin: '4rem 6rem'}}>
          <Form schema={schema} uiSchema={uiSchema}
            onChange={log("changed")}
            onSubmit={log("submitted")}
            onError={log("errors")} />
    </div>
  );
}

export default App;
