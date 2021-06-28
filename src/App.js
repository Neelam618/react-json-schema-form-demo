import { withTheme } from '@rjsf/core';
import { Theme as AntDTheme } from '@rjsf/antd';
import 'antd/dist/antd.css';
import MyForm from './components/MyForm'

function App() {
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
    },
    "anyOf": [
      {
        "title": "First method of identification",
        "properties": {
          "firstName": {
            "type": "string",
            "title": "First name",
            "default": "Chuck"
          },
          "lastName": {
            "type": "string",
            "title": "Last name"
          }
        }
      },
      {
        "title": "Second method of identification",
        "properties": {
          "idCode": {
            "type": "string",
            "title": "ID code"
          }
        }
      }
    ]
  }

  const uiSchema = {
    "integer": {
      "ui:widget": "updown",
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
  const framework = AntDTheme
  // const Form = withTheme(framework);

  return (
    <>
    {/* <div style={{margin: '4rem 6rem'}}>
          <Form schema={schema} uiSchema={uiSchema}
           />
    </div> */}
    <div>
      <MyForm schema={schema} uiSchema={uiSchema} frameworkName ={"AntDTheme"} framework={AntDTheme}/>
    </div>
    </>
  );
}

export default App;
